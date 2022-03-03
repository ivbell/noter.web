type Lang = 'ru' | 'en'

export function useWowheadLink(
  type: 'spell' | 'item',
  id: number,
  lang: Lang = 'en'
) {
  const language = lang === 'en' ? 'www' : lang
  return `https://${language}.wowhead.com/${type}=${id.toString()}`
}
