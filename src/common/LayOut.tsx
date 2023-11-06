import { Outlet } from "react-router-dom";
import Image from "../statics/Image";

const LayOut = () => {
  return (
    <>
      <div className="flex flex-row-reverse h-screen">
        <Image />
        <Outlet />
      </div>
    </>
  );
};

export default LayOut;
