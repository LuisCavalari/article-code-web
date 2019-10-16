import React, { useEffect, useState, useMemo } from 'react';
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import api from '../../services/api'
import { toast } from 'react-toastify'

import { Container } from './styles';

export default function CategorieAdmin() {
  const [categories, setCategories] = useState([])
  const [newCategorieName, setNewCategorieName] = useState('')
  const [parentCategorie, setParentCategorie] = useState(0)
  const [categorieId, setCategorieId] = useState(null)
  const [mode, setMode] = useState('insert')
  const buttonContent = useMemo(() => {
    if (mode === 'insert')
      return 'Salvar'
    else if (mode === 'update')
      return 'Atualizar'
    else if (mode === 'delete')
      return 'Deletar'
  }, [mode])

  const buttonColor = useMemo(() => {
    if (mode == 'update' || mode == 'insert')
      return 'royalblue'
    return 'red'
  }, [mode])

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get('/categorie')

        if (response)
          setCategories(response.data)

      } catch (error) {
        toast(error.response.data)
      }
    }
    loadCategories()
  }, [])


  async function loadCategories() {
    try {
      const response = await api.get('/categorie')

      if (response)
        setCategories(response.data)

    } catch (error) {
      toast.error(error.response.data)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await api.post('/categorie', {
        id: categorieId,
        name: newCategorieName,
        parent_id: parentCategorie,
      })

      toast.success('Categoria inserida com sucesso')
      setCategories([...categories, response.data])
      loadCategories()

    } catch (error) {

      toast.error(error)
    }
  }

  function handleEdit(categorie) {
    setMode('delete')
    setNewCategorieName(categorie.name)
    setCategorieId(categorie.id)
    setParentCategorie(categorie.parent_id)

  }

  return (


    <Container>
      <form onSubmit={handleSubmit}>

        <Input
          value={newCategorieName}
          onChange={event => setNewCategorieName(event.target.value)}
          label="Nome da cateogoria"
          placeholder="Insira o nome da cateogoria"
        />
        <Select
          value={parentCategorie}
          onChange={event => setParentCategorie(event.target.value)}
          label="Categoria pai">
          <option disabled >Nehuma</option>
          {categories.map(categorie =>
            <option
              value={categorie.id}
              {...parentCategorie === categorie.id ? 'selected' : ''}
              key={categorie.id}
            >

              {categorie.path}
            </option>
          )}
        </Select>
        <Button
          type="submit"
          content={buttonContent}
          fill="#fff"
          color={buttonColor} />
        <Button
          type="button"
          content="Cancelar"
          fill="#fff"
          color="#aaa"
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Caminho</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(categorie =>
            <tr key={categorie.id}>
              <td>
                {categorie.id}
              </td>
              <td>
                {categorie.name}
              </td>
              <td>
                {categorie.path}
              </td>
              <td>
                <button onClick={() => handleEdit(categorie)} >Editar</button>
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </Container>
  );
}

