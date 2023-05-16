export function deduplicate(arr: any[]) {
  return Array.from(new Set(arr));
}
