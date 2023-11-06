import { Link } from "react-router-dom";

const OptionsPage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-orange-500 via-orange-400 to-yellow-500 flex flex-col items-center justify-center text-[30px] ">
      <p className="font-bold text-[65px] text-white phone:text-white tablet:text-[30px]">
        Sale'N'<span className="text-black">Earn</span>
      </p>
      <p className="tablet:text-[17px]">Welcome to our platform</p>
      <div className="w-full items-center flex justify-center">
        <Link to={`/admin`} className="px-10 py-2 border text-[15px] text-white mr-2 rounded">Admin</Link>
        <Link to={`/user`} className="px-10 py-2 rounded border text-white text-[15px]">Employee</Link>
      </div>
    </div>
  );
};

export default OptionsPage;
