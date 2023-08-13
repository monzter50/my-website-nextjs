import { render, screen, waitFor } from '@test/testUtils'
import React from 'react'
import ProjectAll from '@pages/projects'

describe('Projects All', () => {
  it('should render pages all projects', async () => {
    render(
      <ProjectAll/>)
    await waitFor(() => expect(screen.queryAllByRole('button')).toHaveLength(4))
  })
  it('Should check first item project its ok', async () => {
    render(<ProjectAll/>)
    const components = screen.queryAllByRole('button')
    const images = screen.queryAllByRole('img')
    const badges = screen.queryAllByRole('status')
    expect(components[0]).toHaveTextContent(/LearnAla/i)
    expect(components[0]).toHaveAttribute('href', 'https://www.learnala.com/')
    expect(images[0]).toHaveAttribute('src', '/img/projects/learnala.png')
    expect(badges[0]).toHaveTextContent('online')
  })
  it('Should check second item project its ok', async () => {
    render(<ProjectAll/>)
    const components = screen.queryAllByRole('button')
    const images = screen.queryAllByRole('img')
    const badges = screen.queryAllByRole('status')
    expect(components[1]).toHaveTextContent(/Monster Codes/i)
    expect(components[1]).toHaveTextContent(/MonsterCodes es un portafolio personalizada para recrear lo que se ha aprendido y enseñar lo aprendido./i)

    expect(components[1]).toHaveAttribute('href', 'https://www.monstercodes.dev/en-US/')
    expect(images[1]).toHaveAttribute('src', '/img/projects/monstercodes.png')
    expect(badges[1]).toHaveTextContent('online')
  })
  it('Should check  third project its ok', async () => {
    render(<ProjectAll/>)
    const components = screen.queryAllByRole('button')
    const images = screen.queryAllByRole('img')
    const badges = screen.queryAllByRole('status')
    expect(components[2]).toHaveTextContent(/UI Accebility/i)
    expect(components[2]).toHaveTextContent(/Este proyecto es una libreria opensources donde trabajo en diseñar y crear componentes que cumpla con los estandares a11y ./i)

    expect(components[2]).toHaveAttribute('href', 'https://github.com/monzter50/UI-lib/')
    expect(images[2]).toHaveAttribute('src', '/img/projects/ui.png')
    expect(badges[2]).toHaveTextContent('online')
  })
  it('Should check fourth project its ok', async () => {
    render(<ProjectAll/>)
    const components = screen.queryAllByRole('button')
    const images = screen.queryAllByRole('img')
    const badges = screen.queryAllByRole('status')
    expect(components[3]).toHaveTextContent(/Yecorabeauty/i)
    expect(components[3]).toHaveTextContent(/Es te proyecto es un CMS desarrollado con Gatsby y Contenfull.Este sitio web nos ayuda a informar y agendar citas para los clientes de esta empresa./i)
    expect(components[3]).toHaveAttribute('href', 'https://www.yecorabeauty.com/')
    expect(images[3]).toHaveAttribute('src', '/img/projects/yecorabeauty.png')
    expect(badges[3]).toHaveTextContent('online')
  })
})
