import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaAbout extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-about";
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .abt1 {
        background: var(--eha-surface);
        padding: var(--ddd-spacing-10) var(--ddd-spacing-6);
        max-width: var(--ddd-spacing-max-width);
        margin: auto;
        text-align: center;
      }

      .line1 {
        width: var(--ddd-spacing-8);
        height: var(--ddd-spacing-1);
        background: var(--eha-accent);
        margin: 0 auto var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-sm);
      }

      h2 {
        font-size: var(--ddd-font-size-xl);
        color: var(--eha-page-text);
        font-family: var(--ddd-font-navigation);
        margin: 0 0 var(--ddd-spacing-4) 0;
      }

      h2 span { color: var(--eha-accent); }

      p {
        color: var(--eha-muted);
        font-family: var(--ddd-font-navigation);
        line-height: 1.8;
        margin: 0 0 var(--ddd-spacing-6) 0;
      }

      .btn1 {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        border: var(--ddd-border-md) solid var(--eha-accent);
        background: transparent;
        color: var(--eha-accent);
        border-radius: var(--ddd-radius-sm);
        cursor: pointer;
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
      }
    `];
  }

  render() {
    return html`
      <div class="abt1">
        <div class="line1"></div>
        <h2>about <span>EHA</span></h2>
        <p>
          Elite Hoops Alliance has been developing youth basketball players since 2010.
          We believe every kid deserves access to elite coaching, competitive play, and
          a community that pushes them to be their best both on and off the court.
          With over 200 players across 5 age divisions, EHA is the premier youth
          basketball organization in the region.
        </p>
        <button class="btn1" @click="${() => {
          this.dispatchEvent(new CustomEvent("go-to", {
            bubbles: true,
            composed: true,
            detail: { pg1: "about" }
          }));
        }}">learn more</button>
      </div>
    `;
  }
}

if (!customElements.get("eha-about")) {
  customElements.define("eha-about", EhaAbout);
}