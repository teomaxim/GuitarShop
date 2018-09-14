// eslint-disable-next-line
import React from 'react';
class OffCanvas extends React.Component {
    render() {
        return (
            <div className="off-canvas ecommerce-header-off-canvas position-left" data-off-canvas="true">
                <button
                    className="close-button"
                    aria-label="Close menu"
                    type="button"
                    data-close
                    >
                    <span aria-hidden="true">&times;</span>
                </button>
                <ul className="vertical menu">
                    <li className="main-nav-link">
                        <a href="categories.html">Category 1</a>
                    </li>
                    <li className="main-nav-link">
                        <a href="">Category 2</a>
                    </li>
                    <li className="main-nav-link">
                        <a href="why.html">Category 3</a>
                    </li>
                    <li className="main-nav-link">
                        <a href="build.html">Category 4</a>
                    </li>
                    <li className="main-nav-link">
                        <a href="">Category 5</a>
                    </li>
                </ul>
                <ul className="menu vertical">
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
                </ul>
            </div>
        )
    }
}

export default OffCanvas;