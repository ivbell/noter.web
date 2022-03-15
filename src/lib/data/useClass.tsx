import axios from 'axios'
import useSWR from 'swr'
import { Classes } from '../type'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export function useClass() {
    const { data, error } = useSWR<Classes[]>(
        `${import.meta.env.VITE_SERVER}/classes`,
        fetcher
    )

    return {
        classes: data,
        classLoading: !data && !error,
        isClassError: error,
    }
}
