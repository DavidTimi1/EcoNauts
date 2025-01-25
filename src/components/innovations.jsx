
import defaultImg from "../assets/tree.png";


export default function Innovations(){

    return (
        <section id="innovations" className="py-10 scroll-pt-10 w-full bg-green-dark">
            <div className="w-full p-2 md:px-5 flex flex-col gap-5 items-center justify-center">
                <h2 className="text-4xl text-white text-center">
					The Green Challenge Series <br></br> <span className="text-green-light"> | Our Innovations </span>
                </h2>
				
				<div className="flex gap-2 w-full flex-wrap items-center justify-evenly">
					{
						cards.map( (card, key) => <Card title={card.title} descr={card.descr} key={key} /> )
					}
				</div>


            </div>
        </section>
    )
}


function Card({title, descr, img}){

	return (
		<div className="card group border-2 border-t-0 border-green-light cursor-pointer rounded-lg border-solid w-11/12 max-w-sm overflow-hidden ">
			<div className="w-full bg-center bg-cover group-hover:scale-105 transition-transform duration-300" style={{aspectRatio: "3/2", backgroundImage: `url(${img ?? defaultImg})`}}>
				<div className="opacity-0 absolute">
					Image showing {title}
				</div>
			</div>
			<div className="w-full p-2 space-y-1">
				<h3 className="text-2xl"> {title} </h3>
				<p className="text-gray-300"> {descr} </p>
			</div>
		</div>
	)
}


const cards = [
	{
		title: "Forest Guardians", descr: "Teams compete in real-world challenges like reforestation and biodiversity conservation."
	},
	{
		title: "The Eco-Build Challenge", descr: "Design and build sustainable shelters using eco-friendly materials."
	},
	{
		title: "Forest Quest", descr: "A survival competition with a focus on forest preservation and sustainability."
	},
]