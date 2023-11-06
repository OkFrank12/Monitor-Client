import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSales } from "../../API/salesAPI";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loader from "../../statics/Loader";

const Sales = () => {
  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };
  const user = useSelector((state: any) => state.user);
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <div className="w-full text-slate-500 flex justify-center items-center h-screen">
        <div className="border w-[360px] font-bold p-3 h-[450px]">
          <div>
            <p>Cost:</p>
            <input
              type="text"
              value={price}
              onChange={(e: any) => {
                setPrice(e.target.value);
              }}
              required
              onInput={validateInput}
              maxLength={4}
              className="w-full border h-[35px] outline-none pl-2"
            />
          </div>
          <div>
            <p>Product:</p>
            <input
              type="text"
              value={productName}
              onChange={(e: any) => {
                setProductName(e.target.value);
              }}
              required
              maxLength={50}
              className="w-full border h-[35px] outline-none pl-2"
            />
          </div>
          <div className="flex my-3 items-center">
            <p>QTY:</p>
            <input
              type="text"
              value={quantity}
              onChange={(e: any) => {
                setQuantity(e.target.value);
              }}
              required
              onInput={validateInput}
              maxLength={2}
              className="w-[50px] border h-[35px] outline-none pl-2"
            />
          </div>
          <div>
            <p>Description:</p>
            <textarea
              value={description}
              onChange={(e: any) => {
                setDescription(e.target.value);
              }}
              required
              maxLength={150}
              className="w-full border h-[100px] resize-none outline-none pl-2"
            />
          </div>
          <div>
            <p>Payment Method</p>
            <select
              value={paymentMethod}
              onChange={(e: any) => {
                setPaymentMethod(e.target.value);
              }}
              required
              className="w-full outline-none h-[35px]"
            >
              <option value="" disabled>choose payment method</option>
              <option value="POS">POS</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
          <div
            onClick={() => {
              createSales(user, {
                productName,
                price,
                quantity,
                description,
                paymentMethod,
              }).then((res: any) => {
                if (res) {
                  Swal.fire({
                    icon: "success",
                    title: "created sales report",
                    timer: 1500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                  }).then(() => {
                    navigate("/user-me");
                    setLoading(false);
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "couln't deliver report",
                    timer: 1500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                  }).then(() => {
                    setLoading(false);
                  });
                }
              });
            }}
            className="w-full h-[50px] rounded cursor-pointer flex justify-center items-center bg-orange-500 capitalize text-white"
          >
            update sales
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default Sales;
