import './signet.scss';


export default function signet(props) {
  return (
    <li className="signet">
    <img src={'images-signets/' + props.id + '.jpg'} alt=""/>
    <div className="info">
      <p className="nom">{props.nom}</p>
      <p className="dateModif">{props.dateModif}</p>
      <p className="troisPoints"></p>
    </div>
    
  </li>
  );
}
