import Logo, { BrandedName } from "../ui/logo";
import mainBg from "../assets/tree.png"


export default function Home(){

    return (
        <section id="home" className="my-10 w-full" style={{backgroundImage: `url(${})`}}>
            <div className="w-full p-2 md:px-5 flex items-center justify-center">
                <div className="flex flex-col gap-2 text-center">

                    <h1 className="text-5xl">
                        <BrandedName />
                    </h1>

                    <p>
                        Experience the Future of Forest Conservation Through Entertainment
                    </p>

                    <a href="#shows" className="cta-button">
                        Explore Shows
                    </a>
                </div>
            </div>
        </section>
    )
}