import React from 'react';

//var size = 4;

const SoldHomes = props => (
    <div className="box botContainer">
        <h3 id="nearby-homes">Nearby Similar Sales</h3>
        <ul style={{listStyleType: 'none'}}>
            {
                props.botInfo.map((item) => (
                <li>
                    <div>
                        <div className="property-status">
                            <span className="sold-icon"></span>
                            <span className="sold-info">
                                SOLD: ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </span>
                        </div>
                        <div className="sold-date">
                            Sold on {item.sellDate}
                        </div>
                        <div className="property-info">
                            <span className="house-info">
                                {item.beds} bds, {item.baths} ba, {item.squareFeet} sqft 
                            </span>
                            <div>
                                <a className="house-address">{item.address}</a>
                            </div>    
                        </div>
                    <hr className="separator" />
                    </div>
                </li>
            ))}
        </ul>
    </div>
)

export default SoldHomes;
