import './styles.css';

import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="card-container">
      <Link to="/cars">
        <button className="btn card-button">Ver Catálogo</button>
      </Link>
      <h2 className="card-content-text">Comece agora a navegar</h2>
    </div>
  );
};

export default Card;
