import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaNavMenu extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-nav-menu";
  }

  constructor() {
    super();
    this.open1 = false;
  }

  static get properties() {
    return {
      ...super.properties,
      open1: { type: Boolean },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: inline-block; position: relative; }

      .moreBtn1 {
        background: none;
        border: none;
        color: #f5f5f5;
        font-size: 14px;
        cursor: pointer;
        font-family: var(--ddd-font-navigation);
      }

      .moreBtn1:hover { color: #c9a84c; }

      .drop1 {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: #0d1b2a;
        border: 1px solid #c9a84c;
        border-radius: 6px;
        min-width: 160px;
        z-index: 200;
        padding: var(--ddd-spacing-2) 0;
      }

      .drop1.open1 { display: block; }

      .drop1 a {
        display: block;
        color: #f5f5f5;
        text-decoration: none;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        font-size: 13px;
        font-family: var(--ddd-font-navigation);
        cursor: pointer;
      }

      .drop1 a:hover { color: #c9a84c; background: #1a2a3a; }
    `];
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", (e) => {
      if (!this.contains(e.target)) this.open1 = false;
    });
  }

  goTo1(pg) {
    this.dispatchEvent(new CustomEvent("go-to", {
      bubbles: true, composed: true,
      detail: { pg1: pg }
    }));
    this.open1 = false;
  }

  render() {
    return html`
      <button class="moreBtn1" @click="${() => this.open1 = !this.open1}">
        more ${this.open1 ? '▲' : '▼'}
      </button>
      <div class="drop1 ${this.open1 ? 'open1' : ''}">
        <a @click="${() => this.goTo1('about')}">for parents</a>
        <a @click="${() => this.goTo1('about')}">for coaches</a>
        <a @click="${() => this.goTo1('about')}">contact us</a>
        <a @click="${() => this.goTo1('programs')}">register now</a>
      </div>
    `;
  }
}

customElements.define("eha-nav-menu", EhaNavMenu);