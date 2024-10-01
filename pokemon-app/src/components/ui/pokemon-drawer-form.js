import { LitElement, html } from "lit";
import { mainStyles } from "../../styles/styles";
import { drawerFormStyles } from "../../styles/drawer-form-styles";
import './pokemon-alert.js'

export class PokemonDrawerForm extends LitElement {

  static properties = {
    isOpen: {
      type: Boolean
    },
    data: {
      type: Object
    },
    _showAlert: {
      attribute: false,
      type: Boolean
    }
  }

  static styles = [
    mainStyles,
    drawerFormStyles
  ]
  
  constructor() {
    super();
    this.isOpen = false;
  }

  _onSubmit(evt) {
    evt?.preventDefault();
    const formData = new FormData(evt?.target || {});
    this.dispatchEvent(new CustomEvent('send-form-data', {
      detail: {
        id: this.data?.id,
        name: formData.get('name'),
        types: formData.get('types').split(','),
        image: this.data.image
      },
      bubbles: true,
      composed: true
    }));
    this._close();
  }

  _close() {
    this.dispatchEvent(new CustomEvent('close-drawer-form', {
      bubbles: true,
      composed: true
    }));
  }

  _changeQuestion(evt) {
    this._showAlert = (evt?.target?.checked);
  }

  render() {
    return html`
      <div class="overlay ${this.isOpen ? 'open' : ''}"></div>
      
      <div class="drawer-form border-box ${this.isOpen ? 'open' : ''}">
        <div class="w-full d-flex d-flex-justify-end">
          <button
            class="close-button cursor-pointer"
            @click="${() => this._close()}">
            &times;
          </button>
        </div>
        <h2 class="drawer-form__title">
          Editar evolución (<mark>${this.data?.name}</mark>)
        </h2>
        <p class="drawer-form__description">
          Edite la información de la evolución seleccionada.
        </p>
        <div class="w-full border-box drawer-form__container">
          <form
            @submit="${this._onSubmit}"
            autocomplete="off"
            class="drawer-form__container-form w-full d-flex d-flex-col border-box">
            <div class="drawer-form__container-form-elem w-full border-box d-flex d-flex-col">
              <label>Nombre</label>
              <input
                class="drawer-form__container-form-elem-input"
                type="text"
                name="name"
                placeholder="Nombre"
                required
                .value="${this.data?.name}"    
              />
            </div>
            <div class="drawer-form__container-form-elem w-full border-box d-flex d-flex-col">
              <label>Tipos(separar por comas)</label>
              <input
                class="drawer-form__container-form-elem-input"
                type="text"
                name="types"
                placeholder="Tipos"
                required
                .value="${this.data?.types}"
              />
            </div>
            <div class="drawer-form__container-form-elem w-full border-box">
              <input
                class="drawer-form__container-form-elem-checkbox"
                type="checkbox"
                name="duplicate"
                @change=${this._changeQuestion}
              /> ¿Este pokemon (${this.data?.pokemon}) está repetido?
              ${this._showAlert
                  ?
                  html`
                    <div class="drawer-form__container-form-elem-checkbox-alert w-full">
                      <pokemon-alert
                        .title="${this.data.duplicate?.alert?.title}"
                        .type="${this.data.duplicate?.alert?.type}">
                        </pokemon-alert>
                    </div>
                  ` 
                  : null
                }
            </div>
            <div class="drawer-form__container-form-elem">
              <button
                class="drawer-form__container-form-elem-button"
                type="submit">
                Guardar datos
              </button>
            </div>
          </form>
        </div>
      </div>
    `
  }

}

customElements.define('pokemon-drawer-form', PokemonDrawerForm);