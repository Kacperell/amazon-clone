import React from 'react'
import './css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            {/* Subtotal ({basket.length} items): <strong>{value}</strong> */}
              Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
            </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                // value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
            {/* <button onClick={e => history.push('/payment')}>Proceed to Checkout</button> */}

        </div>
    )
}

export default Subtotal
