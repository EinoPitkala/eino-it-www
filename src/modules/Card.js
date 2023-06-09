export default function Card(props) {
  return (
    <div className="card">
      <h5 className="card-new">{
        props.new ? "Uutta!" : ""
      }</h5>
      <div className="card-icon">{props.icon}</div>
      <h3 className="card-title">{props.title}</h3>
      <p className="card-content">{props.content}</p>
      <h3 className="card-title">{props.rating}</h3>
      <div className="card-button">{props.children}</div>
    </div>
  );
}
