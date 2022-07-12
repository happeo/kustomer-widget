import React from "react";
import ReactDOM from "react-dom";
import Widget from "./Widget";

class happeoCustomReactWidget extends HTMLElement {
  connectedCallback() {
    const uniqueId = this.getAttribute("uniqueId") || "";
    const mode = this.getAttribute("mode") || "";

    ReactDOM.render(<Widget id={uniqueId} editMode={mode === "edit"} />, this);
  }
}

const slug = "kustomer-chatbot-v2-u0gb2m1qohtujlmtf1t9";

window.customElements.get(slug) ||
  window.customElements.define(slug, happeoCustomReactWidget);
