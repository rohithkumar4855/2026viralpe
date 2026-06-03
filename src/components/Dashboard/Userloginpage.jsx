import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google'; // <-- We added this!
import CashBackCard from '../../../public/images/cashbacklogo.png';
import logo from "../../../public/images/logo.png"
import logobg from "/images/loginbg.svg"

export default function LoginPage() {
  const navigate = useNavigate();

  // --- 1. LIVE GOOGLE LOGIN LOGIC ---
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Fetch the user's real profile from Google using the token
        const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const userInfo = await response.json();

        // Format the real data
        const userData = {
          name: userInfo.name,
          email: userInfo.email,
          photo: userInfo.picture,
        };

        // Save to local storage and navigate
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(userData));
        window.dispatchEvent(new Event("authChange"));
        navigate("/dashboard");
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  // --- 2. SIMULATED APPLE LOGIN LOGIC (Kept as a placeholder) ---
  const handleSimulatedAppleLogin = () => {
    const userData = {
      name: `Sreenivas (Apple)`,
      email: `sreenivas.apple@example.com`,
      photo: "", 
    };

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userData", JSON.stringify(userData));
    window.dispatchEvent(new Event("authChange"));
    navigate("/dashboard");
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="flex w-full h-screen bg-white overflow-hidden relative">

        {/* Left Side */}
        <div className="relative hidden md:flex w-1/2 relative bg-[#4a0a10]">
          <div>
            <img src={logobg} alt="Background" />
            <div className="absolute top-40 left-20 rounded-xl text-center">
              <img
                src={CashBackCard}
                alt="Cashback"
                className="max-w-[500px] w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center justify-center px-6">

          {/* Close Button */}
          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              localStorage.removeItem("userData");
              window.dispatchEvent(new Event("authChange"));
              navigate('/');
            }}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 transition-colors hover:cursor-pointer"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          {/* Login Content */}
          <div className="w-full max-w-sm flex flex-col items-center">
            <div className="mb-10 flex flex-col items-center">
              <img src={logo} alt="Logo" />
            </div>

            <h2 className="text-[26px] font-bold text-[#8B1A21] mb-2 tracking-tight">
              Welcome Back !
            </h2>

            <p className="text-[13px] text-gray-500 mb-10 text-center">
              Welcome Back! select your login type
            </p>

            {/* Login Buttons */}
            <div className="w-full space-y-4">
              
              {/* GOOGLE LOGIN BUTTON */}
              <button
                onClick={() => handleGoogleLogin()} // <-- Now triggers the real popup!
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-100 rounded-xl py-[14px] shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-md hover:bg-gray-50 transition-all cursor-pointer"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-gray-800 font-medium text-[14px]">
                  Sign in with Google
                </span>
              </button>

              {/* APPLE LOGIN BUTTON */}
              <button
                onClick={() => handleSimulatedAppleLogin()}
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-100 rounded-xl py-[14px] shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-md hover:bg-gray-50 transition-all cursor-pointer"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="black">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.95.97 3.82 2.21-3.22 1.95-2.67 6.45.67 7.79-.75 1.83-1.78 3.53-3.14 4.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="text-gray-800 font-medium text-[14px]">
                  Sign in with Apple
                </span>
              </button>

            </div>

            <div className="mt-14 w-full">
              <p className="text-[10px] text-gray-500 text-center leading-relaxed">
                By continuing, you agree to ViralPe's{" "}
                <a href="#" className="text-[#8B1A21] font-bold hover:underline">Terms and Conditions</a>
                {" "}and{" "}
                <a href="#" className="text-[#8B1A21] font-bold hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}