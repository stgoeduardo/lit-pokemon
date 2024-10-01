import { LitElement, html, css } from "lit";
import { mainStyles } from "../styles/styles.js";
import '../components/ui/pokemon-card.js';

export class PokemonHome extends LitElement {

  static properties = {
    _pokemons: {
      attribute: false,
      type: Array
    }
  };

  static styles = [
    mainStyles,
    css`
      .card-list {
        gap: 1rem;
        padding: 1rem;
        @media (max-width: 872px) {
          display: flex;
          justify-content: center;
        }
      }
      
    `
  ];

  constructor() {
    super();
    this._pokemons = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('pokemons-loaded', (e) => {
      this._pokemons = e.detail || [];
    });
  }

  render() {
    return html`
      <pokemon-manager></pokemon-manager>
      <div class="d-flex d-flex-wrap card-list">
        ${this._pokemons?.map(
          (item) => html`
            <pokemon-card .item=${item}></pokemon-card>
          `
        )}
      </div> 
    `
  }

}

customElements.define('pokemon-home', PokemonHome);
