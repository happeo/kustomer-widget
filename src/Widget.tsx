import React, { useEffect, useState } from "react";
import widgetSDK from "@happeo/widget-sdk";
import { Loader } from "@happeouikit/loaders";
import ChatBot from "./ChatBot";
import { TextZeta, BodyUI } from "@happeouikit/typography";
import { LinkExternal } from "@happeouikit/form-elements";
import { WIDGET_SETTINGS } from "./constants";

interface Props {
  id: string;
  editMode: boolean;
}

interface WidgetAPI {
  setSettings: (settings: object) => Promise<void>;
  getSettings(): Promise<{ [key: string]: any }>;
  declareSettings(_: object, callback: Function): Promise<void>;
}

const Widget = ({ id, editMode }: Props) => {
  const [initialized, setInitialized] = useState(false);
  const [settings, setSettings] = useState({
    apiKey: "",
    brandId: undefined,
  });

  useEffect(() => {
    const doInit = async () => {
      // Init API
      const api = (await widgetSDK.api.init(id)) as WidgetAPI;
      await api.declareSettings(WIDGET_SETTINGS, setSettings);
      setInitialized(true);
    };
    doInit();
  }, [id]);

  if (!initialized) {
    return <Loader />;
  }

  if (!settings.apiKey) {
    return (
      <div data-testid="chatbot-not-configured-container">
        <TextZeta>Kustomer ChatBot Widget</TextZeta>
        <BodyUI>Please provide your API key.</BodyUI>
        <BodyUI>
          To access the Chat SDK settings for a brand in Kustomer, go to Apps
          and select Chat. From the Chat Management page, select the brand and
          then go to the Install Chat tab.
        </BodyUI>
        <BodyUI>
          Read more about{" "}
          <LinkExternal href="https://developer.kustomer.com/chat-sdk/v2.0-Web/docs">
            Kustomer Chat SDK: Get Started
          </LinkExternal>
          .
        </BodyUI>
      </div>
    );
  }

  return (
    <div>
      {editMode ? (
        <div>
          <TextZeta>Kustomer ChatBot Widget</TextZeta>
          <BodyUI>
            Widget will be rendered to bottom right corner after closing the
            edit mode.
          </BodyUI>
          <BodyUI>This text will be visible only in edit mode. </BodyUI>
        </div>
      ) : (
        <ChatBot brandId={settings.brandId} apiKey={settings.apiKey} />
      )}
    </div>
  );
};

export default Widget;
