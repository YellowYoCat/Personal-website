import Link from "next/link";
import Image from "next/image";


export default function About() {
  return (
    <main style={{ padding: '2rem' }}>
      <Image
        src="/images/pond.png"
        alt="Custom art background"
        fill
        className="object-cover opacity-90 -z-10"
        priority
      />
      <h1>About Me</h1>
      <p>This is where you can write about yourself.</p>
      <Link href="/" className="inline-block">
        <img
          src="/images/duck.png"
          alt="Go Home"
          className="w-[500px] inline-block cursor-pointer"
        />
      </Link>

    </main>
  );
}
