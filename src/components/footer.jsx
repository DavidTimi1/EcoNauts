

export default function Footer(){

    return (
        <>

        <p className="my-5">
            <div className="w-full md:w-1/2 mx-auto border border-green-light">
            </div>
        </p>

        <footer className="w-full text-center">
            &copy; {new Date().getFullYear()} EcoNauts. All rights reserved
        </footer>
        </>
    )
}