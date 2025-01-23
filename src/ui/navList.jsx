
const navs = [
    {text: "About Us", link: "#about"},
    {text: "Features", link: "#features"},
    {text: "Innovations", link: "#innovations"},
    {text: "Contact Us", link: "#contact-us", last: true},
]

export default function NavList(){

    return (
        <nav className="flex flex-col md:flex-row items-center gap-2">
            {
                navs.map( (nav, i) => <NavItem key={i} to={nav.link} last={nav.last}> {nav.text} </NavItem> )
            }
        </nav>
    )
}


function NavItem({children, to, last}){

    return(
        <a href={to} 
            className={`no-underline hover:text-white transition duration-250
                ${ last? "text-white p-1 px-2 rounded-2xl bg-green-light"
                :"text-gray-400 hover:shadow-white hover:drop-shadow active:text-green-light"
                }`}
        >
            {children}
        </a>
    )
}