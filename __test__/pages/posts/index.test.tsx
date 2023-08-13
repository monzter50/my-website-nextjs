import { render, screen, waitFor } from '@test/testUtils'
import React from 'react'
import PostsAll from '@pages/posts'
//
jest.mock('next-mdx-remote/serialize', () => ({
  serialize: jest.fn(async () => await Promise.resolve([{ title: 'Hey' }]))
}))
describe('Projects All', () => {
  it('should render pages all projects', async () => {
    render(
      <PostsAll/>)

    await waitFor(() => {
    //   const components = screen.queryAllByRole('card')
    //   console.log(components)
    //   expect(components).toHaveLength(1)
    })
  })
  it('Should check all posts its ok', async () => {
    render(<PostsAll/>)
    await waitFor(() => {
    //   const component = screen.queryByRole('card')
    //   console.log(component)
    //   expect(component).toHaveTextContent(/Abriendo los ojos como dev ¿Que son los test./i)
    //   expect(component).toHaveTextContent('Cuando hablo con mis amigos desarrolladores sobre lo que son las pruebas. Siempre llegamos a las mismas conclusiones, es la forma en que verificamos la calidad de nuestros productos con diferentes métodos.')
    })
  })
})
