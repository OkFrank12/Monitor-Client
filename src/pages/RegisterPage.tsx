import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useViewAll } from "../hooks/swrHooks";
import { registerUser } from "../API/authAPI";
import Swal from "sweetalert2";
import Loader from "../statics/Loader";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { data } = useViewAll();
  return (
    <>
      {loading && <Loader />}
      <form className="w-[35%] phone:bg-[rgba(0,0,0,0.7)] phone:w-full items-center laptop:w-[45%] phone:absolute tablet:w-[50%] tablet:text-[12px] tablet:px-5 flex justify-center flex-col px-20 h-full border-r-2 text-center">
        <p className="font-bold  text-[50px] phone:text-white tablet:text-[30px]">
          Worker Sale'N'<span className="text-orange-500">Earn</span>
        </p>
        <Link to={`/`}>Go back</Link>
        <input
          type="text"
          value={userName}
          onChange={(e: any) => {
            setUserName(e.target.value);
          }}
          required
          placeholder="User Name"
          className="w-full h-[50px] pl-2 my-3 border-b-2 outline-none"
        />
        <input
          type="email"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
          required
          placeholder="Email Address"
          className="w-full h-[50px] pl-2 my-3 border-b-2 outline-none"
        />
        <input
          type="password"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
          required
          placeholder="Type Password"
          className="w-full h-[50px] pl-2 my-3 border-b-2 outline-none"
        />
        <p className="font-bold my-2 phone:text-white">
          What company do you work for
        </p>
        <select
          value={businessName}
          onChange={(e: any) => {
            setBusinessName(e.target.value);
          }}
          className="cursor-pointer w-full h-[50px] outline-none text-slate-500"
        >
          <option>...select</option>
          {data?.map((el: any) => (
            <option key={el?._id} value={`${el?.businessName}`}>
              {el?.businessName}
            </option>
          ))}
        </select>
        <div className="flex flex-col-reverse">
          <input type="checkbox" className="cursor-pointer" />
          <p className="font-bold my-2 capitalize phone:text-white">
            terms and conditions
          </p>
        </div>
        <div
          onClick={() => {
            setLoading(true);
            registerUser({ userName, email, password, businessName }).then(
              (res) => {
                if (res) {
                  Swal.fire({
                    icon: "success",
                    title: "successfully registered as an employee",
                    text: "Goodluck",
                    timer: 4000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                  }).then(() => {
                    navigate("/user/message");
                    setLoading(false);
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "an error occured",
                    text: "Check your credentials or network connections",
                    timer: 1000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                  }).then(() => {
                    setLoading(false);
                  });
                }
              }
            );
          }}
          className="w-full flex justify-center items-center cursor-pointer h-[50px] bg-orange-500 my-3 font-bold text-white hover:scale-[1.01] transition-all duration-300"
        >
          Sign up
        </div>
        <Link to={`/user/sign-in`} className="text-orange-500">
          Already have an account?
        </Link>
      </form>
    </>
  );
};

export default RegisterPage;
