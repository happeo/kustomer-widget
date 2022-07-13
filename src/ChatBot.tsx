import React from "react";
import useScript from "./useScript";

export const BUNDLE_CDN = "https://cdn.kustomerapp.com/chat-web/widget.js";

interface Props {
  apiKey: string;
  brandId?: string;
}

const ChatBot = ({ brandId, apiKey }: Props) => {
  const status = useScript({
    src: BUNDLE_CDN,
    apiKey,
  });

  React.useEffect(() => {
    if (window.Kustomer && status === "ready") {
      window.Kustomer.start({ brandId });
    }
  }, [brandId, status]);

  return null;
};

export default ChatBot;
