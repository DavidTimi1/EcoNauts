

export default function Innovations(){

    return (
        <section id="innovations" className="py-10 w-full bg-green-dark">
            <div className="w-full p-2 md:px-5 flex flex-col gap-3 items-center justify-center">
                <h2 className="text-4xl text-white text-center">
					The Green Challenge Series <br></br> | Our Innovations
                </h2>
				
				{
					cards.map( card => <Card title={card.title} descr={card.descr} /> )
				}


            </div>
        </section>
    )
}


function Card({title, descr}){

	return (
		<div className="card">
			<h3> {title} </h3>
			<p> {descr} </p>
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