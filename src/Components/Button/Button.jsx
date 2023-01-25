import "./button.css";

function CustButton(props) {
  return (
    <button
      className="rcButton shadow-sm "
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        borderRadius: props.br,
        border: props.border,
        width: props.w,
        height: props.h,
        fontSize: props.fSize,
        fontFamily: props.fFamily,
        padding: props.pad,
        margin: props.margin
      }}
      type={props.type}
      onClick={(()=>{props.HBC()})}
    >
        {props.icon}{props.name}
    </button>
  );
}
export default CustButton;