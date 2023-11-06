const MessagePage = () => {
  return (
    <>
      <div className="w-[35%] phone:bg-[rgba(0,0,0,0.7)] phone:text-white phone:w-full items-center laptop:w-[45%] phone:absolute tablet:w-[50%] tablet:text-[12px] tablet:px-5 flex justify-center font-bold flex-col px-20 h-full border-r-2 text-center">
        <p className="text-[50px]">Message Page</p>
        <p className="">You have just registered on our platform as an Admin</p>
        <a href="https://mail.google.com" className="border p-3 rounded bg-orange-500 text-white mt-3">Verify with gmail</a>
      </div>
    </>
  );
};

export default MessagePage;
