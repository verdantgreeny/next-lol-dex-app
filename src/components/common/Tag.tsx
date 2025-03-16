import React from "react";

const Tag = ({ tag }: { tag: string }) => {
  return (
    <span className="px-3 py-1 border text-sm text-[var(--gray-1)] rounded-2xl">
      {tag}
    </span>
  );
};

export default Tag;
