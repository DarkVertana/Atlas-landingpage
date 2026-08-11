"use client";

import { useTransition } from "react";
import { deletePost } from "../actions";

export default function DeletePostButton({ id, title }: { id: string; title: string }) {
  const [pending, startTransition] = useTransition();

  const onDelete = () => {
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;
    startTransition(() => deletePost(id));
  };

  return (
    <button
      type="button"
      onClick={onDelete}
      disabled={pending}
      className="rounded-md px-2.5 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
    >
      {pending ? "Deleting…" : "Delete"}
    </button>
  );
}
