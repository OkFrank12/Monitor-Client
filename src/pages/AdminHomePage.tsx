import { Outlet } from "react-router-dom";
import Sider from "../components/Sider";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { onToggleState } from "../global/reduxStates";
import RenderNewSider from "../components/RenderNewSider";

const AdminHomePage = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const newToggle = useSelector((state: any) => state.newToggle);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(onToggleState(!toggle));
  };
  return (
    <>
      <div className="w-full flex h-screen ">
        <AiOutlineMenu
          className="phone:flex z-10 cursor-pointer phone:absolute top-0 left-0 hidden"
          size={30}
          onClick={handleToggle}
        />
        <div className="phone:hidden">
          <Sider />
        </div>
        {toggle && <RenderNewSider />}
        <div className="w-full flex justify-end">
          <div
            className={`${
              newToggle ? "w-[calc(100vw-200px)]" : "w-[calc(100vw-70px)]"
            } pl-2 phone:w-full `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
