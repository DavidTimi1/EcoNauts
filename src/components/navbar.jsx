import Logo from "../ui/logo";
import NavList from "../ui/navList";


export default function NavBar({scrolling}){
    return (
        <div className="w_full">
            <nav className={`w-full flex-col md:flex-row px-2 py-2 md:px-5 top-0 left-0 ${scrolling? "border-b-yellow-900 fixed" : "border-transparent"}`}>
                <div className="w-full flex items-center justify-between">
                    <div className="text-2xl">
                        <Logo />
                    </div>

                    <div className="hidden md:block text-lg">
                        <NavList />
                    </div>
                </div>

                
                <div className="w-full md:hidden text-lg">
                    <NavList />
                </div>
                
            </nav>
        
        </div>
    )
}