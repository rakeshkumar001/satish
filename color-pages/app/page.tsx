import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <Image
        className=" py-5 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-auto"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <hr />
      <h1 className="text-xl text-center py-5">
        Pick the colour of your choice
      </h1>
      <Card />
    </main>
  );
}
