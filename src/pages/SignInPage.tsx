import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { signInUser, verifyUser } from "../API/authAPI";
import Loader from "../statics/Loader";
import Swal from "sweetalert2";
import { onUserState } from "../global/reduxStates";
import { jwtDecode } from "jwt-decode";

const SignInPage = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginKey, setLoginKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (token) {
      verifyUser(token);
    }
  }, []);
  return (
    <>
      {loading && <Loader />}
      <div className="w-[35%] phone:bg-[rgba(0,0,0,0.7)] phone:w-full items-center laptop:w-[45%] phone:absolute tablet:w-[50%] tablet:text-[12px] tablet:px-5 flex justify-center flex-col px-20 h-full border-r-2 text-center">
        <p className="font-bold  text-[50px] phone:text-white tablet:text-[30px]">
          Worker Sale'N'<span className="text-orange-500">Earn</span>
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
        <input
          value={loginKey}
          onChange={(e: any) => {
            setLoginKey(e.target.value);
          }}
          required
          placeholder="Login Key"
          maxLength={4}
          className="w-full h-[50px] pl-2 my-3 border-b-2 outline-none"
        />

        <div
          onClick={() => {
            setLoading(true);
            signInUser({ email, password, loginKey }).then((res) => {
              if (res) {
                Swal.fire({
                  icon: "success",
                  title: "successfully signed in as an employee",
                  text: "Goodluck",
                  timer: 4000,
                  timerProgressBar: true,
                  showConfirmButton: false,
                }).then(() => {
                  navigate("/user-me");
                  const decode: any = jwtDecode(res);
                  dispatch(onUserState(decode.id));
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
          className="w-full cursor-pointer flex justify-center items-center h-[50px] bg-orange-500 my-3 font-bold text-white hover:scale-[1.01] transition-all duration-300"
        >
          Sign In
        </div>
        <Link to={`/user`} className="text-orange-500">
          Don't have an account?
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
