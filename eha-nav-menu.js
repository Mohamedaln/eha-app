import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaNavMenu extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-nav-menu";
  }

  constructor() {
    super();
    this.open1 = false;
    this.items1 = [];
  }

  static get properties() {
    return {
      ...super.properties,
      open1: { type: Boolean },
      items1: { type: Array },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: inline-block; position: relative; }

      .moreBtn1 {
        background: none;
        border: none;
        color: var(--eha-page-text);
        font-size: 14px;
        cursor: pointer;
        font-family: var(--ddd-font-navigation);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
      }

      .moreBtn1:hover { color: var(--eha-accent); }

      .drop1 {
        position: absolute;
        top: 100%;
        left: 0;
        background: var(--eha-surface);
        border: 1px solid var(--eha-border);
        border-radius: 6px;
        min-width: 160px;
        z-index: 200;
        padding: var(--ddd-spacing-2) 0;
      }

      .dropHead1 {
        color: var(--eha-accent);
        font-size: 11px;
        font-weight: bold;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4) var(--ddd-spacing-1);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-family: var(--ddd-font-navigation);
      }

      .drop1 a {
        display: block;
        color: var(--eha-page-text);
        text-decoration: none;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        font-size: 13px;
        font-family: var(--ddd-font-navigation);
        cursor: pointer;
      }

      .drop1 a:hover { color: var(--eha-accent); background: var(--eha-surface-2); }
    `];
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMenu1();
    document.addEventListener("click", (e) => {
      if (!this.contains(e.target)) {
        this.open1 = false;
      }
    });
  }

  async loadMenu1() {
    var url1 = window.location.hostname === "localhost" ? "/menu.json" : "/api/menu";
    try {
      var res1 = await fetch(url1);
      var json1 = await res1.json();
      this.items1 = json1.items;
    } catch(e) {
      this.items1 = [
        { label: "for parents", page: "about" },
        { label: "for coaches", page: "about" },
        { label: "contact us", page: "about" },
        { label: "register now", page: "programs" },
      ];
    }
  }

  goTo1(pg) {
    this.dispatchEvent(new CustomEvent("go-to", {
      bubbles: true, composed: true,
      detail: { pg1: pg }
    }));
    this.open1 = false;
  }

  tglOpen1(e) {
    if (e) {
      e.stopPropagation();
    }
    this.open1 = !this.open1;
    this.requestUpdate();
  }

  render() {
    return html`
      <button class="moreBtn1" @click="${this.tglOpen1}">
        more ${this.open1 ? '▲' : '▼'}
      </button>

      ${this.open1 ? html`
        <div class="drop1">
          <div class="dropHead1">resources</div>
          ${this.items1.map(item1 => html`
            <a @click="${() => this.goTo1(item1.page)}">${item1.label}</a>
          `)}
        </div>
      ` : ``}
    `;
  }
}

if (!customElements.get("eha-nav-menu")) {
  customElements.define("eha-nav-menu", EhaNavMenu);
}