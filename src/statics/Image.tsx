import anImg from "../assets/sales_image.jpg";

const Image = () => {
  return <img className="w-[65%] phone:w-full tablet:w-[50%] laptop:w-[55%] h-full object-cover" src={anImg} />;
};

export default Image;
