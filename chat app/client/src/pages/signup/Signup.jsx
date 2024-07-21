import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [input, setInput] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:'',
  })
  
  const handleCheckBoxChange=(gender)=>{
    setInput({
   ...input,
      gender:gender
    })
  }

  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log(input)
  }
  return (
    <div className="flex flex-col min-w-96 justify-center items-center mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          SignUp
          <span className="text-blue-700"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-base label_text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Muhammad Hassan Atiq"
              className="w-full input input-bordered h-10"
              value={input.fullName}
              onChange={(e) =>setInput({...input, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label_text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Muhammad_hassan"
              className="w-full input input-bordered h-10"
              value={input.username}
              onChange={(e) =>setInput({...input, username: e.target.value})}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label_text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
              value={input.password}
              onChange={(e) =>setInput({...input, password: e.target.value})}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label_text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={input.confirmPassword}
              onChange={(e) =>setInput({...input, confirmPassword: e.target.value})}
            />
          </div>

         <GenderCheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender={input.gender} />

          <Link
            to={'/login'}
            className="text-sm hover:underline hover:text-blue-600  inline-block text-gray-700"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 h-9 ">Sign up</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Signup;



// const Signup = () => {
//     return (
//       <div className="flex flex-col min-w-96 justify-center items-center mx-auto ">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-400">
//             SignUp
//             <span className="text-blue-700"> ChatApp</span>
//           </h1>
  
//           <form>
//             <div>
//               <label className="label">
//                 <span className="text-base label_text">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Muhammad Hassan Atiq"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
  
//             <div>
//               <label className="label">
//                 <span className="text-base label_text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Muhammad_hassan"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
  
//             <div>
//               <label className="label">
//                 <span className="text-base label_text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
  
//             <div>
//               <label className="label">
//                 <span className="text-base label_text">Confirm Password</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Confirm Password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
  
//            <GenderCheckbox/>
  
//             <a
//               href="#"
//               className="text-sm hover:underline hover:text-blue-600  inline-block text-gray-700"
//             >
//               Already have an account?
//             </a>
  
//             <div>
//               <button className="btn btn-block btn-sm mt-2 h-9 ">Sign up</button>
//             </div>
  
//           </form>
//         </div>
//       </div>
//     );
//   }