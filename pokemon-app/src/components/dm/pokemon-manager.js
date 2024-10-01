import { LitElement } from "lit";

export class PokemonManager extends LitElement {

  async _getPokemons() {
    try {
      let pokemons = [];
      if (sessionStorage.getItem('pokemon-data') !== null) {
        pokemons = JSON.parse(sessionStorage.getItem('pokemon-data'));
      } else {
        const url = 'http://localhost:3002';
        const response = await fetch(`${url}/pokemon`);
        const resPokemons = await response.json();
        pokemons = this._buildPokemonData(resPokemons);
        sessionStorage.setItem('pokemon-data', JSON.stringify(pokemons));
      }
      this._sendData(pokemons);
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  _buildPokemonData(data) {
    return data.map(item => ({
        id: item.id,
        name: item.name,
        image: './src/assets/img/pokemons/' + item.image,
        evolutions: item?.evolutions?.map((evolution, index) => ({
          id: index + 1,
          name: evolution.name,
          image: './src/assets/img/pokemons/' + evolution.image,
          types: evolution.type.split('/')
        })),
        powers: item.type.split('/')
      })
    );
    
  }

  _sendData(data) {
    this.dispatchEvent(
      new CustomEvent('pokemons-loaded', {
        detail: data,
        bubbles: true,
        composed: true
      })
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this._getPokemons();
  }

}

customElements.define('pokemon-manager', PokemonManager);
