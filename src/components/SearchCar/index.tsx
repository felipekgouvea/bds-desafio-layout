import '../SearchCar/styles.css';

const SearchCar = () => {
  return (
    <div className="catalog-search-container">
      <form>        
        <input
          type="text"
          className="catalog-search-input"
          name="name"
          placeholder="Digite sua busca"
        />
        <input type="submit" className="catalog-search-button" value="Buscar" />
      </form>
    </div>
  );
};

export default SearchCar;
