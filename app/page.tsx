import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <Link href="/">
          <Image src="/logo-dark.webp" width={200} height={200} alt="Logo" />
        </Link>
      </nav>
    </>
  );
}
