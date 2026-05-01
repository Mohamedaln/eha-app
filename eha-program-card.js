import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaProgramCard extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-program-card";
  }

  constructor() {
    super();
    this.ttl1 = "";
    this.txt1 = "";
  }

  static get properties() {
    return {
      ...super.properties,
      ttl1: { type: String },
      txt1: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .card1 {
        background: var(--eha-surface);
        border: var(--ddd-border-sm) solid var(--eha-border);
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-5);
      }

      .card1:hover { border-color: var(--eha-accent); }

      h3 {
        font-size: var(--ddd-font-size-s);
        color: var(--eha-accent);
        font-family: var(--ddd-font-navigation);
        margin: 0 0 var(--ddd-spacing-2) 0;
      }

      p {
        font-size: var(--ddd-font-size-xs);
        color: var(--eha-muted);
        font-family: var(--ddd-font-navigation);
        margin: 0;
        line-height: 1.5;
      }
    `];
  }

  render() {
    return html`
      <div class="card1">
        <h3>${this.ttl1}</h3>
        <p>${this.txt1}</p>
      </div>
    `;
  }
}

if (!customElements.get("eha-program-card")) {
  customElements.define("eha-program-card", EhaProgramCard);
}
