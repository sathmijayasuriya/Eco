import React from 'react';
import Logo from '../assets/Logo.png';

function Footer() {
    return (
        <div className="footer-basic">
            <footer>
                <div className="row">
                    <div className="col">
                        <img className="footerLogo" src={Logo} width="200px" height="75px" alt="logo" border="0" />
                    </div>
                </div>
                <p className="copyright">©2022 All Rights Reserved @RoyalRentCars</p>

            </footer>
        </div>
    )
}

export default Footer;