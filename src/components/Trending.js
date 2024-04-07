import React from 'react'
import Navbar from './Navbar'


const Trending = () => {

  //   const trending = [
  //       {
  //         name: "ION LIGHTWEIGHT CHALK BAG",
  //         description: "Light, durable chalk bag designed for easy access and lasting reliability.",
  //         image: "./images/trending/ION_LIGHTWEIGHT_CHALK_BAG",
  //         product: "https://arcteryx.com/ca/en/shop/ion-lightweight-chalk-bag"
  //       },
  //       {
  //           name: "GAMMA SHORT 6'' WOMEN'S",
  //           description: "Comfortable, durable softshell shorts designed for a range of outdoor activities.",
  //           image: "./images/trending/GAMMA_SHORT_WOMEN'S.png",
  //           product: "https://arcteryx.com/ca/en/shop/womens/gamma-short-6"
  //       },
  //       {
  //         name: "CERIUM HYBRID HOODY WOMEN'S",
  //         description: "Lightest Cerium combines the warmth of down with breathable stretch panels.",
  //         image: "./images/trending/CERIUM_HYBRID_HOODY_WOMEN'S",
  //         product: "https://arcteryx.com/ca/en/shop/womens/cerium-hybrid-hoody"
  //       }
  //     ]

  //     var content = trending.map((product) => (
  //       <div className = 'Product'>
  //         <li>
  //           <h1>
  //             {product.name}
  //           </h1>
  //           <text>
  //           {product.description}
  //           </text>
  //          <image src={product.image}/>
  //          <text>{product.product}</text>
  //         </li>
  //       </div>
  //   ))

  //   var fakecontent = trending.map((product) => (
  //     <div className = 'TrendingSmall'>
  //       <li>
  //         <h1>
  //           {product.name}
  //         </h1>
  //         <text>
  //         {product.description}
  //         </text>
  //        <image src={product.image}/>
  //        <text>{product.product}</text>
  //       </li>
  //     </div>
  // ))
    

  return (
    <div>
      {/* {content}
      {fakecontent} */}
      <Navbar/>
      TRENDING
    </div>
  )
}

export default Trending
