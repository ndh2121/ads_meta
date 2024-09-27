import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <div
                className="container"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="footer_wrapper">
                    <div className="footer_logo">
                        <div className="logo_img">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="172"
                                height="60"
                                viewBox="0 0 172 60"
                                fill="none"
                            >
                                <path
                                    d="M56.2686 27.594L67.1454 0.951517H74.6115L85.3367 27.594H78.2876L75.8621 21.1618H65.5158L63.0524 27.594H56.2686ZM67.4865 15.9474H73.9293L70.7458 7.42184L67.4865 15.9474Z"
                                    fill="white"
                                />
                                <path
                                    d="M95.1394 27.8604C93.2445 27.8604 91.5138 27.4037 89.9473 26.4903C88.4061 25.5514 87.1807 24.3081 86.2712 22.7603C85.3616 21.1871 84.9068 19.4363 84.9068 17.5079C84.9068 15.5795 85.3616 13.8414 86.2712 12.2936C87.206 10.7204 88.4567 9.47712 90.0231 8.56366C91.6149 7.6502 93.3835 7.19348 95.3289 7.19348C96.2638 7.19348 97.1607 7.30766 98.0197 7.53602C98.8788 7.76439 99.6873 8.09424 100.445 8.5256V0.951517L106.585 0V27.594H100.521V26.1097C98.9293 27.2768 97.1354 27.8604 95.1394 27.8604ZM96.2006 22.6081C97.0596 22.6081 97.8429 22.4812 98.5503 22.2275C99.2577 21.9483 99.8894 21.5424 100.445 21.0095V13.9683C99.9147 13.4608 99.283 13.0802 98.5503 12.8265C97.8176 12.5473 97.0344 12.4078 96.2006 12.4078C95.2152 12.4078 94.3183 12.6362 93.5098 13.0929C92.7266 13.5242 92.0949 14.1332 91.6149 14.9198C91.1601 15.681 90.9327 16.5437 90.9327 17.5079C90.9327 18.4721 91.1601 19.3475 91.6149 20.1341C92.0949 20.8953 92.7266 21.5043 93.5098 21.961C94.3183 22.3924 95.2152 22.6081 96.2006 22.6081Z"
                                    fill="white"
                                />
                                <path
                                    d="M118.312 27.9746C116.417 27.9746 114.661 27.7589 113.044 27.3276C111.427 26.8709 110.025 26.2111 108.837 25.3484L111.756 21.1998C113.019 21.961 114.168 22.5193 115.204 22.8745C116.24 23.2043 117.264 23.3693 118.274 23.3693C119.285 23.3693 120.081 23.2297 120.662 22.9506C121.268 22.6461 121.571 22.2528 121.571 21.7707C121.571 21.3901 121.407 21.0856 121.079 20.8573C120.75 20.6035 120.232 20.4259 119.525 20.3244L115.545 19.7155C113.549 19.411 112.021 18.7512 110.96 17.7363C109.924 16.696 109.406 15.3512 109.406 13.7019C109.406 12.3317 109.747 11.1645 110.429 10.2003C111.137 9.21069 112.135 8.46217 113.423 7.95469C114.712 7.42184 116.253 7.15541 118.047 7.15541C119.512 7.15541 120.965 7.35841 122.405 7.76439C123.845 8.17037 125.184 8.77934 126.422 9.5913L123.504 13.5496C122.418 12.9153 121.382 12.4585 120.396 12.1794C119.411 11.8749 118.426 11.7227 117.44 11.7227C116.657 11.7227 116.025 11.8623 115.545 12.1414C115.065 12.3951 114.825 12.7377 114.825 13.169C114.825 13.575 115.002 13.9048 115.356 14.1586C115.71 14.3869 116.316 14.5646 117.175 14.6914L121.154 15.3004C123.125 15.5795 124.641 16.2392 125.702 17.2796C126.789 18.2945 127.332 19.5886 127.332 21.1618C127.332 22.4812 126.94 23.6484 126.157 24.6633C125.374 25.6783 124.3 26.4903 122.936 27.0992C121.597 27.6828 120.055 27.9746 118.312 27.9746Z"
                                    fill="white"
                                />
                                <path
                                    d="M58.732 59.6194V32.9769H66.9559L73.5124 45.5369L80.0688 32.9769H88.2928V59.6194H82.1533V41.4644L73.4366 57.7164L64.7199 41.3883V59.6194H58.732Z"
                                    fill="url(#paint0_linear_375_8127)"
                                />
                                <path
                                    d="M102.409 60C100.363 60 98.5059 59.5433 96.8384 58.6298C95.1961 57.691 93.8949 56.435 92.9348 54.8618C91.9747 53.2886 91.4947 51.5251 91.4947 49.5714C91.4947 47.6176 91.9494 45.8541 92.859 44.2809C93.7938 42.7077 95.0571 41.4644 96.6489 40.551C98.2406 39.6121 100.009 39.1427 101.955 39.1427C103.925 39.1427 105.669 39.6248 107.185 40.589C108.701 41.5279 109.888 42.8219 110.747 44.4712C111.631 46.1205 112.074 48.0109 112.074 50.1423V51.6647H97.7858C98.0637 52.299 98.4301 52.8573 98.8849 53.3394C99.3649 53.8215 99.9334 54.2021 100.59 54.4812C101.247 54.7349 101.955 54.8618 102.713 54.8618C103.546 54.8618 104.304 54.7349 104.987 54.4812C105.669 54.2021 106.25 53.8215 106.73 53.3394L110.785 56.9551C109.522 58.0208 108.221 58.7947 106.881 59.2768C105.568 59.7589 104.077 60 102.409 60ZM97.6721 47.3638H106.048C105.846 46.7041 105.53 46.1459 105.1 45.6892C104.696 45.2071 104.216 44.8391 103.66 44.5854C103.104 44.3063 102.498 44.1667 101.841 44.1667C101.159 44.1667 100.54 44.2936 99.9839 44.5473C99.4281 44.8011 98.948 45.169 98.5438 45.6511C98.1648 46.1078 97.8742 46.6787 97.6721 47.3638Z"
                                    fill="url(#paint1_linear_375_8127)"
                                />
                                <path
                                    d="M124.507 59.8858C122.107 59.8858 120.288 59.353 119.05 58.2873C117.837 57.1962 117.231 55.5976 117.231 53.4916V44.6235H113.176V39.4853H117.231V34.309L123.37 32.9769V39.4853H128.979V44.6235H123.37V52.2737C123.37 53.1618 123.56 53.7961 123.939 54.1767C124.343 54.5319 125.038 54.7096 126.023 54.7096C126.529 54.7096 126.983 54.6842 127.388 54.6334C127.817 54.5573 128.284 54.4431 128.79 54.2909V59.2768C128.234 59.4545 127.527 59.594 126.667 59.6955C125.808 59.8224 125.088 59.8858 124.507 59.8858Z"
                                    fill="url(#paint2_linear_375_8127)"
                                />
                                <path
                                    d="M137.781 59.9619C136.366 59.9619 135.103 59.6955 133.991 59.1627C132.905 58.6298 132.046 57.894 131.414 56.9551C130.808 56.0163 130.504 54.9379 130.504 53.72C130.504 51.7916 131.224 50.3072 132.665 49.2669C134.13 48.2012 136.164 47.6683 138.766 47.6683C140.333 47.6683 141.849 47.8586 143.314 48.2392V47.2497C143.314 46.2347 142.986 45.4862 142.329 45.0041C141.697 44.4966 140.75 44.2429 139.486 44.2429C138.703 44.2429 137.819 44.3697 136.833 44.6235C135.873 44.8772 134.736 45.2832 133.423 45.8414L131.224 41.3122C132.867 40.5763 134.446 40.0308 135.962 39.6756C137.503 39.295 139.044 39.1047 140.585 39.1047C143.365 39.1047 145.525 39.7771 147.066 41.1219C148.607 42.4413 149.378 44.3063 149.378 46.7168V59.6194H143.314V58.4014C142.506 58.9597 141.647 59.3657 140.737 59.6194C139.853 59.8478 138.867 59.9619 137.781 59.9619ZM136.341 53.6058C136.341 54.2401 136.619 54.7349 137.175 55.0902C137.73 55.4454 138.501 55.623 139.486 55.623C140.219 55.623 140.901 55.5469 141.533 55.3947C142.19 55.2424 142.784 55.0014 143.314 54.6715V52.0834C142.733 51.9311 142.139 51.8169 141.533 51.7408C140.927 51.6647 140.307 51.6266 139.676 51.6266C138.615 51.6266 137.794 51.8043 137.212 52.1595C136.631 52.4893 136.341 52.9715 136.341 53.6058Z"
                                    fill="url(#paint3_linear_375_8127)"
                                />
                                <path
                                    d="M160.152 54.9379V48.3154H153.975V43.7481H160.152V37.1255H164.851V43.7481H171.029V48.3154H164.851V54.9379H160.152Z"
                                    fill="url(#paint4_linear_375_8127)"
                                />
                                <path
                                    d="M28.2972 27.753V49.999C31.4997 50.5379 34.6729 51.3051 37.7167 52.4161C41.4494 53.7783 45.4083 55.7763 47.6632 59.2027C47.6681 59.2116 47.6733 59.2168 47.6781 59.2217C48.1211 59.8892 49.1787 59.6089 49.2478 58.8236V25.8482C49.3161 24.2105 49.2136 22.5598 48.9723 20.9636H37.1495C41.5105 20.9636 41.5096 27.753 37.1495 27.753L28.2972 27.753Z"
                                    fill="url(#paint5_linear_375_8127)"
                                />
                                <path
                                    d="M0.184711 27.7466C1.49374 38.553 9.74765 47.2108 20.3288 49.083C20.3288 49.083 20.3288 49.083 20.3336 49.083C21.7053 49.3307 23.1208 49.4569 24.5595 49.4613C25.8063 49.6086 27.0543 49.7832 28.2979 49.9926V36.6376C28.2979 36.6663 28.2979 36.6953 28.2926 36.7248C28.1902 41.0576 21.5362 40.9555 21.5362 36.6376V27.7466H0.184711Z"
                                    fill="url(#paint6_linear_375_8127)"
                                />
                                <path
                                    d="M-3.8147e-06 24.7281C-3.8147e-06 25.7515 0.0626869 26.7603 0.183174 27.7494H12.6823C8.32298 27.7494 8.32135 20.96 12.6823 20.96H21.5347V0.186768C9.39057 1.71157 -3.8147e-06 12.1186 -3.8147e-06 24.7281Z"
                                    fill="url(#paint7_linear_375_8127)"
                                />
                                <path
                                    d="M21.5359 0.186178V12.0639C21.5359 12.0345 21.5359 12.0054 21.5407 11.976C21.6432 7.64402 28.2976 7.74691 28.2976 12.0639V20.9594H48.9727C46.9856 7.86347 34.5961 -1.43786 21.5407 0.185396C21.5391 0.185788 21.5375 0.185786 21.5359 0.186178Z"
                                    fill="url(#paint8_linear_375_8127)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_375_8127"
                                        x1="63.4494"
                                        y1="64.5954"
                                        x2="147.036"
                                        y2="-21.806"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#02C1FA" />
                                        <stop offset="1" stop-color="#0076FC" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_375_8127"
                                        x1="63.4494"
                                        y1="64.5954"
                                        x2="147.036"
                                        y2="-21.806"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#02C1FA" />
                                        <stop offset="1" stop-color="#0076FC" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint2_linear_375_8127"
                                        x1="63.4494"
                                        y1="64.5954"
                                        x2="147.036"
                                        y2="-21.806"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#02C1FA" />
                                        <stop offset="1" stop-color="#0076FC" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint3_linear_375_8127"
                                        x1="63.4494"
                                        y1="64.5954"
                                        x2="147.036"
                                        y2="-21.806"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#02C1FA" />
                                        <stop offset="1" stop-color="#0076FC" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint4_linear_375_8127"
                                        x1="63.4494"
                                        y1="64.5954"
                                        x2="147.036"
                                        y2="-21.806"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#02C1FA" />
                                        <stop offset="1" stop-color="#0076FC" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint5_linear_375_8127"
                                        x1="38.7829"
                                        y1="59.3928"
                                        x2="38.7829"
                                        y2="22.988"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#02C1FA" />
                                        <stop offset="1" stop-color="#0076FC" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint6_linear_375_8127"
                                        x1="0.641322"
                                        y1="28.0192"
                                        x2="29.3709"
                                        y2="43.6449"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#02C1FA" />
                                        <stop offset="1" stop-color="#0076FC" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint7_linear_375_8127"
                                        x1="22.2828"
                                        y1="2.77731"
                                        x2="2.4133"
                                        y2="30.2831"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#02C1FA" />
                                        <stop offset="1" stop-color="#0076FC" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint8_linear_375_8127"
                                        x1="47.2559"
                                        y1="22.5646"
                                        x2="19.7086"
                                        y2="3.07496"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#02C1FA" />
                                        <stop offset="1" stop-color="#0076FC" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className="jocwjc">A product of VenusTeam</p>
                        <p className="slkujcoiw">
                            © Copyright sMeta.vn. All Rights Reserved
                        </p>
                        <div className="footer_icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.3726 18.6274 0 12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24Z"
                                    fill="url(#paint0_linear_375_8138)"
                                />
                                <path
                                    d="M4.46931 12.5869C5.8721 11.8142 7.438 11.1693 8.9011 10.5211C11.4182 9.45944 13.9453 8.41614 16.4979 7.44484C16.9946 7.27934 17.8869 7.11749 17.9744 7.85349C17.9265 8.89529 17.7294 9.93099 17.5942 10.9667C17.2511 13.2443 16.8545 15.5141 16.4677 17.7842C16.3345 18.5403 15.3872 18.9318 14.7811 18.4479C13.3245 17.464 11.8567 16.4897 10.4187 15.483C9.94765 15.0043 10.3844 14.317 10.8051 13.9752C12.0048 12.7929 13.2771 11.7884 14.4141 10.545C14.7208 9.80434 13.8147 10.4285 13.5157 10.6198C11.8733 11.7516 10.2711 12.9525 8.53955 13.9472C7.65505 14.4341 6.62415 14.018 5.74005 13.7463C4.94734 13.4181 3.78573 13.0874 4.46923 12.587L4.46931 12.5869Z"
                                    fill="white"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_375_8138"
                                        x1="9.0014"
                                        y1="1.0008"
                                        x2="3.0014"
                                        y2="15"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#37AEE2" />
                                        <stop offset="1" stop-color="#1E96C8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M24 12C24 5.3719 18.6281 0 12 0C5.3719 0 0 5.3719 0 12C0 17.9907 4.3875 22.9547 10.125 23.8547V15.4688H7.0781V12H10.125V9.35625C10.125 6.3492 11.9156 4.6875 14.6578 4.6875C15.9703 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8297C14.3391 7.875 13.875 8.8008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8547C19.6125 22.9547 24 17.9907 24 12Z"
                                    fill="#1877F2"
                                />
                                <path
                                    d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.8008 14.3391 7.875 15.8297 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6578 4.6875C11.9157 4.6875 10.125 6.3492 10.125 9.35625V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="quick_link">
                        <div className="item_quick">
                            <p className="sjcowclsj">Quick Links</p>
                            <div className="lkjcoiwur">
                                <a className="lkjcoiw" href="#">
                                    Home
                                </a>
                                <a className="lkjcoiw" href="#">
                                    Privacy policy
                                </a>
                                <a className="lkjcoiw" href="#">
                                    Extension
                                </a>
                            </div>
                        </div>
                        <div className="item_quick">
                            <p className="sjcowclsj">Contact Us</p>
                            <div className="lkjcoiwur">
                                <a className="lkjcoiw" href="#">
                                    Vinhome OcenPark
                                </a>
                                <a className="lkjcoiw" href="#">
                                    Da ton, Gia Lam, Ha Noi, Viet Nam
                                </a>
                                <a className="lkjcoiw" href="#" style={{marginTop: "20px"}}>
                                    Phone: +8492.382.9999
                                </a>
                                <a className="lkjcoiw" href="#">
                                    Email: admin@smeta.vn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
