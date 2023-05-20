import React from 'react'

const Footer = () => {
  return (
   <>
    <section class=" footer">
        {/* <!-- start container --> */}
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="mt-5">
                        <a class=" logo text-uppercase" href="index.html">
                            <img src="images/logo.png" class="logo-light" alt="" height="32"/>purbo Roy
                        </a>
                        <p class="fs-15 text-white-50 mt-4">Passionate developer living in Dhaka with over 1.9 years of solid experience dedicated to creating web applications and
                            mobile application. Specializing in Reactjs, React Native and laravel development. Self-motivated, responsible, creative,
                            team-worker, and holds a Bachelor’s degree in Computer Science & Engineering. Looking forward to a promising career
                            in the position of Software Engineer/Developer.</p>

                        <div class="icon-item mt-4">
                            <div class="d-flex">
                                <a href="#">
                                    <div class="social-icon facebook avatar-xs">
                                        <i class="mdi mdi-facebook "></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="social-icon instagram avatar-xs">
                                        <i class="mdi mdi-instagram "></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="social-icon twitter avatar-xs">
                                        <i class="mdi mdi-twitter"></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="social-icon linkedin avatar-xs">
                                        <i class="mdi mdi-linkedin"></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="social-icon pinterest avatar-xs">
                                        <i class="mdi mdi-pinterest"></i>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
                
                <div class="col-lg-3 mt-4">
                    <h5 class="text-white">Linkedin</h5>
                    <div class="row">
                        <div class="col-lg-10">
                            <div class="linkedin-box mt-4">
                                <p class="mb-0 text-white-50 fs-15 mb-2">The full monty spiffing good time .</p>
                                <a href="#" class="fs-15">@Harold.com</a>
                            </div>
                        </div>
                    </div>

                    <div class="linkedin-content d-flex align-items-center">
                        <div class="icon">
                            <i class="mdi mdi-linkedin text-white fs-40"></i>
                        </div>
                        <div class="icon-content ms-2">
                            <a href="#" class="text-white-50">Linkedin</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <h5 class="text-white">Sign up</h5>
                    <p class="mb-0 text-white-50 mt-4">Follow our newsletter to stay updated about agency.</p>
                    <div class="input-group my-3">
                        <input type="text" class="form-control p-3" placeholder="subscribe" aria-label="subscribe"
                            aria-describedby="basic-addon2"/>
                        <a href="#" class="input-group-text bg-primary text-white px-4" id="basic-addon2">Go</a>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
        {/* <!-- end container --> */}
    </section>

    <section class="bottom-footer py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <p class="mb-0 text-center text-muted">©
                        <script>document.write(new Date().getFullYear())</script>Developed <i
                            class="mdi mdi-heart text-danger"></i> by <a href="#"
                            class="text-muted">Apurbo Roy.</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Footer