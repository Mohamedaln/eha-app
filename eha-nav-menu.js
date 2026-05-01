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
        font-size: var(--ddd-font-size-s);
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
        border: 1px solid var(--eha-accent);
        border-radius: var(--ddd-radius-sm);
        min-width: var(--ddd-spacing-40);
        z-index: 200;
        padding: var(--ddd-spacing-2) 0;
      }

      .dropHead1 {
        color: var(--eha-accent);
        font-size: var(--ddd-font-size-xs);
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
        font-size: var(--ddd-font-size-xs);
        font-family: var(--ddd-font-navigation);
        cursor: pointer;
      }

      .drop1 a:hover { color: var(--eha-accent); background: var(--eha-surface-2); }

      .drop1 .desc1 {
        font-size: var(--ddd-font-size-xs);
        color: var(--eha-muted);
        padding: 0 var(--ddd-spacing-4) var(--ddd-spacing-1);
        font-family: var(--ddd-font-navigation);
      }
    `];
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMenu1();
    this._key1 = (e) => {
      if (e.key === "Escape") {
        this.open1 = false;
        this.requestUpdate();
      }
    };
    document.addEventListener("keydown", this._key1);
    document.addEventListener("click", (e) => {
      if (!this.contains(e.target)) {
        this.open1 = false;
      }
    });
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this._key1);
    super.disconnectedCallback();
  }

  async loadMenu1() {
    var url1 = window.location.hostname === "localhost" ? "/menu.json" : "/api/menu";
    try {
      var res1 = await fetch(url1);
      var json1 = await res1.json();
      // json outline schema uses "items" array with "title" and "slug"
      this.items1 = json1.items;
    } catch(e) {
      this.items1 = [
        { id: "1", title: "for parents", slug: "about" },
        { id: "2", title: "for coaches", slug: "about" },
        { id: "3", title: "contact us", slug: "about" },
        { id: "4", title: "register now", slug: "programs" },
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
    e.stopPropagation();
    this.open1 = !this.open1;
    this.requestUpdate();
  }

  render() {
    return html`
      <button class="moreBtn1" aria-expanded="${this.open1 ? 'true' : 'false'}" aria-controls="drop1" @click="${this.tglOpen1}">
        more ${this.open1 ? '▲' : '▼'}
      </button>

      ${this.open1 ? html`
        <div class="drop1" id="drop1">
          <div class="dropHead1">resources</div>
          ${this.items1.map(item1 => html`
            <a href="?page=${item1.slug}" @click="${(e) => { e.preventDefault(); this.goTo1(item1.slug); }}">${item1.title}</a>
          `)}
        </div>
      ` : ``}
    `;
  }
}

if (!customElements.get("eha-nav-menu")) {
  customElements.define("eha-nav-menu", EhaNavMenu);
}