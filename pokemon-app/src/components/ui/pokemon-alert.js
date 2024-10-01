import { LitElement, html } from "lit";
import { mainStyles } from "../../styles/styles";
import { alertStyles } from "../../styles/alert-styles";

export class PokemonAlert extends LitElement {
  static properties = {
    title: {
      type: String
    },
    description: {
      type: String
    },
    type: {
      type: String
    }
  }
  
  static styles = [
    mainStyles,
    alertStyles
  ];

  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.type = '';
  }

  render() {
    return html`
      <div class="w-full border-box alert ${this.type}">
        <p class="font-w-700">${this.title !== '' ? this.title : 'Sin Título'}</p>
        <p class="font-w-500">${this.description !== '' ? this.description : ''}</p>
      </div>
    `
  }
}

customElements.define('pokemon-alert', PokemonAlert);