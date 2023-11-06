import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { signInAdmin, verifyAdmin } from "../API/authAPI";
import { onAdminState } from "../global/reduxStates";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Loader from "../statics/Loader";

const AdminSignRegPage = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (token) {
      verifyAdmin(token);
    }
  }, []);
  return (
    <>
      {loading && <Loader />}
      <form className="w-[35%] phone:bg-[rgba(0,0,0,0.7)] phone:w-full items-center laptop:w-[45%] phone:absolute tablet:w-[50%] tablet:text-[12px] tablet:px-5 flex justify-center flex-col px-20 h-full border-r-2 text-center">
        <p className="font-bold  text-[50px] phone:text-white tablet:text-[30px]">
          Admin Sale'N'<span className="text-orange-500">Earn</span>
        </p>
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

        <div
          onClick={() => {
            setLoading(true);
            signInAdmin({ email, password }).then((res) => {
              if (res) {
                Swal.fire({
                  icon: "success",
                  title: "successfully signed in as an admin",
                  text: "Goodluck",
                  timer: 4000,
                  timerProgressBar: true,
                  showConfirmButton: false,
                }).then(() => {
                  navigate("/admin-dashboard");
                  const decode: any = jwtDecode(res);
                  dispatch(onAdminState(decode.id));
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
            });
          }}
          className="w-full flex justify-center items-center cursor-pointer h-[50px] bg-orange-500 my-3 font-bold text-white hover:scale-[1.01] transition-all duration-300"
        >
          Sign In Admin
        </div>
        <Link to={`/admin`} className="text-orange-500">
          no admin account?
        </Link>
      </form>
    </>
  );
};

export default AdminSignRegPage;
