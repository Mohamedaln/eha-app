import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaHero extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-hero";
  }

  constructor() {
    super();
    this.drk1 = true;
  }

  static get properties() {
    return {
      ...super.properties,
      drk1: { type: Boolean },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .hero1 {
        background-color: #0d1b2a;
        border-bottom: var(--ddd-border-sm) solid var(--eha-border);
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--ddd-spacing-10) var(--ddd-spacing-6);
      }

      .hero1.lgt1 {
        background-color: #f0f4f8;
      }

      .hero1.lgt1 h1 {
        color: #102033;
      }

      .hero1.lgt1 h1 span {
        color: #c9a84c;
      }

      .hero1.lgt1 p {
        color: #5d6b7d;
      }

      .line1 {
        width: var(--ddd-spacing-10);
        height: var(--ddd-spacing-1);
        background: #c9a84c;
        margin: 0 auto var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-sm);
      }

      h1 {
        font-size: var(--ddd-font-size-4xl);
        color: #f5f5f5;
        font-family: var(--ddd-font-navigation);
        margin: 0 0 var(--ddd-spacing-3) 0;
      }

      h1 span { color: var(--eha-accent); }

      p {
        color: #aaa;
        font-size: var(--ddd-font-size-l);
        font-family: var(--ddd-font-navigation);
        margin: 0 0 var(--ddd-spacing-8) 0;
      }

      .btns1 {
        display: flex;
        gap: var(--ddd-spacing-4);
        flex-wrap: wrap;
        justify-content: center;
      }

      .btn1 {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-s);
        font-weight: bold;
        cursor: pointer;
        font-family: var(--ddd-font-navigation);
        border: var(--ddd-border-md) solid var(--eha-accent);
      }

      .btn1.prim1 { background: var(--eha-accent); color: var(--eha-surface); }
      .btn1.sec1 { background: transparent; color: var(--eha-accent); }

      @media (max-width: 600px) {
        h1 { font-size: var(--ddd-font-size-xl); }
        .hero1 { min-height: var(--ddd-spacing-40); }
      }
    `];
  }

  render() {
    var cls1 = this.drk1 ? "hero1" : "hero1 lgt1";
    return html`
      <div class="${cls1}">
        <div class="line1"></div>
        <h1>Elite <span>Hoops</span> Alliance</h1>
        <p>Where Champions Are Made</p>
        <div class="btns1">
          <button class="btn1 prim1" @click="${() => {
            this.dispatchEvent(new CustomEvent("go-to", {
              bubbles: true,
              composed: true,
              detail: { pg1: "programs" }
            }));
          }}">register now</button>
          <button class="btn1 sec1" @click="${() => {
            this.dispatchEvent(new CustomEvent("go-to", {
              bubbles: true,
              composed: true,
              detail: { pg1: "schedule" }
            }));
          }}">view schedule</button>
        </div>
      </div>
    `;
  }
}

if (!customElements.get("eha-hero")) {
  customElements.define("eha-hero", EhaHero);
}