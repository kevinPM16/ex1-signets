import { useState } from 'react';
import './Page.scss';
import Entete from "./Entete.jsx";
import ListeSignets from "./ListeSignets.jsx"

export default function Page() {

    const etatSignet = useState({});

  return (
    <div className="Appli">
        <Entete/>
        <section className="contenuPrincipal">
            <ListeSignets etatSignet={etatSignet} />
      </section>
    </div>
  );
}
