import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useSelector } from 'react-redux'
import api from '../../../services/api'
import Header from '../../../components/Header'
import Menu from '../../../components/Menu'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useDispatch } from 'react-redux'
import * as UserAction from '../../../store/Reducers/UserActions'
import { logout } from '../../../services/auth'

export default function Dashboard({ children, history }) {
    const menu = useSelector(state => state.menu)
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        async function getUser() {
            try {
                const response = await api.get('/session')
                const user = response.data.user
                if (user)
                    dispatch(UserAction.signIn(user))


            } catch (error) {
                logout()
            }
        }
        getUser()
    }, [dispatch])



   

    return (
        <Container className={!menu.visibilityMenuAside ? 'menuHidden' : ''}>
            <Header {...history} />
            <Menu />
            <main>
                <PerfectScrollbar>
                    {children}

                </PerfectScrollbar>
            </main>

        </Container>
    );
}
