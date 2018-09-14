import React from 'react';

class SectionProduct extends React.Component {
    render() {
        return (
            <div className="section-product">
                <div className="grid-x grid-padding-x small-up-2 medium-up-3 large-up-4">
                    <div className="cell">
                        <div className="product-card">
                            <div className="product-card-thumbnail">
                                <a href="">
                                <img src="http://guitartaylor.com/wp-content/uploads/2017/09/dan-guitar-Taylor-PS16-CE-4.png" alt=""/>
                                </a>
                            </div>
                            <h2 className="product-card-title">
                                <a href="">Guitar Taylor Acoustic K24ce Excelltent</a>
                            </h2>
                            <span className="product-card-desc">Hay Chất như quả đất </span>
                            <span className="product-card-price">$999</span>
                            <span className="product-card-sale">$1100</span>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="product-card">
                            <div className="product-card-thumbnail">
                                <a href="">
                                <img src="http://guitartaylor.com/wp-content/uploads/2017/08/dan-guitar-TAYLOR-K28e-1.png" alt="" />
                                </a>
                            </div>
                            <h2 className="product-card-title">
                                <a href="">Guitar Taylor PS10e 2013 Seri Presentation</a>
                            </h2>
                            <span className="product-card-desc">Ngon Bổ rẻ Phù hợp SV</span>
                            <span className="product-card-price">$1999</span>
                            <span className="product-card-sale">$1299</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionProduct;