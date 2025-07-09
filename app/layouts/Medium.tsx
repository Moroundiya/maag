import Image from "next/image"
import { Eye } from 'lucide-react';
export default function Medium({ title, date, category, image, author, views }: { title?: string; date?: string; category?: string; image?: string; author?: string; views?: number }) {
    return (
        <>
            <div className="w-full xl:h-[180px] 2xl:h-[200px] relative overflow-hidden rounded-md">
                <Image src={image ? image : ''} alt="" fill className="rounded-md object-cover hover:scale-105 transition-all duration-500" />
            </div>
            <h1 className="font-bold text-xl pt-2 hover:text-[#0000008d] transition-all duration-300 leading-tight">{title}</h1>
            <div className="w-full border-b border-[#00000027] my-2"></div>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3 text-[12px]">
                    <div className="bg-[#0000002b] px-2 py-0.5 rounded-sm">
                        {category}
                    </div>
                    <p>{date}</p>
                    <p>by {author}</p>
                </div>
                <div className="flex items-center justify-center space-x-0.5 text-[11.5px]">
                    <Eye className="" size={12} />
                    <p>{views}</p>
                </div>
            </div>
        </>
    )
}