import Menu from '../inc/sidebar';
import './lorg.css';
function Login(){
    return(
        <>
            <div className="body1">
                <div className="b1">
                    <div className="container1">
                        <div className="top-header1">
                            <div class="image1">
                                <img src="images/logo.png" alt=""/>
                            </div>
                        </div>
                        <div class="menu1">
                            <a className='link' href="/" id="h">Home</a>
                            <a className='link' href="#">Patient's Profile</a>
                            <a className='link' href="#">Notes/ Summary</a>
                            <a className='link' href="#" id='s'>Settings</a>
                            <a className='link' href="#" id='f'>Follow up/</a>
                        </div>
                    </div>
                </div>
                 
                <section class="center">
                    <Menu/>
                    <div class="mar" id="log">
                        <div class="login">
                            <div class="image">
                                <img src="images/logimg.jpg" alt=""/>
                            </div>
                            <div class="box">
                                <div class="container2">
                                    <div class="top-header">
                                        <header>Welcome Back!</header>
                                    </div>
                                    <div class="input-field">
                                        <input type="text" class="input" id="bx" placeholder="example@gmail.com" required/>
                                        <label for="bx"><i class="bx bx-user cat"></i></label>
                                    </div>
                                    <div class="input-field">
                                        <input type="password" class="input" id="bxx" placeholder="Password" required/>
                                        <label for="bxx"><i class="bx bx-lock-alt cat"></i></label>
                                    </div>
                                    <div class="bottom">
                                        <div class="lefte">
                                        </div>
                                        <div class="righte">
                                            <label><a href="#">Forgot password?</a></label>
                                        </div>
                                    </div>
                                    <div class="input-field">
                                        <input type="submit" id="submit" value="LOG IN"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="footer1">
                    <div class="containerr">
                        <a href="#">&copy; 2023, All rights reserved</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;