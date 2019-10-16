import React, { useEffect, useState } from 'react';
import Input from '../Input'
import Button from '../Button'
import { Container, Row } from './styles';
import { toast } from 'react-toastify'
import api from '../../services/api'


export default function UserAdmin() {
   
    return (
        <Container>
            <Row>
                <Input
                    placeholder="Insira seu nome"
                    label="Nome"
                />
                <Input
                    placeholder="Insira seu nome"
                    label="Nome"
                />
            </Row>
            <Row>
                <label htmlFor="admin">
                    <input type="checkbox" name="admin" id="" /> Admin?</label>
            </Row>

            <Row>
                <Input
                    placeholder="Insira seu nome"
                    label="Nome"
                    password
                />
                <Input
                    placeholder="Insira seu nome"
                    label="Nome"
                    password
                />
            </Row>
            <Button content="Enviar" color="royalblue" fill="#fff" />
            <Button content="Cancelar" color="#999" fill="#fff" />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
