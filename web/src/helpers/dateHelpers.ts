import { formatDistanceToNow } from 'date-fns'

export const formatRelativeTime = (date: string) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}
