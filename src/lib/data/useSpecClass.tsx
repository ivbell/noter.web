import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export function useSpecLass(id: string) {
    const { data, error } = useSWR(
        `${import.meta.env.VITE_SERVER}/spec/${id}`,
        fetcher
    )

    return {
        classSpec: data,
        isClassSpecLoading: !data && !error,
        isClassSpecError: error,
    }
}
