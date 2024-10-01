import { css } from 'lit';

export const drawerFormStyles = css`
  .drawer-form {
    position: fixed;
    top: 0;
    right: -31.25rem;
    width: 21.875rem;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    transition: right 0.3s ease;
    padding: 1rem;
    overflow-y: auto;
    @media (max-width: 486px) {
      width: 100%;
    }
  }

  .drawer-form.open {
    right: 0;
  }

  .drawer-form__title {
    margin: 16px 0;
  }

  .drawer-form__description {
    margin: 16px 0;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .overlay.open {
    visibility: visible;
    opacity: 1;
  }

  input {
    padding: 0.75rem 1rem;
    margin-bottom: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.313rem;
    font-size: 0.875rem;
  }

  input:focus {
    outline: none;
    border: 2px solid #F5C556;
    border-radius: 0.5rem;
    font-size: 0.875rem;
  }

  .drawer-form__container-form-elem {
    margin: 0.5rem 0;
  }
  .drawer-form__container-form-elem-input {
    width: -webkit-fill-available;
  }

  .drawer-form__container-form-elem-checkbox-alert {
    margin: 1rem 0 0.5rem 0;
  }
  
  .drawer-form__container-form-elem-button {
    border: none;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(252,158,69,1) 100%);
    color: #fff;
  }

  .close-button {
    border: none;
    font-size: 2rem;
    background: transparent;
    color: red;
  }
`;