import { useSelector } from "react-redux";
import { useViewSales } from "../hooks/swrHooks";
import moment from "moment";

const ProductCard = () => {
  const user = useSelector((state: any) => state.user);
  const { mySales } = useViewSales(user);
  const forSales = mySales?.sales;
  console.log(mySales);
  return (
    <>
      {forSales?.length === 0 ? (
        <>There are no sales yet</>
      ) : (
        forSales?.map((el: any) => (
          <div
            key={el?._id}
            className="w-[400px] tablet:text-[12px] m-2 min-h-[220px] cursor-default text-slate-500 font-bold p-3 border rounded hover:shadow-2xl transition-all duration-1000"
          >
            <div className="w-full flex justify-between">
              <p className="uppercase">{el?.productName}</p>
              <div className="flex">
                QTY:{" "}
                <div className="w-[40px] flex justify-center items-center rounded-md text-white h-[40px] bg-red-400">
                  {el?.quantity}
                </div>
              </div>
            </div>
            <p>Description goes here: {el?.description}</p>
            <center>
              Sold For:{" "}
              <span className="text-green-500">
                ₦{parseInt(el?.price).toLocaleString()}.00
              </span>{" "}
              via{" "}
              <b className="text-[20px] text-red-500">{el?.paymentMethod}</b>
              <div>
                This product was sold by{" "}
                <span className="uppercase">{el?.userName}</span> at{" "}
                <span className="text-blue-500">
                  {moment(el?.createdAt).format("LLLL")}
                </span>
              </div>
            </center>
          </div>
        ))
      )}
    </>
  );
};

export default ProductCard;
