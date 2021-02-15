import './ListeSignets.scss';
import Signet from './Signet.jsx';
import tabSignets from './data/signets.json';

export default function ListeSignets() {
  return (
    <div className="ListeProduits">
    <ul>
      {/* On va générer les produits à partir de la 
        structure obtenue du fichier JSON des produits */}
      
      {tabSignets.map(sig => 
       <Signet etatSignet={sig.etatSignet} key={sig.id} titre={sig.titre} id={sig.id} couleur={sig.couleur} dateModif={sig.dateModif} />
      )}
    </ul>
  </div>
  );
}
