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
                img: '',
                id: 1
    
            },
            {
                price: 999,
                title: 'Phone',
                qty: 10,
                img: '',
                id: 2
    
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: '',
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
      </div>
    );
  }

}
  

export default App;
