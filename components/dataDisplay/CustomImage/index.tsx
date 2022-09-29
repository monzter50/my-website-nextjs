import Image from 'next/image'
import styles from './Image.module.css'
import classNames from 'classnames'
interface CustomImageProps {
  src: string
  alt?: string
  width: string | number
  height: string | number
  className?: string | string[]
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive'
}
export default function CustomImage({ src, alt, width = 800, height = 600, className = '', layout = 'responsive' }: CustomImageProps): JSX.Element {
  const classes = classNames(className, styles.image)
  return <Image className={classes} src={src} alt={alt} width={width} height={height} layout={layout} />
}
