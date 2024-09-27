import React, { Component } from "react";
import "./LoveByUser.css";
import mess from "../../assets/img/mess.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ava from "../../assets/img/ava.png";
import ava2 from "../../assets/img/ava2.png";
import ava3 from "../../assets/img/ava3.png";
import star from "../../assets/img/star.png";
import star_ccc from "../../assets/img/star_ccc.png";
import buttonRight from "../../assets/img/Button_right.png";
import buttonLeft from "../../assets/img/Button_left.png";

const LoveByUser = () => {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ position: "absolute" }}
                onClick={onClick}
            >
                <img src={buttonRight} alt="right" />
            </div>
        );
    };

    // Nút tùy chỉnh cho Previous
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ position: "absolute" }}
                onClick={onClick}
            >
                <img src={buttonLeft} alt="right" />
            </div>
        );
    };
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <NextArrow />, // Sử dụng nút Next tùy chỉnh
        prevArrow: <PrevArrow />, // Sử dụng nút Previous tùy chỉnh
    };
    return (
        <section className="LoveByUser">
            <div className="container">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1140"
                        height="1"
                        viewBox="0 0 1140 1"
                        fill="none"
                    >
                        <path d="M0 0.5H1140" stroke="#E3E7ED" />
                    </svg>
                </div>
                <div className="LoveByUser_wrapper">
                    <div className="content_lovebyuser">
                        <div
                            className="slcjoilk"
                            style={{ paddingLeft: "80px" }}
                        >
                            <div>
                                <img src={mess} alt="" />
                            </div>
                            <p>Ads Meta+ is loved by users</p>
                        </div>
                    </div>

                    <div
                        className="list_loveByUser"
                        style={{ position: "relative" }}
                    >
                        <div className="slider-container ">
                            <Slider {...settings}>
                                <div className="item-slider">
                                    <div className="ava">
                                        <img
                                            className="ava_img"
                                            src={ava}
                                            alt="Photo"
                                        />
                                        <div className="star">
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                    <p className="text-slider">
                                        “With <span>Ads Meta+</span>, we’re able
                                        to easily track our performance in full
                                        detail. It’s become an essential tool
                                        for us to grow and engage with our
                                        audience.”
                                    </p>
                                    <p className="author">Jaquon Hart</p>
                                    <p className="author_desc">
                                        Digital Marketing Executive, Hypebeast
                                    </p>
                                </div>
                                <div className="item-slider">
                                    <div className="ava">
                                        <img
                                            className="ava_img"
                                            src={ava2}
                                            alt="Photo"
                                        />
                                        <div className="star">
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star_ccc} alt="star" />
                                        </div>
                                    </div>
                                    <p className="text-slider">
                                        “With <span>Ads Meta+</span>, we’re able
                                        to easily track our performance in full
                                        detail. It’s become an essential tool
                                        for us to grow and engage with our
                                        audience.”
                                    </p>
                                    <p className="author">Harinder Bharwal</p>
                                    <p className="author_desc">
                                        Product Manager of Salestation Asia
                                    </p>
                                </div>
                                <div className="item-slider">
                                    <div className="ava">
                                        <img
                                            className="ava_img"
                                            src={ava3}
                                            alt="Photo"
                                        />
                                        <div className="star">
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star_ccc} alt="star" />
                                            <img src={star_ccc} alt="star" />
                                        </div>
                                    </div>
                                    <p className="text-slider">
                                        “With <span>Ads Meta+</span>, we’re able
                                        to easily track our performance in full
                                        detail. It’s become an essential tool
                                        for us to grow and engage with our
                                        audience.”
                                    </p>
                                    <p className="author">Rickie Baroch</p>
                                    <p className="author_desc">
                                        Product Manager of Salestation Asia
                                    </p>
                                </div>
                                {/* <div className="item-slider">
                                    <div className="ava">
                                        <img src={ava} alt="Photo" />
                                        <div className="star">
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                    <p className="text-slider">
                                        “With <span>Ads Meta+</span>, we’re able
                                        to easily track our performance in full
                                        detail. It’s become an essential tool
                                        for us to grow and engage with our
                                        audience.”
                                    </p>
                                    <p className="author">Jaquon Hart</p>
                                    <p className="author_desc">
                                        Digital Marketing Executive, Hypebeast
                                    </p>
                                </div>
                                <div className="item-slider">
                                    <div className="ava">
                                        <img src={ava} alt="Photo" />
                                        <div className="star">
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                    <p className="text-slider">
                                        “With <span>Ads Meta+</span>, we’re able
                                        to easily track our performance in full
                                        detail. It’s become an essential tool
                                        for us to grow and engage with our
                                        audience.”
                                    </p>
                                    <p className="author">Jaquon Hart</p>
                                    <p className="author_desc">
                                        Digital Marketing Executive, Hypebeast
                                    </p>
                                </div>
                                <div className="item-slider">
                                    <div className="ava">
                                        <img src={ava} alt="Photo" />
                                        <div className="star">
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                    <p className="text-slider">
                                        “With <span>Ads Meta+</span>, we’re able
                                        to easily track our performance in full
                                        detail. It’s become an essential tool
                                        for us to grow and engage with our
                                        audience.”
                                    </p>
                                    <p className="author">Jaquon Hart</p>
                                    <p className="author_desc">
                                        Digital Marketing Executive, Hypebeast
                                    </p>
                                </div> */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoveByUser;
