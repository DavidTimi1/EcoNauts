import { BrandedName } from "../ui/logo";


export default function About(){

    return (

        <section id="about" className="py-10 w-full bg-green-light">
            <div className="w-full p-2 md:px-5 flex flex-col items-center justify-center gap-3">
                <h2 className="text-4xl">
                    About <span> Us </span>
                </h2>


				<p style={{maxWidth: "min(80%, 500px)"}}>
                    At 
                    <span style={{textShadow: "0 0 3px white"}} className="text-xl">
                        <BrandedName />
                    </span>, we combine entertainment and education to promote sustainability and forest conservation.
				   Join us in our journey to create a greener future.
                </p>

            </div>
        </section>
    )
}