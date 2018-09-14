import React from 'react';

class EcommerceHeaderTop extends React.Component {
    render() {
        return (
            <div className="ecommerce-header-top show-for-large">
                <div className="row align-justify">
                    <div className="ecommerce-header-top-message">
                    Phuong Nam shoping
                    </div>
                    <div className="ecommerce-header-top-links">
                    <ul>
                        <li>
                        <a href="">Help</a>
                        </li>
                        <li>
                        <a href="">Order Status</a>
                        </li>
                        <li>
                        <a href="">Contact</a>
                        </li>
                        <li>
                        <a href="">My Account</a>
                        </li>
                        <li>
                        <a href="" target="_blank">
                            <i className="fa fa-shopping-cart" />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcommerceHeaderTop;