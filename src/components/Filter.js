import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
  const [menChecked, setMenChecked] = useState(false);
  const [womenChecked, setWomenChecked] = useState(false);
  const [under200, setUnder200] = useState(false);
  const [above200, setAbove200] = useState(false);
  const [electronicsChecked, setElectronicsChecked] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    };

    getProducts();
  }, []);

  const filterProducts = () => {
    let filtered = data.filter(product => {
      const catCondition = (menChecked && product.category === "men's clothing") ||
                           (womenChecked && product.category === "women's clothing") ||
                           (electronicsChecked && product.category === "electronics");
      const priceCondition = (under200 && product.price < 200) ||
                             (above200 && product.price >= 200);
      return (catCondition || !menChecked && !womenChecked && !electronicsChecked) &&
             (priceCondition || !under200 && !above200);
    });
    setFilter(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterProducts();
    setShowOptions(false);
  };

  return (
    <div className='container mt-3'>
      {showOptions ? (
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={menChecked} onChange={() => setMenChecked(!menChecked)} id="menCheck"/>
            <label className="form-check-label" htmlFor="menCheck" style={{ color: 'white' }}>Men</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={womenChecked} onChange={() => setWomenChecked(!womenChecked)} id="womenCheck"/>
            <label className="form-check-label" htmlFor="womenCheck" style={{ color: 'white' }}>Women</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={under200} onChange={() => setUnder200(!under200)} id="under200Check"/>
            <label className="form-check-label" htmlFor="under200Check" style={{ color: 'white' }}>Under $200</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={above200} onChange={() => setAbove200(!above200)} id="above200Check"/>
            <label className="form-check-label" htmlFor="above200Check" style={{ color: 'white' }}>Above $200</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={electronicsChecked} onChange={() => setElectronicsChecked(!electronicsChecked)} id="electronicsCheck"/>
            <label className="form-check-label" htmlFor="electronicsCheck" style={{ color: 'white' }}>Electronics</label>
          </div>
          {/* <button type="submit" className="btn btn-primary">Submit</button> */}
          <button type="submit" className="button">Submit</button>

        </form>
      ) : (
        <div className="row">
          {filter.map(product => (
            <div className="col-md-4 d-flex align-items-stretch" key={product.id}>
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <Link to={"/product/" + product.id} className="btn btn-primary">View Product</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {loading && <div className="text-center"><span>Loading...</span></div>}
    </div>
  );
};

export default Filter;
