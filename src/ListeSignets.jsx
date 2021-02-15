import './Appli.scss';
import signet from './signet';

export default function Appli() {
  return (
    <div className="ListeProduits">
    <ul>
      {/* On va générer les produits à partir de la 
        structure obtenue du fichier JSON des produits */}
      
      {tabSignets.map(sig => 
       <Signet etatSignet={sig.etatSignet} key={sig.id} titre={sig.titre} id={prd.id} couleur={sig.couleur} date={sig.date} />
      )}
    </ul>
  </div>
  );
}
