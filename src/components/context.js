import React , {createContext , useEffect , useState} from "react";

export const MyContext = createContext();

export const Myprovider = ({children}) => {
    const [signIn , setSignIn] = useState(false)
    const [wantReg , setWantReg ] = useState(true)
    const [isMobil , setIsMobile] = useState(window.innerWidth < 992)

    useEffect(() => {
        const handleResize = () =>{
            setIsMobile(window.innerWidth < 992)
        };

        window.addEventListener('resize' , handleResize);

        return () =>{
            window.removeEventListener('resize' , handleResize);
        }
    } , []);

    const SendIt = {signIn , setSignIn , wantReg , setWantReg , isMobil , setIsMobile}

    return(
        <MyContext.Provider value={SendIt}>
            {children}
        </MyContext.Provider>
    )
}