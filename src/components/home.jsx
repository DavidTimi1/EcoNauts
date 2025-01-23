import Logo, { BrandedName } from "../ui/logo";
import mainBg from "../assets/tree.png";
import Button from "../ui/button";


export default function Home(){

    return (
        <section id="home" className="m-0 w-full bg-gradient-to-b gradient scroll-pt-10">
            <div className="bg-overlay absolute w-full h-full top-0 left-0 opacity-70 bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${mainBg})`}}>
            </div>
            <div className="w-full py-10" style={{minHeight: "80vh"}}>
                <div className="w-full p-2 md:px-5 flex items-center justify-center">
                    <div className="flex flex-col gap-2 text-center">

                        <h1 style={{textShadow: "0 0 3px white"}} className="text-5xl">
                            <BrandedName />
                        </h1>

                        <p>
                            Experience the Future of Forest Conservation Through Entertainment
                        </p>

                        <Button>
                            Join Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}