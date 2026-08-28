



export default function OpeningHours() {
    const HOURS = [
        ["Monday", "11:00am - 8:00pm"],
        ["Tuesday - Saturday", "11:00am - 8:30pm"],
        ["Sunday", "Closed"]
    ]
    return (
        <section id="opening-hours" className="min-h-[50vh] px-6 py-15 bg-(--darkblue)">
            <div className="py-12.5 w-full">
                <div className="w-full max-w-300 my-0 mx-auto px-7.5 text-(--yellow)">
                    <h2 className="text-6xl font-bold mb-3">Opening Hours</h2>
                    {HOURS.map(([day, time]) => (
                        <div key={day} className="flex justify-between border-b border-[rgb(246, 239, 226, 0.15)] py-2 text-3xl">
                            <span className="font-bold">{day}</span>
                            <span className="font-medium">{time}</span> 
                        </div>
                    ))}
                    <div className="flex justify-between border-b border-[rgb(246, 239, 226, 0.15)] py-2 text-3xl">
                       <p className="text-[30px] font-bold opacity-90 text-center">Any additional closures (public holidays, etc.) will be announced in advance.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}