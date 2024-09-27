import React from "react";
import "./Submit_end.css";
import ava_submit from "../../assets/img/ava_submit.png";

const Submit = () => {
    return (
        <section className="submit">
            <div className="submit_wrapper">
                <div className="container ">
                    <div className="submit_content">
                        <div className="lkscjlsk">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1440"
                                height="722"
                                viewBox="0 0 1440 722"
                                fill="none"
                            >
                                <g opacity="0.1">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M720 1446C1092.79 1446 1395 1143.79 1395 771C1395 398.208 1092.79 96 720 96C347.208 96 45 398.208 45 771C45 1143.79 347.208 1446 720 1446Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M720 1501.97C1123.7 1501.97 1450.97 1174.7 1450.97 771C1450.97 367.295 1123.7 40.0276 720 40.0276C316.295 40.0276 -10.9724 367.295 -10.9724 771C-10.9724 1174.7 316.295 1501.97 720 1501.97Z"
                                        stroke="white"
                                        stroke-opacity="0.3"
                                        stroke-width="111.945"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="submit_ava">
                            <div className="round_yellow"></div>
                            <img src={ava_submit} alt="ava_submit" />
                        </div>
                        <div className="submit_email">
                            <form>
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Submit;
