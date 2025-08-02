import { ArrowRight } from "lucide-react"
import HeroMedium from "../layouts/HeroMedium"
import HeroSmall from "../layouts/HeroSmall"
import Link from "next/link"

export default function Entertainment() {
    return (
        <div className="px-3 xl:px-8 2xl:px-12 font-semibold lg:mb-10">
            <Link href="/entertainment" className="flex items-center">
                <span>Entertainment</span>
                <ArrowRight size={20} />
            </Link>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 space-y-6 lg:space-y-0">
                <div className="space-y-8 md:border-r md:pr-4 border-[#00000027]">
                    <HeroMedium title="Exploring the Evolution of Jazz: From Classic to Contemporary" date="Jan 7, 2025" category="Events" author="Joanna Wellick" views={3} image="/demo-image-3.webp" />
                    <HeroSmall title="The Rise of Indie Music: How Independent Artists Are Changing the Industry" date="Jan 7, 2025" category="Events" image="/demo-image-5.webp" />
                    <HeroSmall title="Behind the Scenes: The Making of a Blockbuster Hit" date="Jan 7, 2025" category="Events" image="/demo-image-6.webp" />
                </div>
                <div className="space-y-8 md:pl-4 lg:px-4">
                    <HeroMedium title="Exploring the Evolution of Jazz: From Classic to Contemporary" date="Jan 7, 2025" category="Events" author="Joanna Wellick" views={3} image="/demo-image-3.webp" />
                    <HeroSmall title="The Rise of Indie Music: How Independent Artists Are Changing the Industry" date="Jan 7, 2025" category="Events" image="/demo-image-5.webp" />
                    <HeroSmall title="Behind the Scenes: The Making of a Blockbuster Hit" date="Jan 7, 2025" category="Events" image="/demo-image-6.webp" />
                </div>
                <div className="hidden lg:block space-y-8 lg:pl-4 lg:border-l border-[#00000027]">
                    <HeroMedium title="Exploring the Evolution of Jazz: From Classic to Contemporary" date="Jan 7, 2025" category="Events" author="Joanna Wellick" views={3} image="/demo-image-3.webp" />
                    <HeroSmall title="The Rise of Indie Music: How Independent Artists Are Changing the Industry" date="Jan 7, 2025" category="Events" image="/demo-image-5.webp" />
                    <HeroSmall title="Behind the Scenes: The Making of a Blockbuster Hit" date="Jan 7, 2025" category="Events" image="/demo-image-6.webp" />
                </div>
            </div>
        </div>
    )
}