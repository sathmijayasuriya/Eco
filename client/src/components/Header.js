import React from 'react';
import Logo from '../assets/Logo.png';

function Header() {
    return (
        <div className="header-basic">
            <header>
                <div className="row">
                    <div className="header-col">
                        <img className="headerLogo" src={Logo} width="400px" height="150px" alt="logo" />
                    </div>
                </div>
            </header>
            <div class="topnav">
                <a class="active" href="/Dashboard">Home</a>
                <a href="/AllRental">Rentals</a>
                <a href="/AllReservation">Events</a>
                <a href="/AllVehicle">Vehicles</a>
                <a href="/AllEmployee">Human Resource</a>
                <a className="float-right" href="/">Logout</a>

            </div>
        </div>
    )
}

export default Header;