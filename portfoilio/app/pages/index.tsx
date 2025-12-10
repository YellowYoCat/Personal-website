import Link from "next/link";
import './index.css';


export default function Home() {
  return (
    <div className="container">
      <div>
      <Link href="/about">
        <img 
        className="frog"
          src="/images/frog.png"
          alt="About Me"
          style={{ width: 350, cursor: 'pointer' }}
        />
      </Link>
      </div>
      <div className="koi">
      <Link href="/social">
       <img
          src="/images/KoiFish.png"
          alt="socials"
          style={{ width: 150, cursor: 'pointer' }}
        />
      </Link>
      </div>
      <div className="swan">
      <Link href="/project">
       <img
          src="/images/swan.png"
          alt="socials"
          style={{ width: 350, cursor: 'pointer' }}
        />
      </Link>
      </div>
    </div>
  );
}

