import React from 'react';
import './brand.css';
 
const Brands = () => {
 
    const brandInfo = [
        'http://www.pngpix.com/download/8974',
        'https://static.getcompanyinfo.com/static/logo/riceland_com_logo.png',
        'http://sandersonfarms.com/wp-content/uploads/2017/12/Corporate_Sanderson_Farms_100_Natural_Logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Smithfield_Foods_logo.svg/1280px-Smithfield_Foods_logo.svg.png',
        'http://photos.prnewswire.com/prn/20131125/CL23698LOGO',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Kikkoman-Logo.svg/1280px-Kikkoman-Logo.svg.png'
    ];
 
    function brandList() {
        return brandInfo.map(item => (
            <div class="card" className="logos">
                <img src={item}
                    class="img-responsive" alt="brand" width="100" height="auto"/>
            </div>
        ));
    };
 
    return (
        <div class="brands" >
            <div>
                <h2>Brands you can trust</h2>
            </div>
            <div className="brand">
                {brandList()}
            </div>
        </div>
    )
 
};
 
export default Brands;