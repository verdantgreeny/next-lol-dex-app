"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const { refresh } = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-full  text-[var(--gray-1)] p-4">
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold text-[var(--gray-3)] mb-4">
          Something went wrong!
        </h2>
        <p className="text-[var(--gold)] mb-6">{error.message}</p>

        {/* Try again 버튼 */}
        <button
          onClick={() =>
            startTransition(() => {
              refresh();
              reset();
            })
          }
          className="bg-[var(--gray-1-5)] text-white px-6 py-2 rounded-lg font-semibold hover:cursor-pointer hover:bg-[var(--gray-1)] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
