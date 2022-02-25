import axios from 'axios'
import useSWR from 'swr'
import {Ability} from '../type'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export function useClassAbility(id: string | undefined) {
  const {data, error} = useSWR<Ability[]>(
    `${import.meta.env.VITE_SERVER}/ability/class/${id}`,
    fetcher
  )

  return {
    abilityClass: data,
    abilityClassLoading: !data && !error,
    isAbilityClassError: error,
  }
}
