import React from "react";
import "./Section_send_email.css";
import arrowRight from "../../assets/img/ArrowRight.png";

const Section_send_email = () => {
    return (
        <section className="Send_email">
            <div
                className="container"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="send_email_wrapper">
                    <h5 className="oljklck">Subscribe to our Newsletter</h5>
                    <h2 className="ljcdoiw">
                        Whith over 100,000+ installs & daily usage
                    </h2>
                    <p className="olsjkcl">
                        Register an account and joun now to optimize ads
                    </p>
                    <div className="input_email">
                        <div className="lscjkl">
                            <input type="text" placeholder="Write your email address here"/>
                        </div>
                        <button>
                            <img src={arrowRight} alt="right" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section_send_email;
