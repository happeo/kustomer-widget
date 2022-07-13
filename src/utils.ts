import { BUNDLE_CDN } from "./ChatBot";
export const removeWidget = () => {
  let script = document.querySelector(`script[src="${BUNDLE_CDN}"]`);
  if (script) {
    const widgetElement = document.getElementById("kustomer-ui-sdk-iframe");
    if (widgetElement) widgetElement.remove();
  }
};
