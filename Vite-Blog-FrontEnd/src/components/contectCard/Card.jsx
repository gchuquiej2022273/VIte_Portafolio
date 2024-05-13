
// eslint-disable-next-line react/prop-types
export const CardContainer = ({url, title, text}) => {
    return (
        <div className="card">
          <img src={url} alt="CardLogo" 
              width="100%"
              height="100%"
          />
          <div className="card__content">
            <p className="card__title">{title}</p>
            <p className="card__description">{text}</p>
          </div>
        </div>
    );
  };
  