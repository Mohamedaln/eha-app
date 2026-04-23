import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaHero extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-hero";
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .hero1 {
        background: #0d1b2a;
        min-height: 460px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--ddd-spacing-10) var(--ddd-spacing-6);
      }

      .line1 {
        width: 50px;
        height: 4px;
        background: #c9a84c;
        margin: 0 auto var(--ddd-spacing-4);
        border-radius: 2px;
      }

      h1 {
        font-size: var(--ddd-font-size-4xl);
        color: #f5f5f5;
        font-family: var(--ddd-font-navigation);
        margin: 0 0 var(--ddd-spacing-3) 0;
      }

      h1 span { color: #c9a84c; }

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
        border-radius: 4px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        font-family: var(--ddd-font-navigation);
        border: 2px solid #c9a84c;
      }

      .btn1.prim1 { background: #c9a84c; color: #0a0a0a; }
      .btn1.sec1 { background: transparent; color: #c9a84c; }

      @media (max-width: 600px) {
        h1 { font-size: var(--ddd-font-size-xl); }
        .hero1 { min-height: 340px; }
      }
    `];
  }

  render() {
    return html`
      <div class="hero1">
        <div class="line1"></div>
        <h1>Elite <span>Hoops</span> Alliance</h1>
        <p>Where Champions Are Made</p>
        <div class="btns1">
          <button class="btn1 prim1">register now</button>
          <button class="btn1 sec1">view schedule</button>
        </div>
      </div>
    `;
  }
}

customElements.define("eha-hero", EhaHero);