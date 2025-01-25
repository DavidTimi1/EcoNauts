
import MissionAesthetics from "../ui/mission";


const Mission = () => {
	return (
		<div id="mission" className="bg-gray-50 w-full scroll-pt-10">
			<section className="w-full py-10 px-2 md:px-5 text-center flex flex-col gap-3">

				<MissionAesthetics />

				<h2 className="text-4xl text-green-dark">
					Our <span> Mission </span>
				</h2>

				<h2 className="text-2xl md:text-4xl font-bold text-gray-800">
					Our mission is to create and provide{" "}
					<span className="text-green-dark">innovative, eco-friendly solutions</span> that
					promote recycling and green living.
				</h2>
				<p className="text-gray-600 mt-4">
					We believe in a future where style and sustainability coexist harmoniously.
				</p>



			</section>

		</div>
	);
};

export default Mission;
