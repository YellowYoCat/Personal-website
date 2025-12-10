import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div>
      <Link href="/about">
        <img 
          className="inline-block"
          src="/images/frog.png"
          alt="About Me"
          style={{ width: 350, cursor: 'pointer' }}
        />
      </Link>
      </div>
      <Link href="/social">
       <img
          className="inline-block"
          src="/images/KoiFish.png"
          alt="socials"
          style={{ width: 150, cursor: 'pointer' }}
        />
      </Link>
      <Link href="/project">
       <img
          className="inline-block"
          src="/images/swan.png"
          alt="socials"
          style={{ width: 350, cursor: 'pointer' }}
        />
      </Link>
    </div>
  );
}

