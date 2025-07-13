import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Politics() {
    return (
        <div className="px-3 xl:px-8 2xl:px-12 font-semibold mb-10">
            <Link href="/politics" className="flex items-center">
                <span>Politics</span>
                <ArrowRight size={20} />
            </Link>

            <div className="w-full grid grid-cols-4 mt-5 gap-x-5">
                <div className="h-[350px] bg-red-400 w-full rounded-lg relative group overflow-hidden">
                    <Image src="/section-bg.webp" alt="Image" fill className="absolute top-0 left-0 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                    <div className="absolute w-full h-full top-0 left-0 bg-[#00000048] flex flex-col justify-between">
                        <p>5 Quick Self-Care Tips for a Balanced Life</p>
                    </div>
                </div>

                <div className="h-[350px] bg-red-400 w-full rounded-lg">
                </div>

                <div className="h-[350px] bg-red-400 w-full rounded-lg">
                </div>

                <div className="h-[350px] bg-red-400 w-full rounded-lg">
                </div>
            </div>
        </div>
    )
}