export function cn(...classes: (string | boolean | null | undefined | number)[]): string {
  return classes.filter(Boolean).join(' ')
}
