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
          // @ts-ignore
          relationTo: 'icons',
          required: true,
        },
      ],
    },
  ],
}
