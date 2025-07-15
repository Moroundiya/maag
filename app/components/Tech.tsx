import { ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeroSmall from "../layouts/HeroSmall"

export default function Tech() {
    return (
        <div className="px-3 xl:px-8 2xl:px-12 font-semibold mb-10">
            <Link href="/tech" className="flex items-center">
                <span>Tech</span>
                <ArrowRight size={20} />
            </Link>

            <div className="w-full h-[550px] mt-5 relative group overflow-hidden">
                <Image src="/section-bg.webp" alt="Image" fill className="absolute top-0 left-0 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                <div className="absolute w-full h-full top-0 left-0 bg-[#00000048] flex justify-between">
                    <div className="p-10 w-2/4 text-white">
                        <h1 className="font-bold text-3xl leading-tight">Crafting Luxurious Bathrooms Without Sacrificing Practicality</h1>
                        <div className="flex items-center mt-4">
                            <div className="flex items-center space-x-3 text-[12px]">
                                <div className="bg-[#0000002b] px-2 py-0.5 rounded-sm">
                                    Tech
                                </div>
                                <p className="text-gray-300 font-light">1 August, 2025</p>
                                <p className="text-gray-300 font-light">by Moroundiya</p>
                                <div className="flex items-center justify-center space-x-0.5 text-[11.5px]">
                                    <Eye className="" size={12} />
                                    <p>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-s border-[#dedede8d] w-2/7 flex flex-col justify-between text-white backdrop-blur-[5px]">
                        <p className="py-10 border-b border-[#dedede8d] text-xl font-semibold px-6">Popular Posts</p>
                        <div className="flex space-x-3 border-b border-[#dedede8d] pb-4 px-6">
                            <div className="w-full lg:w-2/7 h-[100px] xl:h-[80px] 2xl:h-[100px] relative overflow-hidden rounded-md">
                                <Image src='/demo-image-1.webp' alt="" fill className="rounded-md object-cover hover:scale-105 transition-all duration-500" />
                            </div>
                            <div className="w-full lg:w-2/3 space-y-2">
                                <p className="text-md leading-snug hover:text-[#dedede8d] transition-all duration-300 font-bold">Crafting Luxurious Bathrooms Without Sacrificing Practicality</p>
                                <div className="flex items-center space-x-3 text-[11.5px]">
                                    <div className="bg-[#0000002b] px-1.5 py-0.5 rounded-sm">
                                        Tech
                                    </div>
                                    <p className="text-gray-300 font-light">1 August, 2025</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-3 border-b border-[#dedede8d] pb-4 px-6">
                            <div className="w-full lg:w-2/7 h-[100px] xl:h-[80px] 2xl:h-[100px] relative overflow-hidden rounded-md">
                                <Image src='/demo-image-1.webp' alt="" fill className="rounded-md object-cover hover:scale-105 transition-all duration-500" />
                            </div>
                            <div className="w-full lg:w-2/3 space-y-2">
                                <p className="text-md leading-snug hover:text-[#dedede8d] transition-all duration-300 font-bold">Crafting Luxurious Bathrooms Without Sacrificing Practicality</p>
                                <div className="flex items-center space-x-3 text-[11.5px]">
                                    <div className="bg-[#0000002b] px-1.5 py-0.5 rounded-sm">
                                        Tech
                                    </div>
                                    <p className="text-gray-300 font-light">1 August, 2025</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-3 border-b border-[#dedede8d] pb-4 px-6">
                            <div className="w-full lg:w-2/7 h-[100px] xl:h-[80px] 2xl:h-[100px] relative overflow-hidden rounded-md">
                                <Image src='/demo-image-1.webp' alt="" fill className="rounded-md object-cover hover:scale-105 transition-all duration-500" />
                            </div>
                            <div className="w-full lg:w-2/3 space-y-2">
                                <p className="text-md leading-snug hover:text-[#dedede8d] transition-all duration-300 font-bold">Crafting Luxurious Bathrooms Without Sacrificing Practicality</p>
                                <div className="flex items-center space-x-3 text-[11.5px]">
                                    <div className="bg-[#0000002b] px-1.5 py-0.5 rounded-sm">
                                        Tech
                                    </div>
                                    <p className="text-gray-300 font-light">1 August, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}