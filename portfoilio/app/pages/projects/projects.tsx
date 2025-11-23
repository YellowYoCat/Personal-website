import Link from "next/link";

const projects = [
  { id: 'project1', title: 'Project One' },
  { id: 'project2', title: 'Project Two' },
  { id: 'project3', title: 'Project Three' },
];

export default function Projects() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>My Projects</h1>
      <ul>
        {projects.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/projects/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
