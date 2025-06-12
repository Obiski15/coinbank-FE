import { formatISO } from "date-fns"

export function formatZuluISO(value: Date | string): string {
  return `${formatISO(value).split("T")[0]}T00:00:00.000Z`
}
