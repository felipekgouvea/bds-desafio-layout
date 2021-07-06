import './styles.css';
import { ReactComponent as ImageCar } from '../../assets/images/catalog-car.svg';

const CarCards = () => {
  return (
    <div className="catalog-containerr">
      <div className="catalog-cars-content">
        <p className="catalog-cars-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <h3 className="catalog-cars-title">Audi Supra TT</h3>
        <ImageCar />
      </div>
      <button className="btn catalog-cars-button">Comprar</button>
    </div>
  );
};

export default CarCards;
