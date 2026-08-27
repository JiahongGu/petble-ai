"use client";

import { useEffect, useState } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          poster?: string;
          alt?: string;
          "camera-controls"?: boolean;
          "auto-rotate"?: boolean;
          "shadow-intensity"?: string;
          "touch-action"?: string;
          exposure?: string;
          loading?: "auto" | "lazy" | "eager";
        },
        HTMLElement
      >;
    }
  }
}

export function ProductModel({
  src,
  alt,
  poster,
  className,
}: {
  src: string;
  alt: string;
  poster?: string;
  className?: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void import("@google/model-viewer").then(() => setReady(true));
  }, []);

  if (!ready) {
    return (
      <p className="grid h-full min-h-[240px] place-items-center text-sm text-muted">
        Loading 3D model…
      </p>
    );
  }

  return (
    <model-viewer
      src={src}
      poster={poster}
      alt={alt}
      camera-controls
      auto-rotate
      shadow-intensity="0.6"
      exposure="1.05"
      touch-action="pan-y"
      loading="eager"
      className={className}
      style={{ width: "100%", height: "100%", minHeight: 240 }}
    />
  );
}
