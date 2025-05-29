import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'
import { triggerBuild } from '@/hooks/triggerBuild'

export const Experience: CollectionConfig = {
  slug: 'experience',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'company',
  },
  fields: [
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'websiteUrl',
      type: 'text',
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'endDate',
          type: 'date',
        },
        {
          name: 'isCurrent',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Full-Time',
          value: 'full-time',
        },
        {
          label: 'Part-Time',
          value: 'part-time',
        },
        {
          label: 'Contract',
          value: 'contract',
        },
      ],
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'achievements',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'achievement',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'technology',
          type: 'relationship',
          // @ts-ignore
          relationTo: 'icons',
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [triggerBuild],
  },
}
