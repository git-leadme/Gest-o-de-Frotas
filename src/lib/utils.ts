import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(value: string) {
  const numbers = value.replace(/\D/g, '')
  if (numbers.length <= 10) {
    return numbers
      .replace(/(\d{2})(\d{0,4})(\d{0,4})/, '($1) $2-$3')
      .replace(/-$/, '')
      .trim()
  }
  return numbers
    .replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3')
    .replace(/-$/, '')
    .trim()
}
