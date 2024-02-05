import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiFillBell, AiFillVideoCamera } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  // kullanıcıyı arama sonuçları sayfasına yönlendir
  // url e arama parametresi olarak aratılan terimi ekle
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="flex justify-between items-center m-3 ">
      <Link className="flex items-center gap-[10px]">
        <Link className="flex gap-2" to="/">
          <img width={50} src="/youtube.png" alt="" />
          <h1 className="text-2xl hidden md:block">Youtube</h1>
        </Link>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-400 rounded-[20px]"
        action=""
      >
        <input
          placeholder="ör:komik videolar"
          className="bg-black outline-none rounded-[20px] px-3 py-1"
          type="text"
        />
        <button className="grid place-items-center border-l px-2 text-xl">
          <AiOutlineSearch></AiOutlineSearch>
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <div className="p-1 transition hover:bg-gray-700 rounded-full">
          <AiFillBell></AiFillBell>
        </div>
        <div className="p-1 transition hover:bg-gray-700 rounded-full">
          <AiFillVideoCamera></AiFillVideoCamera>
        </div>
        <i></i>
      </div>
    </header>
  );
};

export default Header;
