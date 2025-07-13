import { ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Politics() {
    return (
        <div className="px-3 xl:px-8 2xl:px-12 font-semibold mb-10">
            <Link href="/politics" className="flex items-center">
                <span>Politics</span>
                <ArrowRight size={20} />
            </Link>

            <div className="w-full grid grid-cols-4 mt-5 gap-x-6">
                <div className="h-[390px] 2xl:h-[400px] w-full rounded-lg relative group overflow-hidden">
                    <Image src="/politics1.webp" alt="Image" fill className="absolute object-cover top-0 left-0 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                    <div className="absolute w-full h-full top-0 left-0 bg-[#00000048] flex flex-col justify-between">
                        <p className="text-white p-4 text-2xl font-light leading-tight">5 Quick Self-Care Tips for a Balanced Life</p>
                        <div className="flex items-center justify-between text-[13px] border-t border-[#dedede8d] p-4">
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#fff] text-black px-2 py-0.5 rounded-sm">
                                    Tech
                                </div>
                                <p className="text-gray-300 font-light">1 August, 2025</p>
                                <p className="text-gray-300 font-light">by Moroundiya</p>
                            </div>
                            <div className="flex items-center justify-center space-x-0.5 text-white">
                                <Eye className="" size={12} />
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[390px] 2xl:h-[400px] w-full rounded-lg relative group overflow-hidden">
                    <Image src="/politics2.webp" alt="Image" fill className="absolute top-0 left-0 object-cover group-hover:scale-105 transition-all duration-700 ease-in-out" />
                    <div className="absolute w-full h-full top-0 left-0 bg-[#00000048] flex flex-col justify-between">
                        <p className="text-white p-4 text-2xl font-light leading-tight">Tips for Keeping Your Digital Life Organized</p>
                        <div className="flex items-center justify-between text-[13px] border-t border-[#dedede8d] p-4">
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#fff] text-black px-2 py-0.5 rounded-sm">
                                    Tech
                                </div>
                                <p className="text-gray-300 font-light">1 August, 2025</p>
                                <p className="text-gray-300 font-light">by Moroundiya</p>
                            </div>
                            <div className="flex items-center justify-center space-x-0.5 text-white">
                                <Eye className="" size={12} />
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[390px] 2xl:h-[400px] w-full rounded-lg relative group overflow-hidden">
                    <Image src="/politics3.webp" alt="Image" fill className="absolute top-0 left-0 object-cover group-hover:scale-105 transition-all duration-700 ease-in-out" />
                    <div className="absolute w-full h-full top-0 left-0 bg-[#00000048] flex flex-col justify-between">
                        <p className="text-white p-4 text-2xl font-light leading-tight">How to Host Stress-Free Gatherings at Home</p>
                        <div className="flex items-center justify-between text-[13px] border-t border-[#dedede8d] p-4">
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#fff] text-black px-2 py-0.5 rounded-sm">
                                    Tech
                                </div>
                                <p className="text-gray-300 font-light">1 August, 2025</p>
                                <p className="text-gray-300 font-light">by Moroundiya</p>
                            </div>
                            <div className="flex items-center justify-center space-x-0.5 text-white">
                                <Eye className="" size={12} />
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[390px] 2xl:h-[400px] w-full rounded-lg relative group overflow-hidden">
                    <Image src="/politics4.webp" alt="Image" fill className="absolute top-0 left-0 object-cover group-hover:scale-105 transition-all duration-700 ease-in-out" />
                    <div className="absolute w-full h-full top-0 left-0 bg-[#00000048] flex flex-col justify-between">
                        <p className="text-white p-4 text-2xl font-light leading-tight">Building Confidence in Professional Settings</p>
                        <div className="flex items-center justify-between text-[13px] border-t border-[#dedede8d] p-4">
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#fff] text-black px-2 py-0.5 rounded-sm">
                                    Tech
                                </div>
                                <p className="text-gray-300 font-light">1 August, 2025</p>
                                <p className="text-gray-300 font-light">by Moroundiya</p>
                            </div>
                            <div className="flex items-center justify-center space-x-0.5 text-white">
                                <Eye className="" size={12} />
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}