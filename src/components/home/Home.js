import React from 'react';
import './Home.css';
import Slider from "react-slick";
import NextArrow from './customArrow/NextArrow';
import PrevArrow from './customArrow/PrevArrow';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';
import Product from '../product/Product';


function Home() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const backToTop = () => {
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className="home">

            <Slider {...settings} className="home__container">
                <div>
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/M2ZmNzAxMmUt/M2ZmNzAxMmUt-YzY1ZDM1Nzct-w1500._CB406790092_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Events/XCM_Manual_ORIGIN_1237913_1255421_CA_OTC20_ca_ca_otu_gw_hero_phase2_ca_en_3237561_1500x600_1X_en_CA._CB408562909_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA_MM/events/off_to_uni/2020_HGG_OTU_Phase_2_DesktopHero_EN_1500x600._CB409715208_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/THBY_S2_00000_GWBleedingHero_1500x600_POST_Final_en-CA_PVD5401._CB406597355_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Books/XCM_Manual_ORIGIN_1234764_1241185_CA_OTC20_ca_books_fall_textbook_3204758_1500x600_1X_en_CA._CB409613960_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/15/AudibleCA/en_CA/images/Amazon_ACQ/CA-498-3rdAnniversaryCampaign-GW_TallHero_1500x600_V02._CB404976720_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/15/AmazonMusic/2020/ACQ/Evergreen/070620/Onsite/Gateway/CA-EN_070620_EvergreenQ3_ACQ_GW_Hero_D_1500x600_CV1._CB408137963_.jpg" alt="" />
                </div>
            </Slider>


            <div className="home__row">
                <Product
                    id="12315135"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                />
                <Product
                    id="13136246"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SL1500_.jpg"
                    rating={4} />
            </div>

            <div className="home__row">
                <Product
                    id="49036252"
                    title="Asus ROG Zephyrus Duo 15 Gaming Laptop, 15.6” 300Hz FHD, NVIDIA GeForce RTX 2070 Super, Intel Core i7-10875H, 32GB RAM, 2TB RAID 0 SSD Hyper Drive, Windows 10 Pro, GX550LWS-XS79"
                    price={3699.00}
                    image="https://m.media-amazon.com/images/I/81Cb9QNSyGL._AC_UL320_.jpg"
                    rating={4} />
                <Product
                    id="43527545"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    rating={5} />
                <Product
                    id="34135364"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    rating={5} />
            </div>

            <div className="home__row">
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor = Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    rating={4} />
            </div>

            <div className="home__footer">
                <div onClick={backToTop} className="home__backToTop">
                    <span>Back to top</span>
                </div>

                <div className="home__footerNav">
                    <div className="home__footerNavLink">
                        <strong className="home__footerNavLinkTitle">Get to Know Us</strong>
                        <small className="home__footerNavLinkName">
                            Careers
                        </small>
                        <small className="home__footerNavLinkName">
                            Amazon and Our Planet
                        </small>
                        <small className="home__footerNavLinkName">
                            Invester Relations
                        </small>
                        <small className="home__footerNavLinkName">
                            Press Releases
                        </small>
                    </div>

                    <div className="home__footerNavLink">
                        <strong className="home__footerNavLinkTitle">Make Money with Us</strong>
                        <small className="home__footerNavLinkName">
                            Sell on Amazon
                        </small>
                        <small className="home__footerNavLinkName">
                            Sell Under Amazon Accelerator
                        </small>
                        <small className="home__footerNavLinkName">
                            Amazon Associates
                        </small>
                        <small className="home__footerNavLinkName">
                            Sell on Amazon Handmade
                        </small>
                        <small className="home__footerNavLinkName">
                            Advertise Your Products
                        </small>
                        <small className="home__footerNavLinkName">
                            Independently Publish with Us
                        </small>
                        <small className="home__footerNavLinkName">
                            Host and Amazon Hub
                        </small>
                    </div>

                    <div className="home__footerNavLink">
                        <strong className="home__footerNavLinkTitle">Amazon Payment Products</strong>
                        <small className="home__footerNavLinkName">
                            Amazon.ca Rewards Mastercard
                        </small>
                        <small className="home__footerNavLinkName">
                            Shop with Points
                        </small>
                        <small className="home__footerNavLinkName">
                            Reload Your Balance
                        </small>
                        <small className="home__footerNavLinkName">
                            Amazon Currency Converter
                        </small>
                        <small className="home__footerNavLinkName">
                            Gift Cards
                        </small>
                        <small className="home__footerNavLinkName">
                            Amazon Cash
                        </small>
                    </div>

                    <div className="home__footerNavLink">
                        <strong className="home__footerNavLinkTitle">Let Us Help You</strong>
                        <small className="home__footerNavLinkName">
                            COVID-19 and Amazon
                        </small>
                        <small className="home__footerNavLinkName">
                            Shipping Rates & Policies
                        </small>
                        <small className="home__footerNavLinkName">
                            Amazon Prime
                        </small>
                        <small className="home__footerNavLinkName">
                            Returns Are Easy
                        </small>
                        <small className="home__footerNavLinkName">
                            Manage your Content and Devices
                        </small>
                        <small className="home__footerNavLinkName">
                            Customer Service
                        </small>
                    </div>
                </div>

                <div className="home__footerNavBottom">
                    <div className="home__footerNavBottomContainer">
                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Amazon Music
                            </strong>
                            <small className="home__footerNavBottomName">
                                Stream millions<br /> of songs
                            </small>
                        </div>

                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Goodreads
                            </strong>
                            <small className="home__footerNavBottomName">
                                Book Review<br />
                                & recommendations
                            </small>
                        </div>
                    </div>

                    <div className="home__footerNavBottomContainer">
                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Amazon Advertising
                            </strong>
                            <small className="home__footerNavBottomName">
                                Find, attract, and<br />
                                engage customers
                            </small>
                        </div>

                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                IMDb
                            </strong>
                            <small className="home__footerNavBottomName">
                                Movies, TV<br />
                                & Celebrities
                            </small>
                        </div>

                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Whole Foods Market
                            </strong>
                            <small className="home__footerNavBottomName">
                                We Believe in<br />
                                Real Food
                            </small>
                        </div>
                    </div>

                    <div className="home__footerNavBottomContainer">
                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Amazon Drive
                            </strong>
                            <small className="home__footerNavBottomName">
                                Cloud storage<br />
                                from Amazon
                            </small>
                        </div>

                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Amazon Photos
                            </strong>
                            <small className="home__footerNavBottomName">
                                Unlimited Photo Storage<br />
                                Free With Prime
                            </small>
                        </div>

                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Amazon Renewed
                            </strong>
                            <small className="home__footerNavBottomName">
                                Like-new products<br />
                                you can trust
                            </small>
                        </div>

                    </div>

                    <div className="home__footerNavBottomContainer">
                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Amazon Web Services
                            </strong>
                            <small className="home__footerNavBottomName">
                                Scalable Cloud<br />
                                Computing Services
                            </small>
                        </div>

                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Shopbop
                            </strong>
                            <small className="home__footerNavBottomName">
                                Designer<br />
                                Fashion Brands
                            </small>
                        </div>

                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Amazon Second Chance
                            </strong>
                            <small className="home__footerNavBottomName">
                                Pass it on, trade it in,<br />
                                give it a second life
                            </small>
                        </div>
                    </div>

                    <div className="home__footerNavBottomContainer">
                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Book Depository
                            </strong>
                            <small className="home__footerNavBottomName">
                                Books With Free<br />
                                Delivery Worldwide
                            </small>
                        </div>

                        <div className="home__footerNavBottomContent">
                            <strong className="home__footerNavBottomTitle">
                                Warehouse Deals
                            </strong>
                            <small className="home__footerNavBottomName">
                                Open-Box<br />
                                Discounts
                            </small>
                        </div>
                    </div>
                </div>

                <div className="home__footerCopyRight">
                    <span className='home__footerCopyRightContent'>Conditions of Use</span>
                    <span className='home__footerCopyRightContent'>Privacy Notice</span>
                    <span className='home__footerCopyRightContent'>Interest-based Ads</span>
                    <span className='home__footerCopyRightYear'><CopyrightOutlinedIcon style={{ display: 'inline-flex', verticalAlign: 'bottom', fontSize: '14px' }} /> 2008 - 2020, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>
        </div>
    )
}

export default Home
