"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { ProjectImage } from "@/data/projects";

/** Screenshot grid with a keyboard-friendly lightbox. */
export function Gallery({ images }: { images: ProjectImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialogRef.current?.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const [first, ...rest] = images;
  const current = index === null ? null : images[index];

  return (
    <>
      {images.length === 2 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {images.map((image, i) => (
            <Thumb key={image.src} image={image} onOpen={() => open(i)} />
          ))}
        </div>
      ) : (
      <div className="grid gap-4">
        <Thumb image={first} onOpen={() => open(0)} large />
        {rest.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((image, i) => (
              <Thumb key={image.src} image={image} onOpen={() => open(i + 1)} />
            ))}
          </div>
        )}
      </div>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-auto max-h-[92vh] outline-none focus-visible:outline-none w-[min(1200px,94vw)] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
        aria-label="Screenshot viewer"
      >
        {current && (
          <figure className="relative">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="94vw"
              className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-white/80">
              <span>{current.caption}</span>
              <span className="shrink-0 font-mono text-xs text-white/50">
                {index! + 1} / {images.length}
              </span>
            </figcaption>
            {images.length > 1 && (
              <>
                <button type="button" onClick={() => step(-1)} aria-label="Previous screenshot" className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80">
                  <ChevronLeft size={20} />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next screenshot" className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80">
                  <ChevronRight size={20} />
                </button>
              </>
            )}
            <button type="button" onClick={close} aria-label="Close" className="absolute -top-3 right-0 grid h-9 w-9 -translate-y-full place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X size={18} />
            </button>
          </figure>
        )}
      </dialog>
    </>
  );
}

function Thumb({ image, onOpen, large = false }: { image: ProjectImage; onOpen: () => void; large?: boolean }) {
  return (
    <figure>
      <button
        type="button"
        onClick={onOpen}
        className="group relative block w-full overflow-hidden rounded-xl border border-border bg-surface-2 text-left transition hover:border-border-strong"
        aria-label={`Enlarge: ${image.caption}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={large ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 640px) 380px, 100vw"}
          className={`w-full transition duration-500 group-hover:scale-[1.015] ${large ? "h-auto" : "aspect-[16/10] object-cover object-top"}`}
        />
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white opacity-0 transition group-hover:opacity-100">
          <Maximize2 size={14} />
        </span>
      </button>
      <figcaption className="mt-2 text-sm text-subtle">{image.caption}</figcaption>
    </figure>
  );
}
