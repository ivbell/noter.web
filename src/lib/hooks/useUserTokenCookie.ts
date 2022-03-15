import Cookie from 'universal-cookie'

export default function useUserTokenCookie() {
    const cookie = new Cookie()
    const token = cookie.get<string>('token')
    return {
        token,
    }
}
