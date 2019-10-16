export const isAuthenticated = ()=> localStorage.getItem('@article-code') !== null
export const login = token => localStorage.setItem('@article-code',token)
export const logout = ()=> localStorage.removeItem('@article-code')
export const getToken = () => localStorage.getItem('@article-code')