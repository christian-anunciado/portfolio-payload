import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Icons: CollectionConfig = {
  slug: 'icons',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'src',
      type: 'text',
      required: true,
    },
    {
      name: 'darkModeSrc',
      type: 'text',
    },
    {
      name: 'source',
      type: 'text',
    },
  ],
}
