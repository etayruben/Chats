function TextArea(props) {
  return (
    <div dir="auto" className="input-wrap">
      <textarea
        dir="auto"
        placeholder="type a message here!"
        className="text-area"
        onKeyDown={props.handleClick}
      />
    </div>
  );
}

export default TextArea;
