import "../styles/host.css";

function Host(host) {
  return (
    <div className="picture">
      <p className="hostName">{host.host.name}</p>
      <img src={host.host.picture} alt="host" className="hostPicture" />
    </div>
  );
}

export default Host;
