import userAvatar from "../../../assets/png/user-avatar.png";

function Header() {
  return (
    <nav className="flex bg-lightBlue drop-shadow-sm text-white gap-6 p-6 w-full">
      {/* avatar image/png wrapper */}
      <div className="min-w-[50px] max-w-[50px] max-h-[50px] min-h-[50px]">
        <img src={userAvatar} alt="user avatar" />
      </div>

      {/* user/Profile details */}
      <div className="sm:max-w-[221px]">
        <h1 className="font-medium text-base text-shadow">Hello Jhon</h1>
        <p className="font-roboto font-thin italic text-xl md:text-2xl text-shadow">
          What are your plans for today?
        </p>
      </div>
    </nav>
  );
}

export default Header;
