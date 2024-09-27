import "./App.css";
import FaqS from "./Components/FaqS/FaqS";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LoveByUser from "./Components/LoveByUser/LoveByUser";
import Section_abkdjs from "./Components/Section_abkdjs/Section_abkdjs";
import Section_download from "./Components/Section_download/Section_download";
import Section_feature from "./Components/Section_feature/Section_feature";
import Section_lkcloiur from "./Components/Section_lkcloiur/Section_lkcloiur";
import Section_Manufacturer from "./Components/Section_Manufacturer/Section_Manufacturer";
import Section_send_email from "./Components/Section_send_email/Section_send_email";
import Submit_end from "./Components/Submit_end/Submit_end";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Section_download></Section_download>
            <Section_Manufacturer></Section_Manufacturer>
            <Section_abkdjs></Section_abkdjs>
            <Section_feature></Section_feature>
            <Section_send_email></Section_send_email>
            <Section_lkcloiur></Section_lkcloiur>
            <WhyChooseUs></WhyChooseUs>
            <LoveByUser></LoveByUser>
            <Submit_end></Submit_end>
            <FaqS></FaqS>
            <Footer></Footer>
        </div>
    );
}

export default App;
