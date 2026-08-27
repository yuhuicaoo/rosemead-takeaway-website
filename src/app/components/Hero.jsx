import "../globals.css"


export default function Hero() {
    return  (
       <header className="absolute top-1/2 left-1/2 w-full max-w-300 px-7.5 py-0 -translate-x-1/2 -translate-y-1/2">
        <div className="text-(--yellow)">
            <div className="max-w-150 h-16 mb-4 flex items-center bg-(--orange) rounded-4xl">
                <span className="kb-dot ml-6 mr-3"/>
                <span className="text-white ml-3 font-bold text-[24px] uppercase">Open Now until 8:30pm</span>
            </div>
            <h1 className="text-[120px] font-bold mb-3 leading-none">Rosemead<br/> Takeaway</h1>
            <p className="text-[32px] max-w-150 mb-7.5 font-medium text-justify">
                Your local fish & chips takeaway, serving fresh and hot food for the whole family.
            </p>
        </div>
       </header>
    );
}