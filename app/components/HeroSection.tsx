import Image from "next/image";
import { Eye } from 'lucide-react';
import Medium from "../layouts/Medium";

export default function HeroSection() {
    return (
        <div className="w-full xl:px-8 2xl:px-12 grid grid-cols-2 relative top-36 mb-20">
            <div className="border-r pr-3 border-[#00000027]">
                <div className="w-full xl:h-[350px] 2xl:h-[400px] relative overflow-hidden rounded-md">
                    <Image src="/demo-image-1.webp" alt="" fill className="rounded-md object-cover hover:scale-105 transition-all duration-500" />
                </div>
                <h1 className="font-bold text-5xl pt-4 pb-2 hover:text-[#0000008d] transition-all duration-300">How Music Tours Create Unforgettable Moments</h1>
                <p className="text-[#525252] leading-tight">In the Age of Information, news media faces both unprecedented opportunities and significant challenges.</p>
                <div className="w-full border-b border-[#00000027] my-4"></div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 text-sm">
                        <div className="bg-[#0000002b] px-2 py-0.5 rounded-sm">
                            Events
                        </div>
                        <p>Jan 7, 2025</p>
                        <p>by Joanna Wellick</p>
                    </div>
                    <div className="flex items-center justify-center space-x-0.5">
                        <Eye className="" size={18} />
                        <p>3</p>
                    </div>
                </div>
            </div>

            <div className="pl-3 grid grid-cols-2">
                <div className="space-y-6">
                    <Medium />

                </div>

            </div>

        </div>
    );
}