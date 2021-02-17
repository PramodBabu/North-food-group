import React from 'react';
import './footer.css';

const footer = () => {
    return (

        <div className="footer">
            <div class="row-fluid" className="footerTop">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span style={{color:'white'}}>Nesletter Signup</span>
                        <div class="input-group" style={{display: 'flex', justifyContent: 'center'}}>
                            <input 
                                type="search" 
                                class="form-control rounded" 
                                placeholder="Enter Your Email" 
                                aria-label="Search"
                                aria-describedby="search-addon" 
                                style={{borderRadius: '20px', maxWidth: '300px', backgroundColor: '#717171', border: 'none'}}>
                            </input>
                            <button 
                                type="button" 
                                class="btn btn-outline-primary" 
                                style={{borderRadius: '25px', backgroundColor:'#313131'}}
                            >Subscribe</button>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span style={{color:'white'}}>Get in touch with us</span>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <a class="waves-effect waves-light" style={{padding: '0 20px'}}>
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a class="waves-effect waves-light" style={{padding: '0 20px'}}>
                                <i class="fa fa-facebook"></i>
                            </a>
                            <a class="waves-effect waves-light" style={{padding: '0 20px'}}>
                                <i class="fa fa-google"></i>
                            </a>
                            <a class="waves-effect waves-light" style={{padding: '0 20px'}}>
                                <i class="fa fa-linkedin"></i>
                            </a>
                            <a class="waves-effect waves-light" style={{padding: '0 20px'}}>
                                <i class="fa fa-skype"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span style={{color:'white'}}>Download App</span>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <i>
                                    <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' 
                                    style={{height: '40px', width:'auto'}}
                                    />
                                </i>
                                <i>
                                    <img src='https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg' 
                                    style={{height: '28px', width:'auto', margin: '5px'}}
                                    />
                                </i>
                            </div>
                    </div>
                </div>
            </div>

            <div class="row-fluid" className="footerMid">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-2" style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{color:'white'}}>About NFG</span>
                    <p>Mission, Vision and Goal</p>
                    <p>Why NFG?</p>
                    <p>Affiliated companies</p>
                    <p>International Operation</p>
                    <p>Facility Tour</p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-2" style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{color:'white'}}>Marketing</span>
                    <p>Corporate Image</p>
                    <p>Position</p>
                    <p>Value Chain</p>
                    <p>Distribution</p>
                    <p>Promotion</p>
                    <p>Market Information</p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-2" style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{color:'white'}}>Sourcing</span>
                    <p>Supplier Resources</p>
                    <p>Supplier standards</p>
                    <p>Supplier Diversity</p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-2" style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{color:'white'}}>Policy</span>
                    <p>Private Policy</p>
                    <p>Shipping policy</p>
                    <p>Service policy</p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-2" style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{color:'white'}}>Contact Us</span>
                    <p>1245 West Royal Lane, Dallas, TX 75261</p>
                    <p>(972) 445-3322</p>
                    <p>(972) 438-1548</p>
                </div>
            </div>

            <div className="footerBottom">
                <p>North Food Group - All Right Reserved | Copyright 2021</p>
            </div>
        </div>
    )
}

export default footer;