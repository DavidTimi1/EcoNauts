
import mainBg from "../assets/tree.png"


export default function MissionAesthetics(){

    return (
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative h-40 md:h-48 lg:h-56">
                <img
                    src={mainBg}
                    alt="Forest"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56">
                <img
                    src={mainBg}
                    alt="Solar Panels"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56">
                <img
                    src={mainBg}
                    alt="Stairs with Greenery"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56">
                <img
                    src={mainBg}
                    alt="Wind Turbines"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
    )
}