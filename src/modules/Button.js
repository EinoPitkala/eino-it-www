export default function Button(props) {
  return (
    <>
      <a className="button" href={props.url}>
        {props.buttonText}
      </a>
    </>
  );
}
