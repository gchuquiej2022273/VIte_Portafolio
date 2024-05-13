
// eslint-disable-next-line react/prop-types
export const CardProjects = ({url, title, text}) => {
    return (
        <div className="card-project-container">
          <img src={url} alt="CardLogo" 
              width="100%"
              height="100%"
          />
          <div className="card__content-project">
            <p className="card__title-project">{title}</p>
            <p className="card__description-project">{text}</p>
          </div>
        </div>
    );
  };