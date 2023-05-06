import React from 'react';
// import './index.css';
import delete1 from './images/delete.svg';
import plus from './images/plus.svg';
import minus from './images/minus.svg';


const CartItem = (props) => {
        // console.log('this.state.product', this.state.product);
        const {price, title, qty} = props.product ;
        const {
              product,
              onIncreaseQuantity,
              onDecreaseQuantity,
              onDeleteQuantity,
             } = props ;
             console.log('product.id', product.id);
        return (
            <div className="cart-item" >
                <div className="left-block">
                    <img style={styles.image} src={product.img} alt={title}/>
                </div>

                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-action">
                        {/* first way */}
                        {/* <img alt='increase' className="action-icons" src={plus} onClick={this.increaseQuality.bind(this)} /> */}
                        <img alt='increase' className="action-icons" src={plus} onClick={() =>onIncreaseQuantity(product)} />

                        <img alt='decrease' className="action-icons" src={minus} onClick={() => onDecreaseQuantity(product)} />
                        <img alt='delete' className="action-icons" src={delete1} onClick={() => onDeleteQuantity(product.id)} />

                    </div>
                </div>

            </div>

        );
}

const styles = {
    image2: 30,
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;