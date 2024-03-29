import CodeBlock from '@components/dataDisplay/CodeBlock'
import Heading from '@components/Typhografy/Heading'
import Text from '@components/Typhografy/Text'
import CustomImage from '@components/dataDisplay/CustomImage'
export const MDXComponents = {
  h1: (props: any) => <Heading as="h1" {...props} />,
  h2: (props: any) => <Heading as="h2" {...props} />,
  h3: (props: any) => <Heading as="h3" {...props} />,
  h4: (props: any) => <Heading as="h4" {...props} />,
  h5: (props: any) => <Heading as="h5" {...props} />,
  h6: (props: any) => <Heading as="h6" {...props} />,
  p: (props: any) => <Text {...props} />,
  ul: (props: any) => <ul className='text-black dark:text-white list-disc ml-5 pl-5' {...props}/>,
  CodeBlock,
  CustomImage
}
