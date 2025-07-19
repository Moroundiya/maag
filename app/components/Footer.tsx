export default function Footer() {

    const date = new Date().getFullYear()
    return (
        <div className="w-full bg-[#888868] flex justify-between items-center px-3 xl:px-12 text-white p-2 font-semibold">
            <p className="text-center w-full">Copyright - MAGG {date}</p>
        </div>
    )
}