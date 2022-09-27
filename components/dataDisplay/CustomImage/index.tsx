import Image from 'next/image'

interface CustomImageProps {
  src: string
  alt?: string
  width: string | number
  height: string | number
}
export default function CustomImage({ src, alt, width = 800, height = 600 }: CustomImageProps): JSX.Element {
  return <Image src={src} alt={alt} width={width} height={height} layout="responsive" />
}
