"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SearchParamWatcher({
  onDuck,
}: {
  onDuck: () => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const fromParam = searchParams.get("from");

    if (fromParam === "duck") {
      onDuck();
    }
  }, [searchParams, onDuck]);

  return null;
}
