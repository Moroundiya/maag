import { ArrowRight, Eye } from "lucide-react"
import Link from "next/link"
import HeroMedium from "../layouts/HeroMedium"
import HeroSmall from "../layouts/HeroSmall"
import Image from "next/image"

export default function Sports() {
    return (
        <div className="px-3 xl:px-8 2xl:px-12 font-semibold mb-10">
            <Link href="/entertainment" className="flex items-center">
                <span>Sports</span>
                <ArrowRight size={20} />
            </Link>
            <div className="flex mt-5">
                <div className="w-2/3 flex flex-col space-y-8 h-auto border-r pr-4 border-[#00000027]">
                    <div className="w-full h-1/2 relative overflow-hidden group rounded-md">
                        <Image src='/demo-image-2.webp' alt="" fill className="rounded-md absolute top-0 left-0 object-cover group-hover:scale-105 transition-all duration-500" />
                        <div className="absolute w-full h-full top-0 left-0 bg-[#00000048] flex flex-col justify-end space-y-3">
                            <p className="text-white p-4 text-3xl font-light leading-tight xl:w-3/4">5 Quick Self-Care Tips for a Balanced Life</p>
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
                    <div className="w-full h-1/2 relative overflow-hidden group rounded-md">
                        <Image src='/demo-image-4.webp' alt="" fill className="rounded-md absolute top-0 left-0 object-cover group-hover:scale-105 transition-all duration-500" />
                        <div className="absolute w-full h-full top-0 left-0 bg-[#00000048] flex flex-col justify-end space-y-3">
                            <p className="text-white p-4 text-3xl font-light leading-tight xl:w-3/4">5 Quick Self-Care Tips for a Balanced Life</p>
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
                <div className="w-1/3 space-y-8 px-4">
                    <HeroMedium title="Exploring the Evolution of Jazz: From Classic to Contemporary" date="Jan 7, 2025" category="Events" author="Joanna Wellick" views={3} image="/demo-image-3.webp" />
                    <HeroSmall title="The Rise of Indie Music: How Independent Artists Are Changing the Industry" date="Jan 7, 2025" category="Events" image="/demo-image-5.webp" />
                    <HeroSmall title="Behind the Scenes: The Making of a Blockbuster Hit" date="Jan 7, 2025" category="Events" image="/demo-image-6.webp" />
                    <HeroSmall title="Behind the Scenes: The Making of a Blockbuster Hit" date="Jan 7, 2025" category="Events" image="/demo-image-6.webp" />
                </div>
                <div className="w-1/3 space-y-8 ps-4 border-l border-[#00000027]">
                    <HeroMedium title="Exploring the Evolution of Jazz: From Classic to Contemporary" date="Jan 7, 2025" category="Events" author="Joanna Wellick" views={3} image="/demo-image-3.webp" />
                    <HeroSmall title="The Rise of Indie Music: How Independent Artists Are Changing the Industry" date="Jan 7, 2025" category="Events" image="/demo-image-5.webp" />
                    <HeroSmall title="Behind the Scenes: The Making of a Blockbuster Hit" date="Jan 7, 2025" category="Events" image="/demo-image-6.webp" />
                    <HeroSmall title="Behind the Scenes: The Making of a Blockbuster Hit" date="Jan 7, 2025" category="Events" image="/demo-image-6.webp" />
                </div>
            </div>
        </div>
    )
}