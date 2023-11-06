import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAdmin } from "../API/authAPI";
import Swal from "sweetalert2";
import Loader from "../statics/Loader";

const AdminRegPage = () => {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {loading && <Loader />}
      <form className="w-[35%] phone:bg-[rgba(0,0,0,0.7)] phone:w-full items-center laptop:w-[45%] phone:absolute tablet:w-[50%] tablet:text-[12px] tablet:px-5 flex justify-center flex-col px-20 h-full border-r-2 text-center">
        <p className="font-bold  text-[50px] phone:text-white tablet:text-[30px]">
          Admin Sale'N'<span className="text-orange-500">Earn</span>
        </p>
        <Link to={`/`}>Go back</Link>
        <input
          type="text"
          placeholder="Admin Name"
          value={adminName}
          onChange={(e: any) => {
            setAdminName(e.target.value);
          }}
          required
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
        <input
          type="text"
          value={businessName}
          onChange={(e: any) => {
            setBusinessName(e.target.value);
          }}
          required
          placeholder="Business Name"
          className="w-full h-[50px] pl-2 my-3 border-b-2 outline-none"
        />
        <div className="flex flex-col-reverse">
          <input type="checkbox" className="cursor-pointer" />
          <p className="font-bold my-2 capitalize phone:text-white">
            terms and conditions
          </p>
        </div>
        <div
          onClick={() => {
            setLoading(true);
            registerAdmin({ adminName, email, password, businessName }).then(
              (res) => {
                if (res) {
                  Swal.fire({
                    icon: "success",
                    title: "successfully registered as an admin",
                    text: "Goodluck",
                    timer: 4000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                  }).then(() => {
                    navigate("/admin/message");
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
          className="w-full flex items-center justify-center cursor-pointer h-[50px] bg-orange-500 my-3 font-bold text-white hover:scale-[1.01] transition-all duration-300"
        >
          Sign up Admin
        </div>
        <Link to={`/admin/sign-in`} className="text-orange-500">
          have admin account?
        </Link>
      </form>
    </>
  );
};

export default AdminRegPage;
