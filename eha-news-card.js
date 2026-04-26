import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaNewsCard extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-news-card";
  }

  constructor() {
    super();
    this.ttl1 = "";
    this.dt1 = "";
    this.txt1 = "";
    this.lnk1 = "#";
  }

  static get properties() {
    return {
      ...super.properties,
      ttl1: { type: String },
      dt1: { type: String },
      txt1: { type: String },
      lnk1: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; flex: 1; min-width: 220px; }

      .card1 {
        background: var(--eha-surface);
        border: 1px solid var(--eha-border);
        border-radius: 8px;
        padding: var(--ddd-spacing-5);
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-2);
      }

      .card1:hover { border-color: var(--eha-accent); }

      .dt1 {
        font-size: 11px;
        color: var(--eha-accent);
        font-family: var(--ddd-font-navigation);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      h3 {
        font-size: var(--ddd-font-size-s);
        color: var(--eha-page-text);
        font-family: var(--ddd-font-navigation);
        margin: 0;
      }

      p {
        font-size: 13px;
        color: var(--eha-muted);
        font-family: var(--ddd-font-navigation);
        margin: 0;
        flex: 1;
        line-height: 1.5;
      }

      a {
        font-size: 13px;
        color: var(--eha-accent);
        font-family: var(--ddd-font-navigation);
        text-decoration: none;
      }

      a:hover { text-decoration: underline; }
    `];
  }

  render() {
    return html`
      <div class="card1">
        <div class="dt1">${this.dt1}</div>
        <h3>${this.ttl1}</h3>
        <p>${this.txt1}</p>
        <a href="${this.lnk1}">read more</a>
      </div>
    `;
  }
}

if (!customElements.get("eha-news-card")) {
  customElements.define("eha-news-card", EhaNewsCard);
}