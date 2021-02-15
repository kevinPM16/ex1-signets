import './Signet.scss';


export default function Signet(props) {
  return (
    <li className="signet">
    <img src={'images-signets/' + props.id + '.jpg'} alt=""/>
    <div className="info">
      <p className="titre">{props.titre}</p>
      <p className="dateModif">{props.dateModif}</p>
      <p className="troisPoints">troisPoints</p>
    </div>
    
  </li>
  );
}
