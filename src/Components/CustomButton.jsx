const CustomButton = (props) => {
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.Btntext} {props.loading} {props.icon}
    </button>
  );
};

export default CustomButton;
