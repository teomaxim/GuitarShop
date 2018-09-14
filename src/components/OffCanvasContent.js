import React from 'react';
import EcommerceHeader from './EcommerceHeader';
import EcommerceHeaderTop from './EcommerceHeaderTop';
import EcommerceHeaderMobile from './EcommerceHeaderMobile';
import SectionProduct from './SectionProduct'

class OffCanvasContent extends React.Component {
    render() {
        return (
            <div className="off-canvas-content" data-off-canvas-content>
                <EcommerceHeader />
                <EcommerceHeaderTop />
                <EcommerceHeaderMobile />
                <div className="row">
                    <SectionProduct />
                </div>
            </div>
        )
    }
}

export default OffCanvasContent;