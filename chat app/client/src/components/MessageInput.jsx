import { BiSolidSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <div className="px-4 my-3">
        <div className=" w-full relative">
            <input type="text" className=" text-sm border rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
            placeholder="Send Message"/>
            <button type="submit" className=" absolute inset-y-0 end-0 flex items-center pe-3">
            <BiSolidSend />
            </button>
        </div>
    </div>
  )
}

export default MessageInput