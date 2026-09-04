import React from 'react';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const Shop = () => {

  const { addToCart } = useContext(CartContext);

  // console.log(cart)

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [addedProductId, setAddedProductId] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [sortOption, setSortOption] = useState("");

  const API_URL = "https://urbancloset-api.onrender.com/products";

  // const API_URL = "http://localhost:5000/products";

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await axios.get(API_URL);

        setProducts(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchproducts();
  }, []);


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === "All" ||
      product.category === selectedCategory)
  );

  const sortedProducts = [...filteredProducts].sort((a,b) => {
    if(sortOption === "low-high"){
      return a.price - b.price;
    }

    if(sortOption === "high-low"){
      return b.price - a.price;
    }

    if(sortOption === "a-z") {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });

  return (

    <div className='shop-page'>
      <h1 className='shop-title'> Shop Our Collection</h1>
      <input
        className='product-search'
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='category-filters'>

        <button
          className={selectedCategory === "All" ? "active-category" : ""}
          onClick={() => setSelectedCategory("All")}>
          All
        </button>

        <button
          className={selectedCategory === "Men" ? "active-category" : ""}
          onClick={() => setSelectedCategory("Men")}>
          Men
        </button>

        <button
          className={selectedCategory === "Women" ? "active-category" : ""}
          onClick={() => setSelectedCategory("Women")}>
          Women
        </button>

        <button className={selectedCategory === "Unisex" ? "active-category" : ""}
          onClick={() => setSelectedCategory("Unisex")}>
          Unisex
        </button>

      </div>
      <div className="sort-section">
        <label>Sort by:</label>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="a-z">Name: A to Z</option>
        </select>
      </div>
      <br />



      <div className='product-grid'>

        {sortedProducts.length === 0 ? (
          <div className='no-products'>
            <h2>No products found</h2>
            <p>Try searching for something else.</p>
          </div>
        ) : (
          sortedProducts.map((product) => (
          <div className='product-card' key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className='product-image'>
                <img src={product.image}
                  alt={product.name} />
              </div>
            </Link>

            <div className='product-info'>
              <p className='product-category'>
                {product.category}
              </p>
              <h2>{product.name}</h2>

              <p className='product-price'>
                ₹{product.price}
              </p>

              <button className='add-cart-btn'
                onClick={() => {
                  addToCart(product);

                  setAddedProductId(product.id);

                  setTimeout(() => {
                    setAddedProductId(null);
                  }, 2500);
                }} >
                Add to Cart
              </button>

              {addedProductId === product.id && (
                <div className="added-message">
                  ✓ Added to cart
                </div>
              )}

            </div>

          </div>

        ))

        )}

      </div>
    </div>

  )
}

export default Shop