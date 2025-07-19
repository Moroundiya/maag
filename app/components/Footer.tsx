export default function Footer() {

    const date = new Date().getFullYear()
    return (
        <div className="w-full bg-[#f7f7e8] flex justify-between items-center px-3 xl:px-12">
            <p>MAGG - Copyright {date}</p>
        </div>
    )
}