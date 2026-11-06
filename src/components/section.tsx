"use client";

import { motion, MotionConfig } from "framer-motion";
import { ThemeText } from "@/components/theme-variants";

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  action,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="flex items-center gap-2 font-mono text-xs text-subtle">
          <ThemeText
            base={
              <>
                <span className="text-accent">{index}</span>
                <span className="h-px w-6 bg-border-strong" />
                {eyebrow}
              </>
            }
            os98={<span className="os-path">C:\Artham\{eyebrow.replace(/\s+/g, "_")}</span>}
            arcade={
              <span className="text-accent">
                STAGE {index} · {eyebrow.toUpperCase()}
              </span>
            }
            vhs={
              <span>
                <span className="text-accent">CH {index}</span> ▶▶ {eyebrow.toUpperCase()}
              </span>
            }
            groovy={
              <span>
                <span className="text-accent">✿ Track {index}</span> · {eyebrow}
              </span>
            }
          />
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 text-base leading-7 text-muted">{description}</p>}
      </div>
      {action}
    </Reveal>
  );
}
