import { css } from 'lit';

export const detailStyles = css`

  .container-back-button {
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background: transparent; text-decoration: underline
  }

  .container-detail {
    margin: 1rem 0;
    @media (max-width: 592px) {
      display: flex;
      flex-direction: column;
    }
  }

  .container-detail__main-profile {
    flex: 1;
    padding: 1rem;
  }
  
  .container-detail__main-features {
    flex: 3;
    padding: 0.5rem 1rem;
  }

  .container-detail__main-features-alert {
    margin: 1rem 0;
  }
  
  .container-detail__main-photo-img {
    width: 13.438rem;
    height: 13.438rem;
  }
  
  .container-detail__main-photo-img img {
    width: 13.438rem;
    height: 13.438rem;
  }
`;