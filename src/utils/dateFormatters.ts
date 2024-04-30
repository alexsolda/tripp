export const dateInFull = (date: string): string => {
  const locale = 'pt-br'
  const newDate = new Date(date).toLocaleDateString(locale, {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return newDate
}
