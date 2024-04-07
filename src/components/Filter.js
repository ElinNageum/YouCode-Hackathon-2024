import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext';


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

  const [, setCart] = useContext(CartContext);

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  // when user presses submit, show filtered items
  const onSubmit = (e) => {
    e.preventDefault()
    if(!menChecked && !womenChecked && !under200 && !above200 && !electronicsChecked) {
        alert('Please add an activity')
        return
    }

    console.log('submitted')
    filterProducts();

    setShowOptions(false);
    setMenChecked(false)
    setWomenChecked(false)
    setUnder200(false)
    setAbove200(false)
    setElectronicsChecked(false)
  }

  // Helper function that filters products based on its gender/price
  const filterProducts = () => {
    let filtered = data;
  
    filtered = data.filter(product => {
      const catCondition = (menChecked && product.category === "men's clothing") ||
                              (womenChecked && product.category === "women's clothing") ||
                              (electronicsChecked && product.category === "electronics") || 
                              (!menChecked && !womenChecked && !electronicsChecked); // Includes all if none is checked
  
      const priceCondition = (under200 && product.price < 200) ||
                             (above200 && product.price >= 200) ||
                             (!under200 && !above200); // Includes all if none is checked
  
      return catCondition && priceCondition;
    });
  
    setFilter(filtered);
  }; 
  
  // change choices back to false
  const handleMenChange = () => {
    setMenChecked(!menChecked);
  };

  const handleWomenChange = () => {
    setWomenChecked(!womenChecked);
  };

  const handleUnder200Change = () => {
    setUnder200(!under200);
  };

  const handleAbove200Change = () => {
    setAbove200(!above200);
  };

  const handleElectronicsChange = () => {
    setElectronicsChecked(!electronicsChecked);
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className='Filter'>
      {showOptions ? (
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="checkbox"
              checked={menChecked}
              onChange={handleMenChange}
            />
            Men
          </div>

          <div>
            <input
              type="checkbox"
              checked={womenChecked}
              onChange={handleWomenChange}
            />
            Women
          </div>

          <div>
            <input
              type="checkbox"
              checked={under200}
              onChange={handleUnder200Change}
            />
            Under $200
          </div>

          <div>
            <input
              type="checkbox"
              checked={above200}
              onChange={handleAbove200Change}
            />
            Above $200
          </div>

          <div>
            <input
              type="checkbox"
              checked={electronicsChecked}
              onChange={handleElectronicsChange}
            />
            Electronics
          </div>

          <input type='submit' value='Submit' />
        </form>
      ) : (
        <div>
          {filter.map(product => (
            <div key={product.id} style={{ marginBottom: '20px' }}>
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ width: '100px', height: '100px' }} 
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}

      {loading && <div>hi</div>}
    </div>
  );
};


export default Filter

