import type { Block } from 'payload'

export const Technology: Block = {
  slug: 'technology',
  interfaceName: 'TechnologyBlock',
  fields: [
    {
      name: 'technologies',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'default',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'darkMode',
          type: 'relationship',
          relationTo: 'media',
        },
      ],
    },
  ],
}
