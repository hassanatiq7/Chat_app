import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className=" border-r flex flex-col border-slate-500 p-4">
      <SearchInput />

      <div className="divider px-2" />
      <Conversations />
      <LogoutButton/>
    </div>
  );
};

export default Sidebar;




// const Sidebar = () => {
//   return (
//     <div className=" border-r flex flex-col border-slate-500 p-4">
//       <SearchInput />

//       <div className="divider px-2" />
//       <Conversations />
//       <LogoutButton/>
//     </div>
//   );
// };