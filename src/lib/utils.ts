// Utils
// Набор общих утилит проекта

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// cn — объединение Tailwind-классов (аналог shadcn/ui approach)
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}
