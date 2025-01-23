

export default function Footer(){

    return (
        <>

        <div className="w-full md:w-1/2 mx-auto border border-green-light">
        </div>

        <footer className="w-full text-center my-3">
            &copy; {new Date().getFullYear()} EcoNauts. All rights reserved
        </footer>
        </>
    )
}