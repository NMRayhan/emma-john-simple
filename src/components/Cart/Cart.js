import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const cart = props.TotalQuantity
    console.log(cart);
    let price = 0;//price Calculation
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i]
        price = price + item.price * parseFloat(item.quantity);
    }
    const totalPrice = price.toFixed(2);

    //shipping Condition
    let shipping = 0;
    if (cart.length >= 35) {
        shipping = 0;
    } else if (cart.length >= 25) {
        shipping = 4.99
    } else if (cart.length >= 15) {
        shipping = 8.99
    } else if (cart.length >= 10) {
        shipping = 10.99
    } else if (cart.length === 0) {
        shipping = 0
    } else if (cart.length <= 9) {
        shipping = 12.99
    }

    //Text Calculation
    const vat = totalPrice * .07
    const vatFixed = vat.toFixed(2)

    //Estimated Calculation
    const Total = parseFloat(shipping) + parseFloat(vatFixed) + parseFloat(totalPrice)
    const orderTotal = Total.toFixed(2)
    return (
        <div>
            <div className="cart-Design">
                <h4 style={{ fontWeight: "bold", color: "#b12704", marginBottom: "30px" }}>Order Summary</h4>
            </div>
            <div>
                <table>
                    <td>
                        <tr>items </tr>
                        <tr>Shipping </tr>
                        <tr>Total before tax </tr>
                        <tr><small>Text + VAT</small> </tr>
                    </td>
                    <td>
                        <tr>: ${cart.length}</tr>
                        <tr>: ${shipping}</tr>
                        <tr>: ${totalPrice}</tr>
                        <tr>: ${vatFixed}</tr>
                    </td>
                    <tfoot>
                        <tr>
                            <td className="style">Order Total</td>
                            <td className="style">${orderTotal}</td>
                        </tr>
                    </tfoot>
                </table>
                {
                    props.children
                }
            </div>

        </div>
    );
};

export default Cart;