import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    // eslint-disable-next-line
  }, [])

  return (
    loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <ul className="products">
          {
            products.map(product =>
              <li>
                <div className="product">

                  <div className="product-name">
                    <Link to={'/product/' + product._id}>
                      <img className="product-image" src={product.image} alt="product" />
                      {product.name}
                    </Link>
                  </div>
                  <div className="product-price">£{product.price}</div>
                  {product.countInStock > 0 ? <div className="inStock">In stock</div> : <div className="outOfStock">Out of stock</div>}
                  <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
                </div>
              </li>

            )
          }
        </ul>
  )
}

export default HomeScreen;