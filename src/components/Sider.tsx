import { CgToggleSquare } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { onAdminLogOut, onToggleStateNew } from "../global/reduxStates";
import { GrUserAdmin, GrUserWorker } from "react-icons/gr";
import {
  MdBusiness,
  MdOutlineCrisisAlert,
  MdMarkEmailUnread,
} from "react-icons/md";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import { useOneAdmin } from "../hooks/swrHooks";
const Sider = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state: any) => state.admin);
  const newToggle = useSelector((state: any) => state.newToggle);
  const onToggleMyStates = () => {
    dispatch(onToggleStateNew(!newToggle));
  };
  const { data } = useOneAdmin(admin);

  setTimeout(() => {
    dispatch(onAdminLogOut());
  }, 21600000);
  return (
    <>
      {newToggle ? (
        <div
          className={`w-[200px] bg-white fixed flex flex-col overflow-hidden text-[13px] font-bold items-center h-full`}
        >
          <CgToggleSquare
            onClick={onToggleMyStates}
            className="text-[40px] my-5 hover:scale-[1.05] cursor-pointer transition-all duration-500"
          />
          Admin Panel
          <div className="w-full">
            <div className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex pl-2">
              {data?.adminName}
            </div>
            <div className="mt-3 w-full pl-2 h-[40px] border items-center flex hover:bg-gray-300 transition-all duration-1000 cursor-pointer">
              {data?.email.split("@gmail.com")}
            </div>
            <div className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex pl-2">
              {data?.businessName}
            </div>

            <Link
              to={`/admin-dashboard`}
              className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex pl-2"
            >
              Sales Panel
            </Link>
            <Link
              to={`/admin-dashboard/workers`}
              className="my-2 w-full pl-2 h-[40px] border items-center flex hover:bg-gray-300 transition-all duration-1000 cursor-pointer"
            >
              Workers
            </Link>
          </div>
          <button
            onClick={() => {
              dispatch(onAdminLogOut());
            }}
            className="mt-60 hover:scale-[1.09] w-[70%] border h-[40px] hover:bg-gray-300 transition-all duration-1000 rounded-full"
          >
            Logout
          </button>
        </div>
      ) : (
        <div
          className={`w-[70px] fixed flex flex-col overflow-hidden text-[13px] font-bold items-center h-full`}
        >
          <CgToggleSquare
            onClick={onToggleMyStates}
            className="text-[40px] my-5 hover:scale-[1.05] cursor-pointer transition-all duration-500"
          />
          Admin
          <div className="w-full">
            <div className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex justify-center text-[20px]">
              <GrUserAdmin />
            </div>
            <div className="mt-3 w-full justify-center text-[20px] h-[40px] border items-center flex hover:bg-gray-300 transition-all duration-1000 cursor-pointer">
              <MdMarkEmailUnread />
            </div>
            <div className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex justify-center text-[20px]">
              <MdBusiness />
            </div>
            <Link
              to={`/admin-dashboard`}
              className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex justify-center text-[20px]"
            >
              <MdOutlineCrisisAlert />
            </Link>
            <Link
              to={`/admin-dashboard/workers`}
              className="my-2 w-full justify-center text-[20px] h-[40px] border items-center flex hover:bg-gray-300 transition-all duration-1000 cursor-pointer"
            >
              <GrUserWorker />
            </Link>
          </div>
          <button
            onClick={() => {
              dispatch(onAdminLogOut());
            }}
            className="mt-60 hover:scale-[1.09] w-[70%] border h-[40px] flex justify-center items-center text-[20px] hover:bg-gray-300 transition-all duration-1000 rounded-full"
          >
            <ImExit />
          </button>
        </div>
      )}
    </>
  );
};

export default Sider;
