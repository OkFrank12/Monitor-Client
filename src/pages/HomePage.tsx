import { useDispatch, useSelector } from "react-redux";
import UserSider from "../components/UserSider";
import { Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { onToggleState } from "../global/reduxStates";
import RenderSider from "../components/RenderSider";

const HomePage = () => {
  const toggle = useSelector((state: any) => state.newToggle);
  const newToggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(onToggleState(!newToggle));
  };
  return (
    <>
      <div className="w-full flex h-screen ">
        <AiOutlineMenu
          className="phone:flex cursor-pointer phone:absolute top-0 left-0 hidden"
          size={30}
          onClick={handleToggle}
        />
        <div className="phone:hidden">
          <UserSider />
        </div>
        {newToggle && <RenderSider />}
        <div className="w-full flex justify-end">
          <div
            className={`${
              toggle ? "w-[calc(100vw-200px)]" : "w-[calc(100vw-70px)]"
            } phone:w-full pl-2`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
