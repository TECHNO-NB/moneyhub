'use client';
import { Loader } from "lucide-react";

export default function LoaderSpinner() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <Loader className="w-12 h-12 text-yellow-400 animate-spin" />
    </div>
  );
}
