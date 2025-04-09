import React, {useState} from "react";
import  {Link, useNavigate} from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { RxAvatar } from "react-icons/rx";

export default function SignUp() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const navigate = useNavigate();
    const passwordType = () => {
        if (visible) return "text";
        return "password";
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
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    SignUp as a new user
                </h2>
            </div>
            <div className="bg-primary-1 mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-lg">
                <div className="bg-secondary-2  py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6 text-accent" onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-accent">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input type="text" placeholder="e.g Katlego Jim Mtimane" 
                                 className="block text-accent appearance-none w-full border border-secondary-1 rounded-md shadow-lg placeholder-gray-400 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">
                                Email address
                            </label>
                            <div>
                                <input type="email" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <div>
                                <input type={passwordType()} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="file-input">
                                <span>Upload an image</span>
                                <input type="file" />
                            </label>
                           
                        </div>
                    </form>
                </div>
            </div>


        </> );
}