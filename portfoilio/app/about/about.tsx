import Link from "next/link";


export default function About() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>About Me</h1>
      <p>This is where you can write about yourself.</p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
