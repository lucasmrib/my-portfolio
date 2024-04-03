export function Education() {
    return (
        <div className="space-y-10">
            <h1 className="text-4xl text-purple-400 font-bold text-center tracking-wider">Education</h1>
            <div className="border-l-4 border-purple-400 pl-11 space-y-12">
                <div className="relative space-y-2">
                    <span className="absolute top-0 -left-14 bg-purple-400 w-5 h-5 rounded-full"></span>
                    <h2 className="text-lg font-semibold text-white tracking-wide">
                        Bachelor&apos;s Degree in Computer Science
                    </h2>
                    <h2 className="text-lg text-white">UNIP</h2>
                    <h3 className="font-semibold text-zinc-300">2016 - 2019</h3>
                </div>
                <div className="relative space-y-2">
                    <span className="absolute top-0 -left-14 bg-white w-5 h-5 rounded-full border-4 border-purple-400"></span>
                    <h2 className="text-lg font-semibold text-white tracking-wide">Technical Course in Electronics</h2>
                    <h2 className="text-lg text-white">Etec Bento Quirino</h2>
                    <h3 className="font-semibold text-zinc-300">2011 - 2012</h3>
                </div>
            </div>
        </div>
    );
}