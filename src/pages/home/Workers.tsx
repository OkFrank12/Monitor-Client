import { useSelector } from "react-redux";
import { useViewBusiness } from "../../hooks/swrHooks";
import moment from "moment";

const Workers = () => {
  const admin = useSelector((state: any) => state.admin);
  const { data } = useViewBusiness(admin);
  const userMap = data?.user;
  return (
    <>
      <div className="font-bold mt-10 uppercase">Employees Panel</div>
      {userMap?.length === 0 ? (
        <>No Employees yet</>
      ) : (
        userMap &&
        userMap?.map((props: any) => {
          return (
            <div
              key={props?._id}
              className="w-[300px] h-auto border text-[13px] p-2 rounded shadow-md"
            >
              <p>
                Employee Name: <br /> {props?.userName}
              </p>
              <p>
                Employee Email: <br />
                {props?.email}
              </p>
              <p>
                Employee LoginKey: <br />
                {props?.loginKey}
              </p>
              <p>
                Employee Verified: <br />
                {props?.verified}
              </p>
              <p>
                Employee Sales Made: <br />
                {props?.sales.length}
              </p>
              <p>
                Created Account At: <br />
                {moment(props?.createdAt).format("LLLL")}
              </p>
            </div>
          );
        })
      )}
    </>
  );
};

export default Workers;
