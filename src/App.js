import React, { useRef } from 'react';

const orgData = [
  {
    id: 101,
    name: 'Abacavir',
    quantity: 25,
    price: 150,
    expiry: 2022
  },
  {
    id: 102,
    name: 'Eltrombopag',
    quantity: 90,
    price: 550,
    expiry: 2021
  },
  {
    id: 103,
    name: 'Meloxicam',
    quantity: 85,
    price: 450,
    expiry: 2025
  },
  {
    id: 104,
    name: 'Allopurinol',
    quantity: 50,
    price: 600,
    expiry: 2023
  },
  {
    id: 105,
    name: 'Phenytoin',
    quantity: 63,
    price: 250,
    expiry: 2021
  },
];

const MyForm = () => {
  const nameRef = useRef(null);
  const quantityRef = useRef(null);
  const priceRef = useRef(null);
  const expiryRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const quantity = quantityRef.current.value;
    const price = priceRef.current.value;
    const expiry = expiryRef.current.value;

    console.log('Name:', name);
    console.log('Quantity:', quantity);
    console.log('Price:', price);
    console.log('Expiry:', expiry);

    // Change focus and style of any element
    if (name === '') {
      nameRef.current.focus();
      nameRef.current.style.border = '1px solid red';
    } else {
      nameRef.current.style.border = '1px solid black';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} />
      </div>

      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" ref={quantityRef} />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" ref={priceRef} />
      </div>

      <div>
        <label htmlFor="expiry">Expiry:</label>
        <input type="text" id="expiry" ref={expiryRef} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
