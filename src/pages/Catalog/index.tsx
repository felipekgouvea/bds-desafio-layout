import CarCards from '../../components/CarCards';
import SearchCar from '../../components/SearchCar';

const Catalog = () => {
  return (
    <div className="container my-4">
      <SearchCar />
      <div className="row card-card-container">
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CarCards />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CarCards />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CarCards />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CarCards />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CarCards />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <CarCards />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
