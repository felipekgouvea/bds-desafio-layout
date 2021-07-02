import { ReactComponent as BannerImage } from '../../assets/images/banner-car.svg';
import './styles.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-slogan-container">
        <h1 className="banner-titulo-content">
          O carro perfeito para você
        </h1>
        <h4 className="banner-subtitulo-content">
          Conheça nossos carros e dê mais um passo na realização do seu sonho
        </h4>
      </div>
      <div className="banner-image-container">
        <BannerImage/>
      </div>
    </div>
  );
};

export default Banner;
