import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { es } from "./es";
import type { Copy } from "./types";

export type { Copy };

const copies: Record<Locale, Copy> = { en, es };

export function getCopy(locale: Locale): Copy {
  return copies[locale];
}
