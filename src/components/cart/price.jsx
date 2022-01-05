import React, { useState } from "react";
import '../../index/cart.css'
import Modal from "react-modal";
import Exit from '../../picture/iconmonstr-x-mark-2 (1).svg'
import img1 from '../../picture/Vector (5).svg'

import { Button, Name } from "..";

Modal.setAppElement("#root");
const Price = ({isOpen , toggleModal}) => {
console.log(isOpen)
    return (
        <div className="App">
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className='inside'
            >
                <div className='inside-inside'>
                    <div className="name2">Checkout</div>
                    <img src={Exit} alt="" isOpen={isOpen} contentLabel="My dialog"
                        onRequestClose={toggleModal} />
                </div>
                {/* <hr /> */}
                <Name name='Delivery' method='Select Method' />
                <div className='inside-inside'>
                    <div className='name-name'>
                        Pament
                    </div>
                    <div className='name-detail'>
                    </div>
                    {/* <hr /> */}
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1599px-Visa_Inc._logo.svg.png' alt="" className='visa' />

                </div>
                <Name name='Promo Code' method='Pick discount' />
                <Name name='Total Cost' method='$13.97' />

                <div className='tailbar'>
                    By placing an order you agree to our
                    Terms And Conditions
                </div>
                <Button word='Place Order' path='/Orderaccepted' className='button' />

            </Modal>

        </div>
    )
}

export { Price }
