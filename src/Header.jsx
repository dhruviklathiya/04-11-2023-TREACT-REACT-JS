import React from 'react'
import "./agency.css"
import "./lp.css"
import "./restaurant.css"
import "./service.css"
import "./travel.css"
import "./fonts.css"
const Header = () => {
  return (
    <>
        <section class="wow slideInLeft container lp_banner">
        <header class="home_header container">
            <div class="row-100">
                <div class="home_header_main d-flex justify-content-between">
                    <div class="home_header_logo d-flex"><a href="home.html"><svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="12" y="12" width="232" height="232" rx="13" fill="#6415FF"/>
<path d="M78.6614 96.3636H112.786V185H143.144V96.3636H177.269V71.5455H78.6614V96.3636Z" fill="white"/>
</svg>
 <p class="home_headerp">Treact</p></a>
                </div>
                    <ul class="home_header_ul">
                        <li class="home_header_li"><a href="home.html">Home</a></li>
                        <li class="home_header_li"><a href="travel.html">Travel</a></li>
                        <li class="home_header_li"><a href="restaurant.html">Restaurant</a></li>
                        <li class="home_header_li"><a href="agency.html">Agency</a></li>
                        <li class="home_header_li"><a href="services.html">Services</a></li>
                        <li class="home_header_li"><div class="btn btn-lg home_head_btn rounded-pill">Sign up</div></li>
                    </ul>
                </div>
            </div>
        </header>
        <div class="lp_banner_main d-flex">
            <div class="col-5">
                <p class="sidecommonhead2">Beautiful React Templates    <span class="sidecommonhead2span">for you.</span> </p>
                        <p class="lp_banner_p my-5">Our templates are easy to setup, understand and customize. Fully modular
                    components with a variety of pages and components.</p>
                <div class="lp_banner_btn my-5 rounded-pill">
                    <form>
                        <input type="email" placeholder="Your E-mail Address" />
                        <a href="javascript:void(0)" class="lp_banner_btnin btn btn-info rounded-pill border-0">Get started</a>
                    </form>
                </div>
                <p class="lp_banner_plogoclip">OUR TRUSTED CUSTOMERS</p><img class="logostrip opacity-50"
                    src="./IMAGES/customers-logo-strip680ac7c2e8ae28161d2c.png" alt="logostrip" />
            </div>
            <div class="col-7"><img src="./IMAGES/illustration2.svg" alt="banner" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Header