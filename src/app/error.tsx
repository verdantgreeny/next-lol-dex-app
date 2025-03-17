"use client";

import ErrorComponent from "@/components/common/ErrorComponent";
import { useEffect } from "react";

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

  return <ErrorComponent error={error} reset={reset} />;
}
