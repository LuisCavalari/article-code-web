import React, { useState, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import { toast } from 'react-toastify'
import api from '../../services/api'

import { Container } from './styles';

export default function ArticleAdmin() {
    const [categories, setCategories] = useState([])
    const [newArticleName, setNewArticleName] = useState('')
    const [description, setDescription] = useState('')
    const [articleCategorie, setArticleCategorie] = useState('')

    useEffect(() => {
        async function loadCategories() {
            try {
                const response = await api.get('/categorie')
                if (response.data) {
                    setCategories(response.data)
                }
            } catch (error) {
                toast.error(error.response.data.error)
            }
        }
        loadCategories()
    }, [])

    function handleSubmit() {
        try {
            api.post('/article')
        } catch (error) {
            
        }
    }

    return (
        <Container>
            <Input
                placeholder="Insira o nome do artigo"
                label="Nome do artigo"
                value={newArticleName}
                
                onChange={event => setNewArticleName(event.target.value)
                
                }
            />
            <Input
                placeholder="Insira uma descrição"
                label="Descrição"
                value={description}
                onChange={event => setDescription(event.target.value)}
            />
            <Select 
            label="Categoria"
            value={articleCategorie}
            onChange={event => setArticleCategorie(event.target.value) }

            >
                <option value={-1} >Nenhum</option>
                {categories.map(categorie =>
                    <option key={categorie.id} value={categorie.id}>
                        {categorie.path}
                    </option>
                )}
            </Select>
            <h4>Conteudo do artigo</h4>
            <CKEditor
                editor={ClassicEditor}
                placeholder="Insira o conteudo do aritgo"
            >

            </CKEditor>
            <Button content="Salvar" color="royalblue" fill="#fff" />
            <Button content="Cancelar" color="#aaa" fill="#fff" />
        </Container>
    );
}
