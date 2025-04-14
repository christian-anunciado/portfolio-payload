import React from 'react'

type TechItem = {
  name: string
  href: string
  src: string
  darkSrc?: string
}

export type TechnologyBlockProps = {
  heading?: string
  technologies?: TechItem[]
}

export const TechnologyBlock: React.FC<TechnologyBlockProps> = (props) => {
  const { heading, technologies } = props

  return (
    <div className="container my-16">
      <p className="mb-6">{heading}</p>
      <div className="grid grid-cols-4 md:grid-cols-8 place-items-center gap-8">
        {technologies &&
          technologies.length > 0 &&
          technologies.map((tech: TechItem, idx: number) => (
            <a
              key={idx}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              title={tech.name}
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="h-6 w-6 object-contain transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform opacity-0 transition-opacity group-hover:opacity-100">
                <div className="whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white dark:bg-white dark:text-gray-900">
                  {tech.name}
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  )
}
