import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'
import { triggerBuild } from '@/hooks/triggerBuild'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'technologies',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'technology',
          type: 'relationship',
          // @ts-ignore
          relationTo: 'icons',
        },
      ],
    },
    {
      name: 'liveUrl',
      type: 'text',
    },
    {
      name: 'githubUrl',
      type: 'text',
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [triggerBuild],
  },
}
