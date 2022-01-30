import React from "react";

const Cart = (props) => {
  const cart = props.cart;

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const user = cart[i];
    total = total + user.selary;
  }

  return (
    <div>
      <div id="header">
        <h1>Users Information</h1>
        <h4>Add Users: {cart.length}</h4>
        <h4>Total Selary= {total} Tk</h4>
      </div>
    </div>
  );
};

export default Cart;
