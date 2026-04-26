import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaSponsors extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-sponsors";
  }

  constructor() {
    super();
    this.spons1 = ["Nike", "Gatorade", "Under Armour", "ESPN", "State Farm"];
  }

  static get properties() {
    return {
      ...super.properties,
      spons1: { type: Array },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .wrap1 {
        background: var(--eha-surface);
        border-top: 1px solid var(--eha-border);
        padding: var(--ddd-spacing-8) var(--ddd-spacing-6);
        text-align: center;
      }

      .ttl1 {
        font-size: 11px;
        color: var(--eha-muted);
        font-family: var(--ddd-font-navigation);
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: var(--ddd-spacing-6);
      }

      .row1 {
        display: flex;
        justify-content: center;
        gap: var(--ddd-spacing-8);
        flex-wrap: wrap;
      }

      .sp1 {
        color: var(--eha-muted);
        font-size: 14px;
        font-weight: bold;
        font-family: var(--ddd-font-navigation);
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border: 1px solid var(--eha-border);
        border-radius: 4px;
      }

      .sp1:hover { color: var(--eha-accent); border-color: var(--eha-accent); }
    `];
  }

  render() {
    return html`
      <div class="wrap1">
        <div class="ttl1">our partners</div>
        <div class="row1">
          ${this.spons1.map(s1 => html`<div class="sp1">${s1}</div>`)}
        </div>
      </div>
    `;
  }
}

if (!customElements.get("eha-sponsors")) {
  customElements.define("eha-sponsors", EhaSponsors);
}