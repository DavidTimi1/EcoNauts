

export default function Button({children, unEmph}){

    return (
        <button type="button" style={{borderWidth: "2px"}} className={`transition duration-250 text-white p-1 px-2 rounded-2xl border-solid
            ${
                unEmph? "bg-transparent border-solid border-green-light hover:bg-green-light"
                : "hover:bg-green-lime bg-green-light border-transparent border-solid "
            }`}>
            {children}
        </button>
    )
}