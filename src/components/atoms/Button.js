const Button = (props) => {
  return (
    <button
      className="bg-secondary hover:bg-tertiary text-white text-xl font-bold p-2 rounded-md"
      type={props?.type}
      onClick={props?.onClick}
    >
      {props.text}
    </button>
  );
};
export default Button;
