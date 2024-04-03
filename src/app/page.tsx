import { Header } from './components/header'
import { Experience } from './components/experience'
import { Education } from './components/education'

export default function Home() {
    return (
        <main className="flex flex-col py-12 px-8 md:py-32 md:px-16 lg:px-36 lg:py-36 gap-24 md:gap-48">
            <Header />
            <div className="bg-zinc-600 py-8 px-5 md:py-12 md:px-14 lg:py-24 lg:px-28 rounded-3xl space-y-16 lg:space-y-24">
                <Experience />
                <Education />
            </div>
        </main>
    );
}
