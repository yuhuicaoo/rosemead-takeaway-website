

export default function Nav() {
    return  (
        <nav className="flex justify-end items-center w-full max-w-300 mx-auto h-25">
            <ul className="flex">
                <li className="my-0 mx-3">
                    <a href="#" className="text-xl font-bold">Menu</a>
                </li>
                <li className="my-0 mx-3">
                    <a href="#opening-hours" className="text-xl font-bold">Hours</a>
                </li>
                <li className="my-0 mx-3">
                    <a href="#" className="text-xl font-bold">Find Us</a>
                </li>
            </ul>
        </nav>        
    );
}