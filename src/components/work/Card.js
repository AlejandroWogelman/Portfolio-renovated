import { Links } from "./Links";

export const Card = ({ img, name, principal, text, skills, link, git }) => {
  return (
    <>
      <div className="card_container">
        <h2>{name}</h2>
        <div className="card_content">
          <img src={img} alt={name} />

          <div className="card_hidden">
            <div className="card_links">
              <Links link={link} />
              <Links link={link} git={true} />
            </div>
            <div className="card_data">
              <div className="card_skills">
                {skills.map((el) => (
                  <p className="card_data__p" key={el}>
                    {el}
                  </p>
                ))}
              </div>
              <div className="card_data__principal">
                {principal.map((el) => (
                  <h3 key={el}>{el}</h3>
                ))}
              </div>

              <p className="card_data__text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
