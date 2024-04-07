import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'


const Filter = () => {

  const [skiChecked, setSkiChecked] = React.useState(false);
  const [hikingChecked, setHikeChecked] = React.useState(false);
  const [climbingChecked, setClimbChecked] = React.useState(false);
  const [showOptions, setShowOptions] = useState(true);

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

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
    if(!skiChecked && !hikingChecked && !climbingChecked) {
        alert('Please add an activity')
        return
    }

    console.log('submitted')
    filterProducts();

    setShowOptions(false);
    setSkiChecked(false)
    setClimbChecked(false)
    setHikeChecked(false)
  }

  // Helper function that filters products based on its sport (ski, hiking, climbing)
  const filterProducts = () => {
    let filtered = data;
  
    if (skiChecked) {
      filtered = filtered.filter(product => product.category === 'ski');
    }
    if (hikingChecked) {
      filtered = filtered.filter(product => product.category === 'hiking');
    }
    if (climbingChecked) {
      filtered = filtered.filter(product => product.category === 'climbing');
    }

    filtered = data.filter(product =>
      (skiChecked && product.category === 'Ski') ||
      (hikingChecked && product.category === 'Hiking') || 
      (climbingChecked && product.category === 'Climbing')
    );
    
    if (filtered.length === 0) {
      filtered = data;
    }

    setFilter(filtered);
  };

  // change choices back to false
  const handleSkiChange = () => {
    setSkiChecked(!skiChecked);
  };

  const handleHikeChange = () => {
    setHikeChecked(!hikingChecked);
  };

  const handleClimbChange = () => {
    setClimbChecked(!climbingChecked);
  };

  return (
    <div className='Filter'>
      {showOptions ? (
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="checkbox"
              checked={skiChecked}
              onChange={handleSkiChange}
            />
            Ski
          </div>

          <div>
            <input
              type="checkbox"
              checked={hikingChecked}
              onChange={handleHikeChange}
            />
            Hiking
          </div>

          <div>
            <input
              type="checkbox"
              checked={climbingChecked}
              onChange={handleClimbChange}
            />
            Climbing
          </div>

          <input type='submit' value='Submit' />
        </form>
      ) : (
        <div>
          {filter.map(product => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              {/* Display other product details as needed */}
            </div>
          ))}
        </div>
      )}

      {loading && <div>Loading...</div>}
    </div>
  );
};


export default Filter

