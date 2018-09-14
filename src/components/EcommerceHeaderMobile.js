import React from 'react';

class EcommerceHeader extends React.Component {
    render() {
        return (
            <div className="ecommerce-header-mobile hide-for-large">
                <div className="ecommerce-header-mobile-left">
                    <button
                    className="menu-icon"
                    type="button"
                    data-toggle="ecommerce-header"
                    />
                    <form className="ecommerce-header-search-exandable">
                    <input type="search" placeholder="Search" />
                    </form>
                </div>
                <div className="ecommerce-header-mobile-center">
                    <a href="">
                    <img
                        className="logo"
                        src="https://teomaxim.github.io/images/logo.png"
                        alt=""
                    />
                    </a>
                </div>
                <div className="ecommerce-header-mobile-right">
                    <i className="fa fa-shopping-cart" />
                </div>
            </div>
        )
    }
}

export default EcommerceHeader;