export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold text-ink">Project not found</h1>
      <p className="mt-2 text-muted">This case study does not exist.</p>
      <a href="/#projects" className="btn btn-ghost mt-6">
        Back to projects
      </a>
    </main>
  );
}
