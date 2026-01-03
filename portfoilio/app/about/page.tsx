import Link from "next/link";
import Image from "next/image";
import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-container">
      <Image
        src="/images/pond.png"
        alt="Custom art background"
        fill
        className="about-bg"
        priority
      />

      <h1 className="about-title">About Me</h1>

      <div className="text-background">
        <p className="about-text">
          Just graduated from Neumont College!
          I'm a front-end developer who enjoys building engaging UI's
          and creating exceptional user experiences.
          I'm really comfortable with modern frameworks, and animations.
          Since I have some full-stack and back-end knowledge as well,
          I can make a significant contribution across the board on a development team.
        </p>
      </div>

      <Link href="/" className="duck-link">
        <div className="cursor-hover home-cursor">
          <Image
            src="/images/duck.png"
            alt="Duck"
            width={220}
            height={220}
            className="duck"
            priority
          />
        </div>
      </Link>
    </main>
  );
}