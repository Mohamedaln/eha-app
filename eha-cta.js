import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaCta extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-cta";
  }

  constructor() {
    super();
    this.lbl1 = "click here";
    this.pg1 = "home";
    this.style1 = "primary";
  }

  static get properties() {
    return {
      ...super.properties,
      lbl1: { type: String },
      pg1: { type: String },
      style1: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: inline-block; }

      .btn1 {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        border-radius: 4px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        font-family: var(--ddd-font-navigation);
        border: 2px solid var(--eha-accent);
      }

      .btn1.prim1 { background: var(--eha-accent); color: var(--eha-surface); }
      .btn1.sec1 { background: transparent; color: var(--eha-accent); }
    `];
  }

  clicked1() {
    this.dispatchEvent(new CustomEvent("go-to", {
      bubbles: true, composed: true,
      detail: { pg1: this.pg1 }
    }));
  }

  render() {
    var cls1 = this.style1 === "primary" ? "btn1 prim1" : "btn1 sec1";
    return html`
      <button class="${cls1}" @click="${this.clicked1}">${this.lbl1}</button>
    `;
  }
}

if (!customElements.get("eha-cta")) {
  customElements.define("eha-cta", EhaCta);
}