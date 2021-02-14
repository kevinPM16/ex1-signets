import './Appli.scss';

export default function Signet(props) {
  return (
    <li className="Signet">
    <img src={'images-produits/' + props.id + '.jpg'} alt=""/>
    <div className="info">
      <p className="nom">{props.nom}</p>
      <p className="prix">{props.prix}</p>
    </div>
    
  </li>
  );
}
