import React from "react";
import ReactDOM from "react-dom";
import Widget from "./Widget";
import { removeWidget } from "./utils";

class happeoCustomReactWidget extends HTMLElement {
  connectedCallback() {
    const uniqueId = this.getAttribute("uniqueId") || "";
    const mode = this.getAttribute("mode") || "";

    ReactDOM.render(<Widget id={uniqueId} editMode={mode === "edit"} />, this);
  }
  disconnectedCallback() {
    removeWidget();
  }
}

//const slug = "kustomer-chatbot-v2-u0gb2m1qohtujlmtf1t9";

// Staging marketplace
// const slug = "kustomer-widget-grvnr9okmxmbsudifk0a-ac";

// Prod marketplace
const slug = "kustomer-widget-zmkl6ixsn72g6cxuuz92-ac";

window.customElements.get(slug) ||
  window.customElements.define(slug, happeoCustomReactWidget);
