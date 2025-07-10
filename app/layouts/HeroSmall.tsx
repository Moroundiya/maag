import Image from "next/image"

export default function HeroSmall({ title, date, category, image }: { title?: string; date?: string; category?: string, image?: string }) {
    return (
        <div className="flex space-x-3">
            <div className="w-full h-[100px] relative overflow-hidden rounded-md">
                <Image src={image ? image : ''} alt="" fill className="rounded-md object-cover hover:scale-105 transition-all duration-500" />
            </div>
            <div className="space-y-2">
                <p className="text-md leading-snug">{title}</p>
                <div className="flex items-center space-x-3 text-[12px]">
                    <div className="bg-[#0000002b] px-2 py-0.5 rounded-sm">
                        {category}
                    </div>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}