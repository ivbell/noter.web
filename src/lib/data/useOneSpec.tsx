import axios from 'axios'
import useSWR from 'swr'
import { Spec } from '../type/index'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export function useOneSpec(id: string | undefined) {
  const { data, error } = useSWR<Spec>(
    id ? `${import.meta.env.VITE_SERVER}/spec/one/${id}` : null,
    fetcher
  )
  return {
    oneSpec: data,
    isOneSpecLoading: !data && !error,
    isOneSpecError: error,
  }
}
