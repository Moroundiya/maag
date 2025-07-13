import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Tech() {
    return (
        <div className="px-3 xl:px-8 2xl:px-12 font-semibold mb-10">
            <Link href="/tech" className="flex items-center">
                <span>Tech</span>
                <ArrowRight size={20} />
            </Link>
        </div>
    )
}