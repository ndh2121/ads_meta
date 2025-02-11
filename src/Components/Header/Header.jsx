import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="top_header">
                <div className="container">
                    <div className="top_header_content">
                        <div className="phone">
                            <span>Call us toll free: </span>
                            <span className="yellow">+1 (323) 990 0052</span>
                        </div>
                        <div className="free">
                            <span>Free to use</span>
                        </div>
                        <div className="list_contry">
                            <span>United States (US) dollar</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M15.2222 7.34689L9.59717 12.9719C9.51878 13.0506 9.42564 13.113 9.32308 13.1556C9.22052 13.1981 9.11056 13.2201 8.99951 13.2201C8.88846 13.2201 8.7785 13.1981 8.67594 13.1556C8.57339 13.113 8.48024 13.0506 8.40185 12.9719L2.77685 7.34689C2.61835 7.18839 2.5293 6.9734 2.5293 6.74924C2.5293 6.52507 2.61835 6.31009 2.77685 6.15158C2.93536 5.99307 3.15035 5.90402 3.37451 5.90402C3.59868 5.90402 3.81366 5.99307 3.97217 6.15158L9.00021 11.1796L14.0283 6.15088C14.1868 5.99237 14.4018 5.90332 14.6259 5.90332C14.8501 5.90332 15.0651 5.99237 15.2236 6.15088C15.3821 6.30939 15.4711 6.52437 15.4711 6.74853C15.4711 6.9727 15.3821 7.18768 15.2236 7.34619L15.2222 7.34689Z"
                                    fill="#1D1C20"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="header_wrapper">
                        <div className="header_logo">
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100"
                                    height="36"
                                    viewBox="0 0 100 36"
                                    fill="none"
                                >
                                    <path
                                        d="M32.6357 16.598L38.9731 1.0749H43.3231L49.5721 16.598H45.465L44.0518 12.8503H38.0236L36.5883 16.598H32.6357ZM39.1718 9.81219H42.9257L41.0708 4.8448L39.1718 9.81219Z"
                                        fill="black"
                                        fill-opacity="0.2"
                                    />
                                    <path
                                        d="M55.2836 16.7532C54.1796 16.7532 53.1712 16.4871 52.2585 15.9549C51.3605 15.4079 50.6465 14.6835 50.1166 13.7817C49.5866 12.8651 49.3217 11.845 49.3217 10.7214C49.3217 9.59782 49.5866 8.58513 50.1166 7.68331C50.6613 6.76671 51.3899 6.0423 52.3026 5.51008C53.2301 4.97785 54.2605 4.71174 55.394 4.71174C55.9387 4.71174 56.4613 4.77827 56.9618 4.91133C57.4623 5.04438 57.9334 5.23657 58.375 5.4879V1.0749L61.9522 0.520508V16.598H58.4192V15.7331C57.4918 16.4132 56.4466 16.7532 55.2836 16.7532ZM55.9019 13.693C56.4024 13.693 56.8588 13.619 57.271 13.4712C57.6831 13.3086 58.0512 13.072 58.375 12.7616V8.65905C58.0659 8.36337 57.6979 8.14161 57.271 7.99377C56.844 7.83115 56.3877 7.74984 55.9019 7.74984C55.3278 7.74984 54.8052 7.88289 54.3341 8.149C53.8778 8.40033 53.5098 8.75514 53.2301 9.21344C52.9651 9.65696 52.8326 10.1596 52.8326 10.7214C52.8326 11.2832 52.9651 11.7932 53.2301 12.2515C53.5098 12.6951 53.8778 13.0499 54.3341 13.316C54.8052 13.5673 55.3278 13.693 55.9019 13.693Z"
                                        fill="black"
                                        fill-opacity="0.2"
                                    />
                                    <path
                                        d="M68.785 16.8198C67.6809 16.8198 66.6578 16.6941 65.7157 16.4428C64.7736 16.1767 63.9565 15.7923 63.2647 15.2896L64.9649 12.8725C65.701 13.316 66.3708 13.6412 66.9743 13.8482C67.5779 14.0404 68.1741 14.1365 68.7629 14.1365C69.3518 14.1365 69.8155 14.0552 70.154 13.8925C70.5074 13.7151 70.684 13.486 70.684 13.2051C70.684 12.9833 70.5883 12.8059 70.3969 12.6729C70.2056 12.525 69.9038 12.4215 69.4916 12.3624L67.1731 12.0076C66.0101 11.8302 65.1195 11.4458 64.5012 10.8545C63.8977 10.2483 63.5959 9.46477 63.5959 8.50381C63.5959 7.70548 63.7946 7.02542 64.1921 6.46364C64.6043 5.88706 65.1857 5.45094 65.9365 5.15526C66.6873 4.8448 67.5853 4.68957 68.6304 4.68957C69.4842 4.68957 70.3307 4.80784 71.1698 5.04438C72.0089 5.28092 72.7891 5.63574 73.5104 6.10882L71.8102 8.41511C71.1772 8.04551 70.5736 7.7794 69.9995 7.61678C69.4254 7.43937 68.8512 7.35067 68.2771 7.35067C67.8208 7.35067 67.4528 7.43198 67.1731 7.5946C66.8934 7.74244 66.7535 7.94203 66.7535 8.19335C66.7535 8.4299 66.8566 8.62209 67.0627 8.76993C67.2688 8.90298 67.6221 9.00647 68.1226 9.08039L70.4411 9.4352C71.5893 9.59782 72.4726 9.98221 73.0909 10.5883C73.7239 11.1797 74.0404 11.9337 74.0404 12.8503C74.0404 13.619 73.8122 14.2991 73.3558 14.8905C72.8995 15.4818 72.2739 15.9549 71.4789 16.3097C70.6987 16.6497 69.8007 16.8198 68.785 16.8198Z"
                                        fill="black"
                                        fill-opacity="0.2"
                                    />
                                    <path
                                        d="M34.071 35.2574V19.7343H38.8627L42.6828 27.0523L46.5028 19.7343H51.2945V35.2574H47.7173V24.6795L42.6386 34.1486L37.5599 24.6352V35.2574H34.071Z"
                                        fill="url(#paint0_linear_373_8014)"
                                    />
                                    <path
                                        d="M59.5195 35.4792C58.3271 35.4792 57.2451 35.213 56.2735 34.6808C55.3166 34.1338 54.5585 33.402 53.9991 32.4854C53.4397 31.5688 53.16 30.5413 53.16 29.403C53.16 28.2646 53.425 27.2371 53.955 26.3205C54.4996 25.4039 55.2357 24.6795 56.1631 24.1473C57.0905 23.6003 58.121 23.3268 59.2545 23.3268C60.4027 23.3268 61.4185 23.6077 62.3017 24.1695C63.185 24.7165 63.8768 25.4705 64.3774 26.4314C64.8926 27.3924 65.1502 28.4938 65.1502 29.7356V30.6226H56.8255C56.9875 30.9922 57.2009 31.3175 57.4659 31.5984C57.7456 31.8793 58.0768 32.101 58.4596 32.2637C58.8423 32.4115 59.2545 32.4854 59.6961 32.4854C60.1819 32.4854 60.6235 32.4115 61.021 32.2637C61.4185 32.101 61.757 31.8793 62.0367 31.5984L64.3994 33.7051C63.6634 34.326 62.9053 34.7769 62.1251 35.0578C61.3596 35.3387 60.491 35.4792 59.5195 35.4792ZM56.7593 28.1168H61.6393C61.5215 27.7324 61.3375 27.4071 61.0872 27.141C60.8517 26.8601 60.572 26.6458 60.2481 26.4979C59.9243 26.3353 59.571 26.254 59.1882 26.254C58.7908 26.254 58.4301 26.3279 58.1062 26.4758C57.7824 26.6236 57.5027 26.838 57.2672 27.1189C57.0463 27.385 56.8771 27.7176 56.7593 28.1168Z"
                                        fill="url(#paint1_linear_373_8014)"
                                    />
                                    <path
                                        d="M72.3946 35.4126C70.9961 35.4126 69.9362 35.1022 69.2149 34.4812C68.5083 33.8455 68.155 32.9142 68.155 31.6871V26.5201H65.7923V23.5264H68.155V20.5105L71.7322 19.7343V23.5264H75.0002V26.5201H71.7322V30.9775C71.7322 31.4949 71.8426 31.8645 72.0634 32.0863C72.2989 32.2932 72.7038 32.3967 73.2779 32.3967C73.5723 32.3967 73.8373 32.3819 74.0728 32.3524C74.3231 32.308 74.5954 32.2415 74.8898 32.1528V35.0578C74.5659 35.1613 74.1538 35.2426 73.6533 35.3018C73.1527 35.3757 72.7332 35.4126 72.3946 35.4126Z"
                                        fill="url(#paint2_linear_373_8014)"
                                    />
                                    <path
                                        d="M80.1284 35.457C79.3041 35.457 78.568 35.3017 77.9203 34.9913C77.2873 34.6808 76.7868 34.2521 76.4188 33.7051C76.0655 33.1581 75.8888 32.5298 75.8888 31.8201C75.8888 30.6966 76.3084 29.8317 77.1475 29.2256C78.0013 28.6046 79.1863 28.2942 80.7026 28.2942C81.6152 28.2942 82.4985 28.4051 83.3523 28.6268V28.0502C83.3523 27.4589 83.1609 27.0228 82.7782 26.7419C82.4102 26.4462 81.8581 26.2984 81.1221 26.2984C80.6658 26.2984 80.1505 26.3723 79.5764 26.5201C79.017 26.668 78.3546 26.9045 77.5891 27.2297L76.3084 24.5908C77.2652 24.1621 78.1853 23.8442 79.0685 23.6373C79.9665 23.4155 80.8645 23.3046 81.7625 23.3046C83.3818 23.3046 84.6404 23.6964 85.5384 24.4799C86.4363 25.2487 86.8853 26.3353 86.8853 27.7398V35.2574H83.3523V34.5478C82.8813 34.873 82.3807 35.1096 81.8508 35.2574C81.3356 35.3905 80.7614 35.457 80.1284 35.457ZM79.2893 31.7536C79.2893 32.1232 79.4513 32.4115 79.7751 32.6185C80.099 32.8254 80.548 32.9289 81.1221 32.9289C81.549 32.9289 81.9465 32.8846 82.3145 32.7959C82.6972 32.7072 83.0432 32.5667 83.3523 32.3745V30.8666C83.0137 30.7779 82.6678 30.7113 82.3145 30.667C81.9612 30.6226 81.6005 30.6005 81.2325 30.6005C80.6142 30.6005 80.1358 30.704 79.7972 30.9109C79.4586 31.1031 79.2893 31.384 79.2893 31.7536Z"
                                        fill="url(#paint3_linear_373_8014)"
                                    />
                                    <path
                                        d="M93.1628 32.5298V28.6712H89.5636V26.0101H93.1628V22.1515H95.9009V26.0101H99.5002V28.6712H95.9009V32.5298H93.1628Z"
                                        fill="url(#paint4_linear_373_8014)"
                                    />
                                    <path
                                        d="M16.4874 16.6897V29.6515C18.3534 29.9656 20.2023 30.4126 21.9758 31.0599C24.1507 31.8536 26.4573 33.0177 27.7712 35.0142C27.774 35.0193 27.777 35.0224 27.7798 35.0252C28.038 35.4142 28.6542 35.2509 28.6945 34.7933V15.5799C28.7342 14.6257 28.6745 13.6639 28.5339 12.7339H21.6453C24.1862 12.7339 24.1858 16.6898 21.6453 16.6898L16.4874 16.6897Z"
                                        fill="url(#paint5_linear_373_8014)"
                                    />
                                    <path
                                        d="M0.107468 16.687C0.870184 22.9834 5.67939 28.028 11.8446 29.1188C11.8446 29.1188 11.8446 29.1188 11.8474 29.1188C12.6466 29.2631 13.4713 29.3367 14.3096 29.3393C15.0361 29.425 15.7632 29.5268 16.4878 29.6488V21.8674C16.4878 21.8841 16.4878 21.901 16.4848 21.9182C16.4251 24.4428 12.5481 24.3833 12.5481 21.8674V16.687H0.107468Z"
                                        fill="url(#paint6_linear_373_8014)"
                                    />
                                    <path
                                        d="M-0.000457764 14.929C-0.000457764 15.5253 0.0360699 16.1132 0.106273 16.6895H7.38897C4.84899 16.6895 4.84804 12.7336 7.38897 12.7336H12.5469V0.629883C5.47103 1.51832 -0.000457764 7.58205 -0.000457764 14.929Z"
                                        fill="url(#paint7_linear_373_8014)"
                                    />
                                    <path
                                        d="M12.5475 0.629109V7.54978C12.5475 7.53264 12.5475 7.51569 12.5503 7.49855C12.61 4.97447 16.4872 5.03442 16.4872 7.54978V12.7328H28.5337C27.3759 5.10233 20.1571 -0.317146 12.5503 0.628653C12.5493 0.628882 12.5484 0.62888 12.5475 0.629109Z"
                                        fill="url(#paint8_linear_373_8014)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_373_8014"
                                            x1="36.8196"
                                            y1="38.1566"
                                            x2="85.521"
                                            y2="-12.1846"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#02C1FA" />
                                            <stop
                                                offset="1"
                                                stop-color="#0076FC"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_373_8014"
                                            x1="36.8196"
                                            y1="38.1566"
                                            x2="85.521"
                                            y2="-12.1846"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#02C1FA" />
                                            <stop
                                                offset="1"
                                                stop-color="#0076FC"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint2_linear_373_8014"
                                            x1="36.8196"
                                            y1="38.1566"
                                            x2="85.521"
                                            y2="-12.1846"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#02C1FA" />
                                            <stop
                                                offset="1"
                                                stop-color="#0076FC"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint3_linear_373_8014"
                                            x1="36.8196"
                                            y1="38.1566"
                                            x2="85.521"
                                            y2="-12.1846"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#02C1FA" />
                                            <stop
                                                offset="1"
                                                stop-color="#0076FC"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint4_linear_373_8014"
                                            x1="36.8196"
                                            y1="38.1566"
                                            x2="85.521"
                                            y2="-12.1846"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#02C1FA" />
                                            <stop
                                                offset="1"
                                                stop-color="#0076FC"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint5_linear_373_8014"
                                            x1="22.597"
                                            y1="35.1249"
                                            x2="22.597"
                                            y2="13.9134"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#02C1FA" />
                                            <stop
                                                offset="1"
                                                stop-color="#0076FC"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint6_linear_373_8014"
                                            x1="0.373515"
                                            y1="16.8458"
                                            x2="17.113"
                                            y2="25.9503"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#02C1FA" />
                                            <stop
                                                offset="1"
                                                stop-color="#0076FC"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint7_linear_373_8014"
                                            x1="12.9828"
                                            y1="2.13928"
                                            x2="1.40567"
                                            y2="18.1657"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#02C1FA" />
                                            <stop
                                                offset="1"
                                                stop-color="#0076FC"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint8_linear_373_8014"
                                            x1="27.5334"
                                            y1="13.6681"
                                            x2="11.4828"
                                            y2="2.31228"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#02C1FA" />
                                            <stop
                                                offset="1"
                                                stop-color="#0076FC"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                        <nav className="header_navbar">
                            <ul className="nav">
                                <li className="nav_item">
                                    <a href="#">Features</a>
                                </li>
                                <li className="nav_item">
                                    <a href="#">Contact us</a>
                                </li>
                                <li className="nav_item nav_button">
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M11 2.0625C9.23233 2.0625 7.50436 2.58668 6.0346 3.56874C4.56483 4.55081 3.41929 5.94665 2.74283 7.57977C2.06637 9.21288 1.88938 11.0099 2.23424 12.7436C2.57909 14.4773 3.43031 16.0698 4.68024 17.3198C5.93017 18.5697 7.52268 19.4209 9.25638 19.7658C10.9901 20.1106 12.7871 19.9336 14.4202 19.2572C16.0534 18.5807 17.4492 17.4352 18.4313 15.9654C19.4133 14.4956 19.9375 12.7677 19.9375 11C19.935 8.6304 18.9926 6.35856 17.317 4.683C15.6414 3.00743 13.3696 2.065 11 2.0625ZM11 3.4375C12.2586 3.43802 13.4973 3.75267 14.6035 4.35294C15.7098 4.9532 16.6488 5.82008 17.3353 6.875H11C10.1317 6.87597 9.2857 7.15049 8.58225 7.65957C7.87879 8.16865 7.3536 8.88641 7.08125 9.71094L5.09782 6.27344C5.80575 5.38813 6.70388 4.67353 7.7256 4.1826C8.74733 3.69167 9.86645 3.43701 11 3.4375ZM13.75 11C13.75 11.5439 13.5887 12.0756 13.2865 12.5278C12.9844 12.9801 12.5549 13.3325 12.0524 13.5407C11.5499 13.7488 10.997 13.8033 10.4635 13.6972C9.93006 13.5911 9.44005 13.3291 9.05546 12.9445C8.67087 12.5599 8.40895 12.0699 8.30284 11.5365C8.19673 11.0031 8.25119 10.4501 8.45933 9.94762C8.66748 9.44512 9.01995 9.01563 9.47219 8.71346C9.92442 8.41128 10.4561 8.25 11 8.25C11.7293 8.25 12.4288 8.53973 12.9445 9.05546C13.4603 9.57118 13.75 10.2707 13.75 11ZM3.4375 11C3.43608 9.80921 3.71767 8.63513 4.25907 7.57453L7.42758 13.0625C7.43274 13.0711 7.43875 13.0788 7.44391 13.0866C7.88061 13.8317 8.54016 14.4209 9.32957 14.7712C10.119 15.1215 10.9984 15.2152 11.8439 15.0391L9.85875 18.4766C8.07246 18.2014 6.44344 17.2965 5.26587 15.9254C4.0883 14.5543 3.43981 12.8074 3.4375 11ZM11.4031 18.5513L14.5724 13.0625C14.5793 13.0505 14.5845 13.0384 14.5913 13.0264C15.0165 12.2766 15.1955 11.4122 15.103 10.5551C15.0105 9.69812 14.6511 8.89181 14.0757 8.25H18.0469C18.4819 9.36454 18.6462 10.5664 18.5264 11.7568C18.4066 12.9472 18.0061 14.0922 17.3578 15.0977C16.7094 16.1032 15.8318 16.9406 14.7969 17.5409C13.762 18.1413 12.5995 18.4876 11.4048 18.5513H11.4031Z"
                                                fill="white"
                                            />
                                        </svg>
                                        Download Extension
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
