import { CgToggleSquare } from "react-icons/cg";
import { GrUserAdmin, GrUserWorker } from "react-icons/gr";
import {
  MdBusiness,
  MdMarkEmailUnread,
  MdOutlineCrisisAlert,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onToggleStateNew, onUserLogOut } from "../global/reduxStates";
import { ImExit } from "react-icons/im";
import { useOneUser } from "../hooks/swrHooks";

const UserSider = () => {
  const toggle = useSelector((state: any) => state.newToggle);
  const dispatch = useDispatch();
  const onHandleToggle = () => {
    dispatch(onToggleStateNew(!toggle));
  };
  const user = useSelector((state: any) => state.user);
  const { data } = useOneUser(user);
  return (
    <>
      {toggle ? (
        <div
          className={`w-[200px] fixed flex flex-col overflow-hidden text-[13px] font-bold items-center h-full`}
        >
          <CgToggleSquare
            onClick={onHandleToggle}
            className="text-[40px] my-5 hover:scale-[1.05] cursor-pointer transition-all duration-500"
          />
          User Panel
          <div className="w-full">
            <div className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex pl-2">
              {data?.userName}
            </div>
            <div className="mt-3 w-full pl-2 h-[40px] border items-center flex hover:bg-gray-300 transition-all duration-1000 cursor-pointer">
              {data?.email.split("@gmail.com")}
            </div>
            <div className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex pl-2">
              {data?.businessName}
            </div>
            <Link
              to={`/user-me`}
              className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex pl-2"
            >
              Sales Panel
            </Link>
            <Link
              to={`/user-me/sales`}
              className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex pl-2"
            >
              Manage Sales
            </Link>
          </div>
          <button
            onClick={() => {
              dispatch(onUserLogOut());
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
            onClick={onHandleToggle}
            className="text-[40px] my-5 hover:scale-[1.05] cursor-pointer transition-all duration-500"
          />
          User
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
              to={`/user-me`}
              className="mt-3 h-[40px] w-full items-center border hover:bg-gray-300 transition-all duration-1000 cursor-pointer flex justify-center text-[20px]"
            >
              <MdOutlineCrisisAlert />
            </Link>
            <Link
              to={`/user-me/sales`}
              className="my-2 w-full justify-center text-[20px] h-[40px] border items-center flex hover:bg-gray-300 transition-all duration-1000 cursor-pointer"
            >
              <GrUserWorker />
            </Link>
          </div>
          <button
            onClick={() => {
              dispatch(onUserLogOut());
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

export default UserSider;
