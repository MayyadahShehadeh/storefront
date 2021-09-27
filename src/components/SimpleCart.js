import React from 'react';
import { connect } from 'react-redux';


function Cart(props) {

    function handleList() {
        
        let addedItems = [];

        props.cart.forEach((element) => {
            if (addedItems.includes(element)) {
                addedItems.forEach(item => {
                    if (element.name === item.name) {
                        item.inCart += 1;
                    }
                })
            } else {
                element.inCart = 1;
                addedItems.push(element)
            }
        });
        return addedItems.map((item, idx) => {
           return <li key={idx} style={{backgroundColor:'lightgrey' , listStyleType:'none' , padding:'10px'}}>
           - {item.name} : {item.inCart}
           </li>
        })
    }
    return (
        <>
            <p  style={{ position:'absolute', right:'1%' }}>
                {handleList()}
            </p>
        </>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Cart);