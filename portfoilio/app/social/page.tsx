import Link from "next/link";
import Image from "next/image";


export default function About() {
  return (
    <main style={{ padding: '2rem' }}>
      <Image
        src="/images/social.png"
        alt="Custom art background"
        fill
        className="object-cover opacity-90 -z-10"
        priority
      />
      <h1>Socials</h1>
      <p>This is where you can show off your socials</p>
      <Link href="/">
        <Image
          src="/images/duck.png"
          alt="Go Home"
          width={500}
          height={500}
          style={{ cursor: "pointer" }}
        />
      </Link>
    </main>
  );
}
