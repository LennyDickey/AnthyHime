import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
    .then(res => res.json())
    .then((data) => {
      setProducts(data)
    })
    .catch((e) => {
      console.log(e);
    })
  }, []);
  

  console.log('products - ', products)

  const Products = () => {
    return products.map(p => {
      return (
      <div>
        <p>{p["sync_product"].name}</p>
        <img src={p["sync_product"]["thumbnail_url"]} style={{ height: "100px", width: "100px"}}/>
      </div>)})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Products />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
