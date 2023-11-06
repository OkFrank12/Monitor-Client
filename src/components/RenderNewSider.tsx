import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { onToggleState } from "../global/reduxStates";
import Sider from "./Sider";

const RenderNewSider = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);

  const onToggleIt = () => {
    dispatch(onToggleState(!toggle));
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(4px)",
        }}
        className="fixed w-full z-50 h-[100vh] top-0 left-0 flex"
      >
        <AiOutlineClose
          onClick={onToggleIt}
          className="absolute top-0 right-0 text-[30px] cursor-pointer"
        />
        <Sider />
      </div>
    </>
  );
};

export default RenderNewSider;
