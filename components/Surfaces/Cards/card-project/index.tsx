import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLinkIcon } from 'lucide-react'

interface CardProjectProps {
  title: string
  imageSrc: string
  href: string
  description: string
}
export default function CardProject({ title, imageSrc, description, href, ...props }: CardProjectProps): JSX.Element {
  return (
      <Card className="group overflow-hidden hover:shadow-md transition-all duration-300 my-3">
          <Link href={href} className="block" target="_blank" rel="noopener noreferrer">
              <div className="aspect-[10/4] relative">
                  <Image src={imageSrc || '/placeholder.svg'} alt={title} fill
                         className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLinkIcon className="w-6 h-6 text-white" />
                  </div>
              </div>
              <CardHeader>
                  <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">{description}</p>
              </CardContent>
          </Link>
      </Card>
  )
}
