import { BallTriangle } from "react-loader-spinner";
const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "rgba( 255, 255, 255, 0.15 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        //   border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
      className="fixed w-full z-50 h-[100vh] top-0 left-0 flex items-center justify-center flex-col"
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="orange"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
      <div className="mt-8">
        Processing Request...If it takes longer time...😖😖😖Check connection
      </div>
    </div>
  );
};

export default Loader;
