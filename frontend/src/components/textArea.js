function TextArea({ handleKeyClick }) {
  return (
    <div dir="auto" className="input-wrap">
      <textarea
        dir="auto"
        placeholder="type a message here!"
        className="text-area"
        onKeyDown={handleKeyClick}
      />
    </div>
  );
}

export default TextArea;
