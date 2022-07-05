import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
   

    render() {
        return (
            <>
        {/* <!-- MOBILE MENU --> */}
		<div className="devman_tm_mobile_menu">
			<div className="mobile_menu_inner">
				<div className="mobile_in">
					<div className="logo">
						<a href="#"><img src="img/logo/logo.png" alt="" /></a>
					</div>
					<div className="trigger">
						<div className="hamburger hamburger--slider">
							<div className="hamburger-box">
								<div className="hamburger-inner"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="dropdown">
				<div className="dropdown_inner">
					<ul className="anchor_nav">
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#service">Service</a></li>
						<li><a href="#contact">Contact</a></li>
						<li><a href="#blog">Blog</a></li>
						<li className="download_cv"><a href="img/cv/1.jpg" download>Download CV</a></li>
					</ul>
				</div>
			</div>
		</div>
		{/* <!-- /MOBILE MENU --> */}
	
		{/* <!-- HEADER --> */}
		<div className="devman_tm_header">
			<div className="container">
				<div className="header_inner">
					<div className="logo">
						<a className="light" href="#"><img src="img/logo/logo.png" alt="" /></a>
						<a className="dark" href="#"><img src="img/logo/dark.png" alt="" /></a>
					</div>
					<div className="menu">
						<ul className="anchor_nav">
							<li className="current"><a href="#home">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#portfolio">Portfolio</a></li>
							<li><a href="#service">Service</a></li>
							<li><a href="#contact">Contact</a></li>
							<li><a href="#blog">Blog</a></li>
							<li className="download_cv"><a href="img/cv/1.jpg" download>Download CV</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- /HEADER --> */}
            </>
        );
    }
}



export default Navbar;