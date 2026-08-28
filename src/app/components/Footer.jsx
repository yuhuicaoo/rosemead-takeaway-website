


export default function Menu() {
    return (
        <footer id="footer" className="bg-[#242424] min-h-50 px-6 py-15">
            <div className="py-12.5 w-full">
                <div className="w-full max-w-300 my-0 mx-auto px-7.5 flex flex-col items-center">
                    <h2 className="text-(--yellow) font-bold text-4xl mb-3">Rosemead Takeaway</h2>
                    <h3 className="text-(--yellow) font-bold text-[24px]">
                        <a
                            href="https://yuhuicao.xyz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:brightness-125 transition-all duration-300 ease-in-out underline align-baseline"
                        >
                            Made by Yuhui Cao
                        </a>
                    </h3>
                </div>
            </div>
        </footer>
    )
}