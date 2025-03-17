export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--gold)] mb-4"></div>
      <p className="text-[var(--gray-1)]">Loading...</p>
    </div>
  );
}
