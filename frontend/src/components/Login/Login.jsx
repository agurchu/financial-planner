import React, { useState} from "react";
import  {Link, useNavigate} from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from "react-icons/ai"

import { HiMail } from "react-icons/hi";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const navigate = useNavigate();
   
    const passwordType = () => {
        if (visible) return "text";
        return "password";
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return(<>
            <section  className="section">
            <div className="bg-primary-1/25 backdrop-blur-md rounded-3xl mt-8 sm:max-h-[400px] grid sm:grid-cols-2 sm:mx-auto sm:max-w-3xl w-full shadow-lg">
                <div className="bg-secondary-2/75 rounded-t-3xl sm:rounded-l-3xl normalFlex sm:rounded-r-[6rem] rounded-b-[6rem]">
                    <div className="sm:mx-auto my-10  grid justify-items-center items-center w-full text-white">
                            <h2 className="heading">
                                Hello, Welcome!
                            </h2>
                            <p className="sub_title">Don't have an account?</p>
                            <Link to="/signup"  className="button2 ">Register</Link>
                    </div>
                    
                </div>
                
                <div className=" sm:max-w-lg sm:rounded-r-lg  py-8  px-6">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-1 mb-4 text-center text-2xl font-bold text-white">
                            Login
                        </h2>
                    </div>
                    <form className="space-y-6 text-accent" onSubmit={handleSubmit} >                          
                            <div className="mt-1 relative">
                                <input type="email" placeholder="Email address"
                                className="input_btn" />
                                <HiMail className="absolute right-2 top-2 text-gray-400"/>
                            </div>
                        
                        <div>
                           
                            <div className="mt-1 relative"> 
                                <input type={passwordType()}  placeholder="Password"
                                className="input_btn"/>

                                {visible ? (
                            <AiOutlineEye
                                className="absolute right-2 top-2 cursor-pointer text-gray-400"
                                size={22}
                                onClick={() => setVisible(false)}
                            />
                            ) : (
                            <AiOutlineEyeInvisible
                                className="absolute right-2 top-2 cursor-pointer text-gray-400"
                                size={22}
                                onClick={() => setVisible(true)}
                            />
                            )}
                            </div>
                        </div>

                            <button type="submit" className="btn-full group relative">
                                Login
                            </button>                   
                    </form>
                </div>
            </div>
            </section>
        </> );
}