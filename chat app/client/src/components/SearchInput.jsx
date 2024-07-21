import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <>
        <form className="flex items-center gap-3 ">
            <input type="text" placeholder="Search" className="input input-bordered rounded-full w-full"/>
            <button type="submit" className="btn btn-circle bg-sky-600 text-white ">
            <IoSearch className="w-6 h-4 no-underline"/>
            </button>
        </form>
    </>
  )
}

export default SearchInput



// const SearchInput = () => {
//     return (
//       <>
//           <form className="flex items-center gap-2 mt-2 px-1">
//               <input type="text" placeholder="Search" className="input input-bordered rounded-full w-full"/>
//               <button type="submit" className="btn btn-circle bg-sky-600 text-white ">
//               <IoSearch className="w-6 h-4 no-underline"/>
//               </button>
//           </form>
//       </>
//     )
//   }