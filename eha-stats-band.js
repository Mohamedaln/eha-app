import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaStatsBand extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-stats-band";
  }

  constructor() {
    super();
    this.stats1 = [
      { num1: "200+", lbl1: "youth players" },
      { num1: "5", lbl1: "age divisions" },
      { num1: "12", lbl1: "coaches" },
      { num1: "2010", lbl1: "est." },
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      stats1: { type: Array },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .band1 {
        background: var(--eha-surface);
        padding: var(--ddd-spacing-8) var(--ddd-spacing-6);
        display: flex;
        justify-content: center;
        gap: var(--ddd-spacing-10);
        flex-wrap: wrap;
      }

      .stat1 { text-align: center; }

      .num1 {
        font-size: var(--ddd-font-size-4xl);
        font-weight: bold;
        color: var(--eha-accent);
        font-family: var(--ddd-font-navigation);
        display: block;
      }

      .lbl1 {
        font-size: 11px;
        color: var(--eha-muted);
        font-family: var(--ddd-font-navigation);
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    `];
  }

  render() {
    return html`
      <div class="band1">
        ${this.stats1.map(s1 => html`
          <div class="stat1">
            <span class="num1">${s1.num1}</span>
            <span class="lbl1">${s1.lbl1}</span>
          </div>
        `)}
      </div>
    `;
  }
}

if (!customElements.get("eha-stats-band")) {
  customElements.define("eha-stats-band", EhaStatsBand);
}