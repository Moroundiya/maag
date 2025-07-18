import Image from "next/image";
import { Eye, ArrowRight } from 'lucide-react';
import HeroMedium from "../layouts/HeroMedium";
import Link from "next/link";

export default function LatestPosts() {
    return (
        <div className="px-3 xl:px-8 2xl:px-12 font-semibold mb-10">
            <Link href="/health" className="flex items-center">
                <span>Health</span>
                <ArrowRight size={20} />
            </Link>
            <div className="w-full mt-5 grid grid-cols-4">

            </div>
        </div>

    );
}