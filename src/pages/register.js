import Menu from '../inc/sidebar';
import './lorg.css';
function Register(){
    return(
        <>
            <div className="body1">
                <div className="b1">
                    <div className="container1">
                        <div className="top-header1">
                            <div className="image1">
                                <img src="images/logo.png" alt=""/>
                            </div>
                        </div>
                        <div className="menu1">
                            <a className='link' id="h" href="/">Home</a>
                            <a className='link' href="#">Patient's Profile</a>
                            <a className='link' href="#">Notes/ Summary</a>
                            <a className='link' id='s' href="#">Settings</a>
                            <a className='link' id='f' href="#">Follow up/</a>
                        </div>
                    </div>
                </div>
                <section className="center">
                    <Menu/>
                    <div class="width" id="reg">
                        <div class="register">
                            <form method="post">
                                <div class="txt_field">
                                    <input type="text" required />
                                    <span></span>
                                    <label for="">First Name *</label>
                                </div>
                                <div class="txt_field">
                                    <input type="text" required/>
                                    <span></span>
                                    <label for="">Last Name *</label>
                                </div>
                                <div class="txt_field">
                                    <input type="email" required/>
                                    <span></span>
                                    <label for="">Email Address *</label>
                                </div>
                                {/* <div class="g-recaptcha" data-sitekey="6Leg3EgnAAAAAGf_O7E0_IlvZ2VgfMc1GBl_x3Up"></div> */}
                                <input type="submit" value="Submit"/>
                            </form>
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

export default Register;