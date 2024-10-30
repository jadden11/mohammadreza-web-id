const Btn = (props) => {
  const { text } = props;
  return (
    <a
      href="https://www.instagram.com/mzar.id/"
      className="btn btn-neutral-content"
    >
      {text}
    </a>
  );
};

export default Btn;
