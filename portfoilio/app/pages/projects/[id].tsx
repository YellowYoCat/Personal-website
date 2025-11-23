import { useRouter } from 'next/router';
import Link from 'next/link';

const projectDetails: Record<string, { title: string; description: string }> = {
  project1: {
    title: 'Project One',
    description: 'Detailed info about Project One...',
  },
  project2: {
    title: 'Project Two',
    description: 'Detailed info about Project Two...',
  },
  project3: {
    title: 'Project Three',
    description: 'Detailed info about Project Three...',
  },
};

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || Array.isArray(id)) return <p>Loading...</p>;

  const project = projectDetails[id];

  if (!project) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>Project Not Found</h1>
        <Link href="/projects">Back to Projects</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Link href="/projects">Back to Projects</Link>
    </main>
  );
}
