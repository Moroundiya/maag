import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full bg-red-400 px-12 grid grid-cols-2">
            <div className="bg-blue-700 relative w-4/5">
                {/* <Image src='/demo-image-1.webp' alt="Hero_Section_Image" fill className="" /> */}
                <img src="/demo-image-1.webp" alt="" className="" />
                <h1>News</h1>
            </div>
        </div>
    );
}