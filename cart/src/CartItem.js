import React from 'react';
// import './index.css';
import delete1 from './images/delete.svg';
import plus from './images/plus.svg';
import minus from './images/minus.svg';


class CartItem extends React.Component {
    constructor () {
        super() ;
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''

        }
    }
    render () {
        const {price, title, qty} = this.state ;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>

                <div className="right-block">
                    <div style={{fontSize: 25}}>{this.state.title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-action">
                        <img alt='increase' className="action-icons" src={plus} />
                        <img alt='decrease' className="action-icons" src={minus}></img>
                        <img alt='delete' className="action-icons" src={delete1}></img>

                    </div>
                </div>

            </div>

        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;