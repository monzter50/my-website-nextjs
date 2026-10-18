import React from "react";

interface ITimelineContainer {
  children: React.ReactNode
}

export default function TimelineContainer({ children }: ITimelineContainer) {
  return (
    <ol className="relative m-0 list-none border-l-2 border-border p-0">
      {children}
    </ol>
  );
}
