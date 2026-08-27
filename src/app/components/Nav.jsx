import "../globals.css"

export default function Nav() {
  return (
    <nav className="w-full h-35">
      <div className="flex justify-end items-center max-w-300 h-full mx-auto">
        <ul className="flex text-[28px] text-(--yellow) font-bold upp">
          <li className="mx-3">
            <a href="#menu" className="">Menu</a>
          </li>
          <li className="mx-3">
            <a href="#opening-hours" className="">Hours</a>
          </li>
          <li className="mx-3">
            <a href="#find-us" className="">Find Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}