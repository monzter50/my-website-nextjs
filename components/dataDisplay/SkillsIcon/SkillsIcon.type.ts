import { Git, Python, Javascript, Django, Jest, CSS, HTMLLogo, NextJs, Mysql, ReactLogo, TailwindCss, Typescript, TestingLibrary, NodeJs } from '@components/Icons'

export enum Icon {
  Git = 'Git',
  Python = 'Python',
  Javascript = 'Javascript',
  Django = 'Django',
  Jest = 'Jest',
  CSS = 'CSS',
  HTML = 'HTML',
  NextJs = 'NextJs',
  Mysql = 'Mysql',
  React = 'React',
  TailwindCss = 'TailwindCss',
  Typescript = 'Typescript',
  TestingLibrary = 'TestingLibrary',
  NodeJs = 'NodeJs',
  ReactNative = 'ReactNative'
}
export interface ISkillsIcon{
  icon: keyof typeof Icon
  direction?: 'horizontal' | 'vertical'
  size?: number
  className?: string
}

export const MappingComponent: any = {
  Git: {
    title: 'Git',
    icon: Git
  },
  Python: {
    title: 'Python',
    icon: Python
  },
  Javascript: {
    title: 'Javascript',
    icon: Javascript
  },
  Django: {
    title: 'Django',
    icon: Django
  },
  Jest: {
    title: 'Jest',
    icon: Jest
  },
  CSS: {
    title: 'CSS',
    icon: CSS
  },
  HTML: {
    title: 'HTML',
    icon: HTMLLogo
  },
  NextJs: {
    title: 'NextJs',
    icon: NextJs
  },
  Mysql: {
    title: 'Mysql',
    icon: Mysql
  },
  React: {
    title: 'ReactJs',
    icon: ReactLogo
  },
  TailwindCss: {
    title: 'Tailwind CSS',
    icon: TailwindCss
  },
  Typescript: {
    title: 'Typescript',
    icon: Typescript
  },
  TestingLibrary: {
    title: 'Testing Library',
    icon: TestingLibrary
  },
  NodeJs: {
    title: 'Node Js',
    icon: NodeJs
  }
}
