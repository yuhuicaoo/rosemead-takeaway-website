

export default function FindUs() {
    return (
        <section id="find-us" className="min-h-[50vh] px-6 py-15 bg-(--darkblue)">
            <div className="py-12.5 w-full text-(--yellow)">
                <div className="w-full max-w-300 my-0 mx-auto px-7.5">
                    <h2 className="text-6xl font-bold mb-3">Find Us</h2>
                    <div className="flex justify-center gap-12">
                        <div className="w-1/2 flex justify-around flex-col">
                            <div className="">
                                <h3 className="text-4xl font-medium my-3">Address:</h3>
                                <a href="https://www.google.com/maps/search/?api=1&query=Rosemead+Takeaways" 
                                target="_blank" rel="noopener noreferrer" className="text-[20px] font-medium mt-3 pr-2 hover:brightness-110 transition-all duration-300 ease-in-out">
                                    2/34 Riverton Drive, Randwick Park, Auckland 2105
                                </a>
                            </div>
                            <div>
                                <h3 className="text-4xl font-medium my-3">Phone:</h3>
                                <p className="text-[20px] font-medium mt-3 pr-2">+64 09 267 2638</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-medium my-3">Note:</h3>
                                <p className="text-[20px] font-medium mt-3 pr-2">No online orders or delivery — call ahead or order in-store. We accept cash, card & EFTPOS.</p>
                            </div>
                        </div>
                        <div className="w-1/2 border-6 border-(--yellow) rounded-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.3920020208543!2d174.91213357584863!3d-37.02429867218409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d52996592656d%3A0xf36053f66639fc43!2sRosemead%20Takeaway%20(Fish%20and%20Chips)!5e0!3m2!1sen!2snz!4v1787816680793!5m2!1sen!2snz"
                                className="w-full h-100 rounded-lg"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}