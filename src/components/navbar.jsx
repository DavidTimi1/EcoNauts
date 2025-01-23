import Logo from "../ui/logo";
import NavList from "../ui/navList";


export default function NavBar({scrolling}){
    return (
        <div className="w_full">
            <nav className={`w-full flex-col md:flex-row p-1 md:px-3 ${scrolling? "border-b-yellow-900" : "border-transparent"}`}>
                <div className="w-full flex items-center justify-between">
                    <Logo />

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