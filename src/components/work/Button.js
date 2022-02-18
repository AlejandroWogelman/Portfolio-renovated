export const Button = ({ setInElement, name, arrow }) => {
  let action;
  arrow === "up" ? (action = true) : (action = false);
  return (
    <button
      onClick={() =>
        setInElement((element) => {
          return {
            ...element,
            [name]: action,
          };
        })
      }
    >
      <img
        src={require(`../../assets/${arrow}.svg`).default}
        alt="arrow-down-up"
        width="20px"
      />
    </button>
  );
};
