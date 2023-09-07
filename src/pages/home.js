// import Menu from "../inc/Menu";
import { Link } from 'react-router-dom';
import './home.css';
import { Route, Routes, useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/log');
    }
    
    const navigateToRegister = () => {
        navigate('/reg');
    }
    return(
        <>
            {/* <Menu/> */}
            <div className="body">
            <div className="container">
                <div className="nav-bar">
                    <div className="left">
                        <a href="/"><i class="fa-sharp fa-solid fa-house"></i></a>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href="#"><i className="fa-sharp fa-solid fa-link"></i></a></li>
                            <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                            <li><a href="#"><i className="fa-solid fa-ellipsis"></i></a></li>
                            <li><a href="#"><i className="fa-regular fa-circle-question"></i></a></li>
                            <li><Link to="/log">Log in</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="top-header">
                        <div className="image">
                            <img src="images/images (1).png" alt=""/>
                        </div>
                        <div className="copy">
                            <h1>&copy; 2023, All rights reserved.(2) <span>PDF</span></h1>
                        </div>
                    </div>
                    <div className="data-body">
                        <div className="left">
                            <h1>EvolvAI: "Save Time, Improve Care"</h1>
                            <h3>The Ultimate AI Companion for HealthCare Professionals.</h3>
                            <div className="buttons">
                                <button id="r" onClick={navigateToRegister}>Register Now</button>
                                <button id="g" onClick={navigateToLogin}>Log in</button>
                            </div>
                        </div>
                        <div className="right">
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer">
                <div className="container">
                    <a href="#">&copy; 2023, All rights reserved</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
            </div>
        </>
    );
}

export default Home;