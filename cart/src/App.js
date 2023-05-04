import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super() ;
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                id: 1
    
            },
            {
                price: 999,
                title: 'Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                id: 2
    
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                id: 3
    
            }
        ]

    }
}
handleIncreaseQuantity = (product) => {
    console.log('Hey increase the qty');
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1 ;

    this.setState({
        products: products
    })

}

handleDecreaseQuantity = (product) => {
    console.log('Hey decrease the qty');
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1 ;
    if(products[index].qty >= 0)
    this.setState({
        products: products
    })
}

handleDeleteQuantity = (id) => {
    const { products } = this.state;
    const items = products.filter( (product) => (product.id !== id));
    this.setState({
        products: items
    })
}

getCartCount = () => {
  const {products} = this.state;
  let count = 0 ;
  products.forEach( (product) => {
    count += product.qty;

  })
  return count;
}

getCartTotal = () => {
  const { products } = this.state;
  let cartTotal = 0 ;
  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price;
  })
  return cartTotal;
}

render() {
    const { products } = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteQuantity={this.handleDeleteQuantity} 
        />
        <div style={{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }

}
  

export default App;
