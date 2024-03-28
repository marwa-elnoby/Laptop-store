import React , {useMemo} from "react";
import image1 from "../img/logo-footer.png";

const About = () =>{
    return useMemo(
        () =>(
            <footer className=".w-100 py-5">
                <div className="container">
                    <div className="row align-items-stretch">
                        <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center h-100 ">
                            <img src={image1} className="mt-5" alt="" />
                        </div>

                        <div className="col-lg-4 d-flex flex-column col-12 justify-content-center align-items-center h-100">
                            <h2 className="mt-5 text-white">About</h2>
                            <a className="my-2 text-decoration-none">About Us</a>
                            <a className="my-2 text-decoration-none">Our Team</a>
                            <a className="my-2 text-decoration-none">Misssion Statement</a>
                        </div>

                        <div className="col-lg-4 d-flex flex-column col-12 justify-content-center align-items-center h-100">
                            <h2 className="mt-5 text-white">Contact</h2>
                            <a className="my-2 text-decoration-none">Contact Us</a>
                            <a className="my-2 text-decoration-none">Locations</a>
                            <a className="my-2 text-decoration-none">Support</a>
                        </div>
                    </div>
                </div>
            </footer>

        ),[]
    )
}


export default About