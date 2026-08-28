import "../globals.css"

export default function Nav() {
  return (
    <nav className="w-full h-35">
      <div className="flex justify-between items-center max-w-300 h-full mx-auto">
        <div>
          <span className="text-[28px] text-(--yellow) font-bold uppercase">+64 09 267 2638</span>
        </div>
        <ul className="flex text-[28px] text-(--yellow) font-bold upp">
          <li className="mx-3 hover:brightness-125 transition-all duration-300 ease-in-out">
            <a href="#menu" className="">Menu</a>
          </li>
          <li className="mx-3 hover:brightness-125 transition-all duration-300 ease-in-out">
            <a href="#opening-hours" className="">Hours</a>
          </li>
          <li className="mx-3 hover:brightness-125 transition-all duration-300 ease-in-out">
            <a href="#find-us" className="">Find Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}