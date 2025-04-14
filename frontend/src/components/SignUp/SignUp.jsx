import React, {useState} from "react";
import  {Link, useNavigate} from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from "react-icons/ai"
import { RxAvatar } from "react-icons/rx";

import { HiMail } from "react-icons/hi";

export default function SignUp() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const navigate = useNavigate();
    const passwordType = () => {
        if (visible) return "text";
        return "password";
      };
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return(<>
            {/* <h1 className='heading '>Katlegojdev Finance Planner</h1>
            className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            */
            
            }
            <section  className="section">
            <div className="bg-primary-1/25 backdrop-blur-md rounded-3xl mt-8 sm:max-h-[400px] grid sm:grid-cols-2 sm:mx-auto sm:max-w-3xl w-full shadow-lg">
                <div className="bg-secondary-2/75 rounded-t-3xl sm:rounded-l-3xl normalFlex sm:rounded-r-[6rem] rounded-b-[6rem]">
                    <div className="sm:mx-auto my-10  grid justify-items-center items-center w-full text-white">
                            <h2 className="heading">
                                Hello, Welcome!
                            </h2>
                            <p className="sub_title">Have an account already?</p>
                            <Link to="/login"  className="button2 ">Login</Link>
                    </div>
                    
                </div>
                
                <div className=" sm:max-w-lg sm:rounded-r-lg  py-8  px-6">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-1 mb-4 text-center text-2xl font-bold text-white">
                            Sign Up
                        </h2>
                    </div>
                    <form className="space-y-6 text-accent" onSubmit={handleSubmit} >
                            <div className="mt-1 relative">
                                <input type="text" placeholder="Full name" 
                                    className="input_btn"/>
                                <AiOutlineUser className="absolute right-2 top-2 text-gray-400"/>  
                            </div>
                          
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
                        {/* ================= Avater file ================== */}
                            <div className="mt-2 flex items-center">
                                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                                    {avatar ? (
                                        <img
                                        className="h-full w-full object-cover rounded-full"
                                        src={URL.createObjectURL(avatar)}
                                        alt="avatar"
                                        />
                                    ) : (
                                        <RxAvatar className="h-8 w-8 text-gray-400" />
                                    )}
                                </span>

                                    <label
                                    htmlFor="file-input"
                                    className="ml-5 cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                    <span>Upload a file</span>
                                    <input
                                        type="file"
                                        name="avatar"
                                        id="file-input"
                                        accept=".jpg,.jpeg,.png"
                                        onChange={handleFileInputChange}
                                        className="sr-only"
                                    />
                                    </label>

                            </div>

                            <button type="submit" className="btn-full group relative">
                                Sign Up
                            </button>                   
                    </form>
                </div>
            </div>
            </section>
        </> );
}