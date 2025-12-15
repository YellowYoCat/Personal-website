import Link from "next/link";
import './index.css';


export default function Home() {
  return (
    <div className="container">
      <div className="container">
       <h1 className="title">PONDFOLIO</h1>

        <Link href="/about">
          <img className="frog" src="/images/frog.png" alt="About Me" />
        </Link>

        <Link href="/social">
          <img className="koi" src="/images/KoiFish.png" alt="Socials" />
        </Link>

        <Link href="/project">
          <img className="swan" src="/images/swan.png" alt="Projects" />
        </Link>
      </div>

    </div>
  );
}