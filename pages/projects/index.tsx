
import { Wrapper, Layout, CardProject } from '@components/Surfaces'
import Hero from '@components/Hero'
import Head from 'next/head'

export default function ProjectPage(): JSX.Element {
  return (
        <div >
            <Head>
                <title>Monster Codes - All Projects</title>
                <link rel="icon" href="/isotipo.ico" />

            </Head>
            <Layout>
                <Hero title={'All Projects'} href={'/projects'} slug={'projects'} />
                <Wrapper>
                    <div className='mt-4'>
                        <CardProject
                            title='LearnAla'
                            imageSrc='/img/projects/learnala.png'
                            href='https://www.learnala.com/'
                            description={`LearnAla es tu plataforma personalizada que facilita la gestión de 
                            contenido, mide los resultados y optimiza el tiempo y recursos de tu organización.`}
                            aria-level="1"
                             />
                            <CardProject
                            title='Monster Codes'
                            imageSrc='/img/projects/monstercodes.png'
                            href='https://www.monstercodes.dev/en-US/'
                            description={`MonsterCodes es un portafolio personalizada para recrear lo que se ha aprendido
                            y enseñar lo aprendido.`}
                            aria-level="2"
                             />
                            <CardProject
                            title='UI Accebility'
                            imageSrc='/img/projects/ui.png'
                            href='https://github.com/monzter50/UI-lib/'
                            description={`Este proyecto es una libreria opensources donde trabajo en diseñar y crear componentes que 
                            cumpla con los estandares a11y .`}
                            aria-level="3"
                            />
                            <CardProject
                            title='Yecorabeauty'
                            imageSrc='/img/projects/yecorabeauty.png'
                            href='https://www.yecorabeauty.com/'
                            description={'Es te proyecto es un CMS desarrollado con Gatsby y Contenfull.Este sitio web nos ayuda a informar y agendar citas para los clientes de esta empresa.'}
                            aria-level="4"
                             />
                    </div>
                </Wrapper>
            </Layout>
        </div>
  )
}
