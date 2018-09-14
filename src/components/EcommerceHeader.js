// eslint-disable-next-line
import React from 'react';

class EcommerceHeaderMobile extends React.Component {
    render() {
        return (
            <div className="ecommerce-header show-for-large">
                <div className="row align-justify align-middle">
                    <div className="small-12 medium-8 columns">
                    <ul className="vertical medium-horizontal menu">
                        <li>
                        <a href="">
                            <img
                            className="logo"
                            src="https://teomaxim.github.io/images/logo.png"
                            alt=""
                            />
                        </a>
                        </li>
                        <li className="main-nav-link">
                            <a href="categories.html">Category 1</a>
                        </li>
                        <li className="main-nav-link">
                        <a href="">Category 2</a>
                        </li>
                    </ul>
                    </div>
                    <div className="small-12 medium-4 columns">
                    <ul className="menu">
                        <li>
                        <input type="search" placeholder="Search" />
                        </li>
                        <li>
                        <button type="button" className="button search-button" />
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcommerceHeaderMobile;