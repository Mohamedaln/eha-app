import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaSchedule extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-schedule";
  }

  constructor() {
    super();
    this.games1 = [];
  }

  static get properties() {
    return {
      ...super.properties,
      games1: { type: Array },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .wrap1 {
        padding: var(--ddd-spacing-8) var(--ddd-spacing-6);
        max-width: 1100px;
        margin: auto;
      }

      h2 {
        color: var(--eha-accent);
        font-family: var(--ddd-font-navigation);
        margin: 0 0 var(--ddd-spacing-6) 0;
      }

      .row1 {
        display: flex;
        gap: var(--ddd-spacing-4);
        overflow-x: auto;
        padding-bottom: var(--ddd-spacing-2);
      }

      .game1 {
        background: var(--eha-surface);
        border: 1px solid var(--eha-border);
        border-radius: 8px;
        padding: var(--ddd-spacing-4);
        min-width: 200px;
        flex-shrink: 0;
        font-family: var(--ddd-font-navigation);
      }

      .game1:hover { border-color: var(--eha-accent); }

      .gDt1 {
        font-size: 11px;
        color: var(--eha-accent);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: var(--ddd-spacing-2);
      }

      .gTeam1 {
        font-size: 14px;
        color: var(--eha-page-text);
        font-weight: bold;
        margin-bottom: var(--ddd-spacing-1);
      }

      .gLoc1 { font-size: 12px; color: var(--eha-muted); }

      .gDiv1 {
        display: inline-block;
        background: var(--eha-accent);
        color: var(--eha-surface);
        font-size: 10px;
        font-weight: bold;
        padding: 2px 8px;
        border-radius: 10px;
        margin-top: var(--ddd-spacing-2);
      }

      .loading1 {
        color: var(--eha-muted);
        font-size: 14px;
        font-family: var(--ddd-font-navigation);
      }
    `];
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadGames1();
  }

  async loadGames1() {
    var url1 = window.location.hostname === "localhost" ? "/schedule.json" : "/api/schedule";
    try {
      var res1 = await fetch(url1);
      var json1 = await res1.json();
      this.games1 = json1.games;
    } catch(e) {
      this.games1 = [];
    }
  }

  render() {
    return html`
      <div class="wrap1">
        <h2>upcoming games</h2>
        ${this.games1.length === 0
          ? html`<p class="loading1">loading schedule...</p>`
          : html`
            <div class="row1">
              ${this.games1.map(g1 => html`
                <div class="game1">
                  <div class="gDt1">${g1.date1} at ${g1.time1}</div>
                  <div class="gTeam1">${g1.home1} vs ${g1.away1}</div>
                  <div class="gLoc1">${g1.loc1}</div>
                  <span class="gDiv1">${g1.div1}</span>
                </div>
              `)}
            </div>
          `
        }
      </div>
    `;
  }
}

if (!customElements.get("eha-schedule")) {
  customElements.define("eha-schedule", EhaSchedule);
}