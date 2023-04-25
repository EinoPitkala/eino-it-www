
export default function Card(props) {
  return (
    <div className="card">
      <div className="card-icon">{props.icon}</div>
      <h3 className="card-title">{props.title}</h3>
      <p className="card-content">{props.content}</p>
    </div>
  );
}


