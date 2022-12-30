
// import styles from 'styles/Home.module.css'
import Wrapper from '@components/Surfaces/Wrapper'
import Layout from '@components/Surfaces/Layout'
import Hero from '@components/Hero'
import { CardProject } from '@components/index'
import Heading from '@components/Typhografy/Heading'
import useTranslation from 'next-translate/useTranslation'
import Head from "next/head";
import { sr } from 'date-fns/locale';

export async function getStaticProps({ locale }: any): Promise<any> {

    return {
      props: { projects:[] }
    }
}
  
  ProjectPage.defaultProps = {
    projects: []
  }
export default function ProjectPage({ projects }: any): JSX.Element {
    const { t } = useTranslation()
    return (
        <div >
            <Head>
                <title>Monster Codes - All Projects</title>
                <link rel="icon" href="/isotipo.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <Hero title={"All Projects"} href={`/projects`} slug={"projects"} />
                <Wrapper>
                    <div className='mt-4'>
                        <CardProject 
                            title='LearnAla'
                            src='/img/projects/learnala.png'
                            href='https://www.learnala.com/'
                            description={`LearnAla es tu plataforma personalizada que facilita la gestión de 
                            contenido, mide los resultados y optimiza el tiempo y recursos de tu organización.`} />
                            <CardProject 
                            title='Monster Codes'
                            src='/img/projects/monstercodes.png'
                            href='https://www.monstercodes.dev/en-US/'
                            description={`MonsterCodes es un portafolio personalizada para recrear lo que se ha aprendido
                            y enseñar lo aprendido.`} />
                            <CardProject 
                            title='UI Accebility'
                            src='/img/projects/github.png'
                            href='https://www.learnala.com/'
                            description={`Este proyecto es una libreria opensources donde trabajo en diseñar y crear componentes que 
                            cumpla con los estandares a11y .`} />
    
                    </div>
                </Wrapper>
            </Layout>
        </div>
    )
}