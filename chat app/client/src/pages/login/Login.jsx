import { Link } from "react-router-dom";
// import { useState } from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          Login
          <span className="text-blue-700"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label">
              <span className="text-base label_text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label_text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>


          <Link
            to={'/signup'}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-700"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 h-9 ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



// Starter code og Login
// const Login = () => {
//     return (
//       <div className="flex flex-col items-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-400">
//             Login
//             <span className="text-blue-700"> ChatApp</span>
//           </h1>
  
//           <form>
//             <div>
//               <label className="label">
//                 <span className="text-base label_text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Username"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
  
//             <div>
//               <label className="label">
//                 <span className="text-base label_text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
  
  
//             <a
//               href="#"
//               className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-700"
//             >
//               {"Don't"} have and account?
//             </a>
  
//             <div>
//               <button className="btn btn-block btn-sm mt-2 h-9 ">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };