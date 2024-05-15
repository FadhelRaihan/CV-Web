import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import FotoPas from "../../assets/Fotopas.jpg"
import 'animate.css';
import "../home/home.css"

function Home() {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div className="mainHome">
                <div className="kiriHome">
                    <img className="animate__animated animate__fadeInUp" src={FotoPas} alt="FotoPas" />
                </div>

                <div className="kananHome">
                    <h1 className="animate__animated animate__fadeInUp">Hello</h1>
                    <h2 className="animate__animated animate__fadeInUp">a little about me</h2>
                    <p className="animate__animated animate__fadeInUp">I am a front end developer studying software engineering, browse my cv website to know more about me.</p>
                    <div className="pilihan">
                        <a href="/resume" className="animate__animated animate__fadeInUp"><h3>Resume</h3></a>
                        <a href="/" className="animate__animated animate__fadeInUp"><h3>Contact</h3></a>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;