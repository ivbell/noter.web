import axios from 'axios'
import useSWR from 'swr'
import { Classes } from '../type'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export function useOneClass(id: string) {
    const { data, error } = useSWR<Classes>(
        `${import.meta.env.VITE_SERVER}/classes/${id}`,
        fetcher
    )

    return {
        oneClass: data,
        oneCLassLoading: !data && !error,
        isOneCLassError: error,
    }
}
