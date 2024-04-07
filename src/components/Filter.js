// import React from 'react'
// import {useState} from 'react'
// import {useEffect} from 'react'


// const Filter = () => {

//   const [menChecked, setMenChecked] = useState(false);
//   const [womenChecked, setWomenChecked] = useState(false);
//   const [under200, setUnder200] = useState(false);
//   const [above200, setAbove200] = useState(false);
//   const [electronicsChecked, setElectronicsChecked] = useState(false);
//   const [showOptions, setShowOptions] = useState(true);

//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let componentMounted = true;

//     const getProducts = async () => {
//       const response = await fetch("https://fakestoreapi.com/products/");
//       if (componentMounted) {
//         const responseData = await response.json();
//         setData(responseData);
//         setLoading(false);
//       }
//     };

//     getProducts();

//     return () => {
//       componentMounted = false;
//     };
//   }, []);

//   // when user presses submit, show filtered items
//   const onSubmit = (e) => {
//     e.preventDefault()
//     if(!menChecked && !womenChecked && !under200 && !above200 && !electronicsChecked) {
//         alert('Please add an activity')
//         return
//     }

//     console.log('submitted')
//     filterProducts();

//     setShowOptions(false);
//     setMenChecked(false)
//     setWomenChecked(false)
//     setUnder200(false)
//     setAbove200(false)
//     setElectronicsChecked(false)
//   }

//   // Helper function that filters products based on its gender/price
//   const filterProducts = () => {
//     let filtered = data;
  
//     filtered = data.filter(product => {
//       const catCondition = (menChecked && product.category === "men's clothing") ||
//                               (womenChecked && product.category === "women's clothing") ||
//                               (electronicsChecked && product.category === "electronics") || 
//                               (!menChecked && !womenChecked && !electronicsChecked); // Includes all if none is checked
  
//       const priceCondition = (under200 && product.price < 200) ||
//                              (above200 && product.price >= 200) ||
//                              (!under200 && !above200); // Includes all if none is checked
  
//       return catCondition && priceCondition;
//     });
  
//     setFilter(filtered);
//   }; 

//   // change choices back to false
//   const handleMenChange = () => {
//     setMenChecked(!menChecked);
//   };

//   const handleWomenChange = () => {
//     setWomenChecked(!womenChecked);
//   };

//   const handleUnder200Change = () => {
//     setUnder200(!under200);
//   };

//   const handleAbove200Change = () => {
//     setAbove200(!above200);
//   };

//   const handleElectronicsChange = () => {
//     setElectronicsChecked(!electronicsChecked);
//   };

//   return (
//     <div className='Filter'>
//       {showOptions ? (
//         <form onSubmit={onSubmit}>
//           <div>
//             <input
//               type="checkbox"
//               checked={menChecked}
//               onChange={handleMenChange}
//             />
//             Men
//           </div>

//           <div>
//             <input
//               type="checkbox"
//               checked={womenChecked}
//               onChange={handleWomenChange}
//             />
//             Women
//           </div>

//           <div>
//             <input
//               type="checkbox"
//               checked={under200}
//               onChange={handleUnder200Change}
//             />
//             Under $200
//           </div>

//           <div>
//             <input
//               type="checkbox"
//               checked={above200}
//               onChange={handleAbove200Change}
//             />
//             Above $200
//           </div>

//           <div>
//             <input
//               type="checkbox"
//               checked={electronicsChecked}
//               onChange={handleElectronicsChange}
//             />
//             Electronics
//           </div>

//           <input type='submit' value='Submit' />
//         </form>
//       ) : (
//         <div>
//           {filter.map(product => (
//             <div key={product.id} style={{ marginBottom: '20px' }}>
//               <img 
//                 src={product.image} 
//                 alt={product.title} 
//                 style={{ width: '100px', height: '100px' }} 
//               />
//               <h3>{product.title}</h3>
//               <p>${product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {loading && <div>Loading...</div>}
//     </div>
//   );
// };


// export default Filter

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
          <button type="submit" className="btn btn-primary">Submit</button>
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
