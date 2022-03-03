import axios from 'axios'
import useSWR from 'swr'
import { Classes } from '../type'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export function useOneClass(id: string | undefined) {
  const { data, error } = useSWR<Classes>(
    id ? `${import.meta.env.VITE_SERVER}/classes/${id}` : null,
    fetcher
  )

  return {
    oneClass: data,
    oneCLassLoading: !data && !error,
    isOneCLassError: error,
  }
}
