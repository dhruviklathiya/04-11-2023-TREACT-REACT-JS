import React from 'react'
import "./lp.css"
import "./restaurant.css"
import "./service.css"
import "./travel.css"
import "./fonts.css"
import "./bootstrap.min.css"

const Main = () => {
  return (
    <>
    <section class="wow slideInRight container secspace lp_features">
        <p class="commonhead1">features</p>
        <p class="commonhead2">We have Amazing <span>Service.</span></p>
        <p class="commonheadp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
        <div class="row d-flex justify-content-center my-5">
            <div class="col-3 card border-0">
                <div class="lp_feature_idiv d-flex"><div class="lp_feature_iout"><i class="lp_feature_i fa-solid fa-shield-halved"></i></div><div class="lp_feature_data"><h2 class="lp_6card_h2">Secure</h2><p class="lp_featurecardp">We strictly only deal with vendors that provide top notch security.</p></div></div>    </div>
            
            <div class="col-3 card border-0">
                <div class="lp_feature_idiv d-flex"><div class="lp_feature_iout"><i class="lp_feature_i fa-solid fa-headset"></i></div><div class="lp_feature_data"><h2 class="lp_6card_h2">24/7 Support</h2><p class="lp_featurecardp">Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.</p></div></div>        
            </div>
            <div class="col-3 card border-0">
                <div class="lp_feature_idiv d-flex"><div class="lp_feature_iout"><i class="lp_feature_i fa-solid fa-sliders"></i></div><div class="lp_feature_data"><h2 class="lp_6card_h2">Customizable</h2><p class="lp_featurecardp">Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.</p></div></div>
            </div>
        </div>
        <div class="row d-flex justify-content-center my-5">
            <div class="col-3 card border-0">
                <div class="lp_feature_idiv d-flex"><div class="lp_feature_iout"><i class="lp_feature_i fa-solid fa-paper-plane"></i></div><div class="lp_feature_data"> <h2 class="lp_6card_h2">Reliable</h2><p class="lp_featurecardp">Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.</p></div></div>
            </div>
            <div class="col-3 card border-0">
                <div class="lp_feature_idiv d-flex"><div class="lp_feature_iout"><i class="lp_feature_i fa-solid fa-bolt"></i></div><div class="lp_feature_data"><h2 class="lp_6card_h2">Fast</h2><p class="lp_featurecardp">Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.</p></div></div>
            </div>
            <div class="col-3 card border-0">
                <div class="lp_feature_idiv d-flex"><div class="lp_feature_iout"><i class="lp_feature_i fa-brands fa-creative-commons-by"></i></div><div class="lp_feature_data"><h2 class="lp_6card_h2">Easy</h2><p class="lp_featurecardp">Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.</p></div></div>
            </div>
        </div>
    </section>
     <section class="wow slideInLeft container secspace lp_qualitywork d-flex">
        <div class="col-6">
            <p class="sidecommonhead1">QUALITY WORK</p>
            <p class="sidecommonhead2">Designed & Developed by <span class="sidecommonhead2span">Professionals.</span>
            </p>
            <p class="sidecommonp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p><a class="my-3 sideanchor btn  rounded-pill"
                href="javascript:void(0)">Learn More</a>
        </div>
        <div class="col-6"><img src="../IMAGES/hero-screenshot-1.40a097b525c2f8c9808e.png" class="border"
                alt="bannerphoto" /></div>
    </section>
    <section class="wow slideInRight container secspace lp_steps d-flex">
        <div class="col-6"><img src="../IMAGES/hero-screenshot-2.241aac1fbc66db29d873.png" alt="bannerphoto" /></div>
        <div class="col-6 mx-5">
            <p class="sidecommonhead1">STEPS</p>
            <p class="sidecommonhead2">Easy to <span class="sidecommonhead2span">Get started.</span></p>
            <ul type="none">
                <li class="d-flex">
                    <div class="steps_li_gray col-2">01</div>
                    <div class="col-10">
                        <h2 class="steps_li_h2 my-2">Register</h2>
                        <p class="steps_li_p">Create an account with us using Google or Facebook.</p>
                    </div>
                </li>
                <li class="d-flex">
                    <div class="steps_li_gray col-2">02</div>
                    <div class="col-10">
                        <h2 class="steps_li_h2 my-2">Download</h2>
                        <p class="steps_li_p">Browse and Download the template that you like from the marketplace.</p>
                    </div>
                </li>
                <li class="d-flex">
                    <div class="steps_li_gray col-2">03</div>
                    <div class="col-10">
                        <h2 class="steps_li_h2 my-2">Run</h2>
                        <p class="steps_li_p">Follow the instructions to setup and customize the template to your needs.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <section class="wow slideInLeft container secspace lp_values d-flex">
        <div class="col-6">
            <p class="sidecommonhead1">VALUES</p>
            <p class="sidecommonhead2">We Always Abide by Our <span class="sidecommonhead2span">Principles.</span></p>
            <p class="sidecommonp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="lp_value_main d-flex">
                <div class="col-4 mx-1 lp_value_card card border-0">
                    <div class="lp_value_main_flex d-flex"><div class="outer_icon outer_icon1"><i class="idollar fa-solid fa-dollar-sign"></i></div><div class="lp_steps_h"><p class="lp_value_head">Affordable</p></div></div>
                    <p class="lp_value_main_datap">We promise to offer you the best rate we can - at par with the industry standard.</p>
                </div>
                <div class="col-4 mx-1 lp_value_card card  border-0">
                    <div class="lp_value_main_flex d-flex"><div class="outer_icon outer_icon2"><i class="ibag fa-solid fa-suitcase"></i></div><div class="lp_steps_h"><p class="lp_value_head">Professionalism</p></div></div>
                    <p class="lp_value_main_datap">We assure you that our templates are designed and created by professional designers.</p>
                </div>
            </div>
            <a class="my-3 sideanchor btn btn-lg rounded-pill my-5" href="javascript:void(0)">Learn More</a>
        </div>
        <div class="col-6"><img src="../IMAGES/prototype-illustration.21bc4b3f612a2f257c3d361067582485.svg"
                alt="bannerphoto" /></div>
    </section>
    <section class="wow slideInRight container secspace lp_pricing">
        <div class="commonhead1 my-3">PRICING</div>
        <div class="commonhead2 mb-3">Reasonable & Flexible <span>Plans.</span></div>
        <div class="commonheadp mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</div>
        <div class="lp_pricing_3card">
            <div class="row d-flex justify-content-evenly">
                <div class="col-3 lp_pricing_card1">
                    <div class="lp_pricing_sec1 lp_pricing_card1_sec1"></div>
                <div class="lp_pricing_sec2 mt-5">
                    <p class="lp_pricing_sec2p1 lp_pricing_card1_subp1">PERSONAL</p>
                    <p class="lp_pricing_sec2p2 lp_pricing_card1_subp1">$17.99</p>
                    <p class="lp_pricing_sec2p3 mb-4 lp_pricing_card1_subp2">MONTHLY</p>
                </div>
                <div class="lp_pricing_sec3">
                    <p class="lp_pricing_sec3p1 mt-4 lp_pricing_card1_subp3">For Individuals</p>
                    <p class="lp_pricing_sec3p2 lp_pricing_card1_subp4">30 Templates</p>
                    <p class="lp_pricing_sec3p2 lp_pricing_card1_subp4">7 Landing Pages</p>
                    <p class="lp_pricing_sec3p2 lp_pricing_card1_subp4">12 Internal Pages</p>
                    <p class="lp_pricing_sec3p2 lp_pricing_card1_subp4">Basic Assistance</p>
                </div>
                <div class="lp_pricing_sec4 d-flex justify-content-around">
                    <a class="my-3 lp_pricing_sec4btn lp_price_card1btn lp_pricing_card1_subbtn1 btn btn-lg rounded-pill my-5" href="javascript:void(0)">BUY NOW</a>
                </div>
                </div>
                <div class="col-3 lp_pricing_card2">
                <div class="lp_pricing_sec1 lp_pricing_card2_sec1"></div>
                <div class="lp_pricing_sec2 mt-5">
                    <p class="lp_pricing_sec2p1">BUSINESS</p>
                    <p class="lp_pricing_sec2p2">$37.99</p>
                    <p class="lp_pricing_sec2p3 mb-4">MONTHLY</p>
                </div>
                <div class="lp_pricing_sec3">
                    <p class="lp_pricing_sec3p1 mt-4">For Small Business</p>
                    <p class="lp_pricing_sec3p2">60 Templates</p>
                    <p class="lp_pricing_sec3p2">15 Landing Pages</p>
                    <p class="lp_pricing_sec3p2">22 Internal Pages</p>
                    <p class="lp_pricing_sec3p2">Priority </p>
                </div>
                <div class="lp_pricing_sec4 d-flex justify-content-around">
                    <a class="my-3 lp_pricing_sec4btn lp_price_card2btn btn btn-lg rounded-pill my-5" href="javascript:void(0)">BUY NOW</a>
                </div>
            </div>
                <div class="col-3 lp_pricing_card3">
                    <div class="lp_pricing_sec1 lp_pricing_card1_sec2"></div>
                    <div class="lp_pricing_sec2 mt-5">
                        <p class="lp_pricing_sec2p1 lp_pricing_card1_subp1">PERSONAL</p>
                        <p class="lp_pricing_sec2p2 lp_pricing_card1_subp1">$17.99</p>
                        <p class="lp_pricing_sec2p3 mb-4 lp_pricing_card1_subp2">MONTHLY</p>
                    </div>
                    <div class="lp_pricing_sec3">
                        <p class="lp_pricing_sec3p1 mt-4 lp_pricing_card1_subp3">For Individuals</p>
                        <p class="lp_pricing_sec3p2 lp_pricing_card1_subp4">30 Templates</p>
                        <p class="lp_pricing_sec3p2 lp_pricing_card1_subp4">7 Landing Pages</p>
                        <p class="lp_pricing_sec3p2 lp_pricing_card1_subp4">12 Internal Pages</p>
                        <p class="lp_pricing_sec3p2 lp_pricing_card1_subp4">Basic Assistance</p>
                    </div>
                    <div class="lp_pricing_sec4 d-flex justify-content-around">
                        <a class="my-3 lp_pricing_sec4btn lp_price_card3btn lp_pricing_card1_subbtn2 btn btn-lg rounded-pill my-5" href="javascript:void(0)">BUY NOW</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="wow slideInLeft container secspace lp_testimonial">
        <div class="lp_testimonial_main d-flex">
            <div class="col-6"><img src="../IMAGES/love-illustration.c759090fa833369ad6ffb6eb19cacb3e.svg"
                    alt="loveillusion" /></div>
            <div class="col-6 mx-5">
                <p class="sidecommonhead1">TESTIMONIALS</p>
                <p class="sidecommonhead2">Our Clients <span class="sidecommonhead2span">Love us.</span></p>
                <p class="sidecommonp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>

                <div class="swiper mySwiper home_slidder">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="slide_5star"><img class="svg_star" src="../EXTRAS/start/25533.jpg"
                                    alt="star" /><img class="svg_star" src="../EXTRAS/start/25533.jpg" alt="star" /><img
                                    class="svg_star" src="../EXTRAS/start/25533.jpg" alt="star" /><img class="svg_star"
                                    src="../EXTRAS/start/25533.jpg" alt="star" /><img class="svg_star"
                                    src="../EXTRAS/start/25533.jpg" alt="star" /></div>
                            <div class="slider_head">
                                <p class="my-3 sliderhead">Amazing User Experience</p>
                            </div>
                            <p class="sliderhead2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                doloreeu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in
                                culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, </p>
                            <div class="slider_flex d-flex">
                                <div class="slider_imgout"><img src="../IMAGES/person11494790108377-be9c29b29330.avif" alt="person1" /></div>
                                <div class="slider_photoinfo mt-3 ms-3">
                                    <p class="sliderhead m-0">Charlotte Hale</p>
                                    <p class="sliperhead2 m-0">Director, Delos Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slide_5star"><img class="svg_star" src="../EXTRAS/start/25533.jpg"
                                    alt="star" /><img class="svg_star" src="../EXTRAS/start/25533.jpg" alt="star" /><img
                                    class="svg_star" src="../EXTRAS/start/25533.jpg" alt="star" /><img class="svg_star"
                                    src="../EXTRAS/start/25533.jpg" alt="star" /><img class="svg_star"
                                    src="../EXTRAS/start/25533.jpg" alt="star" /></div>
                            <div class="slider_head">
                                <p class="my-3 sliderhead">Love the Developer Experience and Design Principles !</p>
                            </div>
                            <p class="sliderhead2">Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <div class="slider_flex d-flex">
                                <div class="slider_imgout"><img src="../IMAGES/person21531427186611-ecfd6d936c79.avif" alt="person2" /></div>
                                <div class="slider_photoinfo mt-3 ms-3">
                                    <p class="sliderhead m-0">Adam Cuppy</p>
                                    <p class="sliperhead2 m-0">Founder, EventsNYC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                       <div class="home_slide"><div class="swiper-button-prev"></div></div>
                       <div class="home_slide"><div class="swiper-button-next"></div></div>
                </div>
            </div>
            </div>
    </section>
    <section class="wow slideInRight container secspace lp_faq">
        <div class="commonhead1">FAQS</div>
        <div class="commonhead2">You have <span> Questions ?</span></div>
        <div class="commonheadp mb-5">And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</div>
        <div class="container lp_faq_accordion mt-3" id="lp_accordion_id">
            <div class="accordion my-3 travel_accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="lp_faq_accordion_btn accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="collapseOne">
                        Are all the templates easily customizable ?
                    </button>
                  </h2>
                  <div id="faq1" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#lp_accordion_id">
                    <div class="lp_faq_expand accordion-body">
                        <p class="lp_faq_p">Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="accordion my-3 travel_accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="lp_faq_accordion_btn accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="true" aria-controls="collapseOne">
                        How long do you usually support an standalone template for ?
                    </button>
                  </h2>
                  <div id="faq2" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#lp_accordion_id">
                    <div class="lp_faq_expand accordion-body">
                        <p class="lp_faq_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="accordion my-3 travel_accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="lp_faq_accordion_btn accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="true" aria-controls="collapseOne">
                        What kind of payment methods do you accept ?
                    </button>
                  </h2>
                  <div id="faq3" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#lp_accordion_id">
                    <div class="lp_faq_expand accordion-body">
                        <p class="lp_faq_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="accordion my-3 travel_accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="lp_faq_accordion_btn accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="true" aria-controls="collapseOne">
                        Is there a subscribption service to get the latest templates ?
                    </button>
                  </h2>
                  <div id="faq4" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#lp_accordion_id">
                    <div class="lp_faq_expand accordion-body">
                        <p class="lp_faq_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="accordion my-3 travel_accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="lp_faq_accordion_btn accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="true" aria-controls="collapseOne">
                        Are the templates compatible with the React ?
                    </button>
                  </h2>
                  <div id="faq5" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#lp_accordion_id">
                    <div class="lp_faq_expand accordion-body">
                        <p class="lp_faq_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="accordion my-3 travel_accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header " id="headingOne">
                    <button class="lp_faq_accordion_btn accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="true" aria-controls="collapseOne">
                        Do you really support Internet Explorer 11 ?
                    </button>
                  </h2>
                  <div id="faq6" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#lp_accordion_id">
                    <div class="lp_faq_expand accordion-body">
                        <p class="lp_faq_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
    <section class="wow slideInLeft container secspace lp_getstarted">
        <div class="lp_blue d-flex justify-content-center align-items-center">
            <div class="row">
                <div class="col-6 p-5 d-flex">
                    <p class="lp_blue_p">Developers all over the world are happily using Treact.</p>
                </div>
                <div class="col-6 p-5"><div class="lp_blue_btnout d-flex justify-content-center"><div class="btn lp_blue_button1 mx-3 rounded-pill">Get started</div><div class="btn lp_blue_button2 mx-3 rounded-pill">Contact Us</div></div></div>                
            </div>
        </div>
    </section>
    </>
  )
}

export default Main