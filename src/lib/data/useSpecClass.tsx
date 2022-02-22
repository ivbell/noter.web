import axios from 'axios'
import useSWR from 'swr'
import { Spec } from '../type'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export function useSpeClass(id: string | undefined) {
  const { data, error } = useSWR<Spec[]>(
    `${import.meta.env.VITE_SERVER}/spec/${id}`,
    fetcher
  )

  return {
    classSpec: data,
    isClassSpecLoading: !data && !error,
    isClassSpecError: error,
  }
}
