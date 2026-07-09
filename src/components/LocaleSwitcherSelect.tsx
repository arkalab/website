"use client";

import { useParams } from "next/navigation";
import { ReactNode, useEffect, useRef, useState, useTransition } from "react";
import { useRouter, usePathname } from "../navigation";

type Option = {
  value: string;
  label: string;
};

// SVG flags served from /public — consistent across operating systems.
const FLAGS: Record<string, { src: string; alt: string }> = {
  pt: { src: "/flag_br.svg", alt: "Português" },
  en: { src: "/flag_us.svg", alt: "English" },
};

function FlagLabel({ option }: { option: Option }) {
  const flag = FLAGS[option.value];
  if (flag) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={flag.src}
        alt={flag.alt}
        className="h-3 w-5 rounded-sm object-cover"
      />
    );
  }
  return <span>{option.label}</span>;
}

type Props = {
  children?: ReactNode;
  defaultValue: string;
  label: string;
  options: Option[];
};

export default function LocaleSwitcherSelect({
  defaultValue,
  label,
  options,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected =
    options.find((option) => option.value === defaultValue) ?? options[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectLocale(nextLocale: string) {
    setOpen(false);
    if (nextLocale === defaultValue) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as "en" | "pt" });
    });
  }

  return (
    <div
      ref={containerRef}
      className="absolute right-0 top-0 mr-[10vw] mt-[10vh] z-50 font-jost"
    >
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={isPending}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg bg-[#06191f] px-4 py-2 text-sm font-light text-zinc-100 transition-colors hover:bg-[#01242c] disabled:opacity-50"
      >
        {selected && <FlagLabel option={selected} />}
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M6 8l4 4 4-4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 min-w-full overflow-hidden rounded-lg bg-[#06191f] py-1 shadow-lg"
        >
          {options.map((option) => {
            const isSelected = option.value === defaultValue;
            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => selectLocale(option.value)}
                  className={`flex w-full items-center px-4 py-2 text-left text-sm font-light transition-colors hover:bg-white/10 ${
                    isSelected ? "text-white" : "text-zinc-300"
                  }`}
                >
                  <FlagLabel option={option} />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
