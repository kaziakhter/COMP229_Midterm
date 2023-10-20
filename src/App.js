import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const alertMessage = `A new product has been added. \nProduct details: \nName: ${product.name}\nDescription: ${product.description}\nCategory: ${product.category}\nQuantity: ${product.quantity}\nPrice: $${product.price}`;
    alert(alertMessage);
  };

  const handleFormReset = () => {
    setProduct({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: ''
    });
  };

  const isSubmitDisabled = () => {
    return !product.name || !product.description || !product.category || !product.quantity || !product.price;
  };

  return (
    <div className="App">
      <div className="form-box">
        <h1>New Product</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={product.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={product.description} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" value={product.category} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={product.quantity} onChange={handleInputChange} min="0" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <div className="price-input">
              <span>$</span>
              <input type="number" id="price" name="price" value={product.price} onChange={handleInputChange} min="0" />
            </div>
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitDisabled()}>Submit</button>
          <button type="button" className="cancel-button" onClick={handleFormReset}>Cancel</button>
        </form>
      </div>

      <footer className="footer">
        <p>Copyright &copy; Kazi Ayesha Akhter, Student ID: 301264645</p>
        <p>Software Engineering Technician (Online)</p>
      </footer>
    </div>  
  );
};

export default App;