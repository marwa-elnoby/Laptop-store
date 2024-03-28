import React, { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "./context";
import { useDispatch, useSelector } from "react-redux";
import { getInfo, logInSuccess } from "../redux/cartReducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SginIn = ({wantReg}) => {

    const { isMobile } = useContext(MyContext);

    const reg = useNavigate()


    const userName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const emailTrue = useRef(null)
    const passTrue = useRef(null)
    

    const dispatch1 = useDispatch()

    const userInfo = useSelector((state)=>state.cart.allInfo)
    

    const goToHome = (e)=>{
        e.preventDefault()
        if(userInfo.email === emailTrue.current.value && userInfo.pass === passTrue.current.value){
            reg("/");
            dispatch1(logInSuccess());
            toast.success('You have been logged in successfully', { autoClose: 2000 });
        }else if (userInfo.email === emailTrue.current.value && userInfo.pass !== passTrue.current.value){
            toast.error("Wrong Password")
        }else if (userInfo.email !== emailTrue.current.value && userInfo.pass === passTrue.current.value){
            toast.error("Wrong Email")
        }else{
            toast.error("Wrong Email and Password")
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch1(
        getInfo({
            name: userName.current.value,
            email: email.current.value,
            pass: password.current.value,
        })
        );
    
        
        reg("/signin");
        toast.success('successfully registered', { autoClose: 2000 });
        
    };

    useEffect(() => {
        if(isMobile){
            if(wantReg){
                userName.current.value = "";
                email.current.value = "";
                password.current.value = "";
            }else{
                emailTrue.current.value = "";
                passTrue.current.value = "";
            }
        }else{
            userName.current.value = "";
            email.current.value = "";
            password.current.value = "";
            emailTrue.current.value = "";
            passTrue.current.value = "";
        }
    }, [wantReg]);


// save of jsx


        const formCreate = <form class="col-12 col-lg-6 py-5" onSubmit={handleFormSubmit}>
                                <h1 class="text-center mt-5 fw-bold">Create An Account</h1>
                                <div class="d-flex justify-content-between w-50 m-auto">
                                    <a class="text-dark fs-2 border border-3 hover-icon border-dark rounded-2 px-2"><i class="fa-brands fa-google-plus-g"></i></a><a class="text-dark fs-2 border border-3 hover-icon border-dark rounded-2 px-2"><i class="fa-brands fa-facebook"></i></a><a class="text-dark fs-2 border border-3 hover-icon border-dark rounded-2 px-2"><i class="fa-brands fa-github"></i></a><a class="text-dark fs-2 border border-3 hover-icon border-dark rounded-2 px-2"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                <input type="text" placeholder="Enter Your User Name" class="form-control my-3 w-75 m-auto shadow-none fs-5 text-dark bg-sign"required ref={userName}/>
                                <input type="email" placeholder="Enter Your Email" class="form-control my-3 w-75 m-auto shadow-none fs-5 text-dark bg-sign"required ref={email} />
                                <input type="password" placeholder="Enter Your Password" class="form-control my-3 w-75 m-auto shadow-none fs-5 text-dark bg-sign"required ref={password} />
                                <input type="submit" value="Register" class="form-control my-3 w-50 m-auto shadow-none text-white border-0 fs-4 bg-dark" />
                                <p class="text-center fs-5 mobile-only">if u have account you can <Link to="/signin"  >Sign In</Link></p>
                            </form> 

        const formSign = <form onSubmit={goToHome} class="col-12 col-lg-6 py-5 form-sign">
                            <h1 class="text-center mt-5 fw-bold">Sign In</h1>
                            <div class="d-flex justify-content-between w-50 m-auto">
                                <a class="text-dark fs-2 border border-3 hover-icon border-dark rounded-2 px-2"><i class="fa-brands fa-google-plus-g"></i></a><a class="text-dark fs-2 border border-3 hover-icon border-dark rounded-2 px-2"><i class="fa-brands fa-facebook"></i></a><a class="text-dark fs-2 border border-3 hover-icon border-dark rounded-2 px-2"><i class="fa-brands fa-github"></i></a><a class="text-dark fs-2 border border-3 hover-icon border-dark rounded-2 px-2"><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                            <input ref={emailTrue} type="email" placeholder="Enter Your Email" class="form-control my-4 w-75 m-auto shadow-none fs-5 bg-sign" required/>
                            <input ref={passTrue} type="password" placeholder="Enter Your password" class="form-control my-4 w-75 m-auto shadow-none fs-5 bg-sign" required/>
                            <input type="submit" value="Sign In" class="form-control my-4 w-50 m-auto shadow-none text-white border-0 fs-4 bg-dark"/>
                            <p class="text-center fs-5">if u have not account you can <Link to="/register" >Register</Link></p>                    
                        </form>




return(
    
    <>
    <ToastContainer />

    <section className="w-100 vh-min-100 d-flex justify-content-center align-items-center">
        <div className="container">
            <div className="sign-in d-flex flex-column flex-lg-row justify-content-between align-items-center">

                <div className={`sign-in-blue ${wantReg ? "me-auto-rounded" : "ms-auto-rounded"} text-white d-flex flex-column justify-content-center align-items-center z-2`}>
                    <h1 className="my-2">
                        Welcome, to our shop
                    </h1>
                    <p className="my-2 mb-3">
                        {wantReg ? "if u have account you can" : "if u haven't account you can"}
                    </p>
                    <button className="my-2 rounded-3 fs-3" onClick={()=>{wantReg ? reg("/signin") : reg("/register")}} >
                        {wantReg ? "Sign In" : "Register"}
                    </button>
                </div>

                {isMobile ? (wantReg ? formCreate: formSign) : (<>{formSign}{formCreate}</>)}
                


            </div>
        </div>
    </section>
    </>
);
};

export default SginIn;