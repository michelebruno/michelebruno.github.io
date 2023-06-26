import blockContent from './blockContent'

import {defineField, defineType} from "sanity";

export const schemaTypes = [
  defineType({
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
      defineField({
        title: 'Title',
        name: 'title',
        type: 'string'
      }),
      defineField({
        title: 'Slug',
        name: 'slug',
        type: 'slug',
      }),
      defineField({
        title: 'type',
        name: 'type',
        type: 'string',
        options: {
          list: ['Poster', 'Book', 'Website', 'App', 'Installation', 'Video', 'Other']
        }
      }),
      defineField({
        title: 'Tagline',
        name: 'tagline',
        type: 'string'
      }),
      defineField({
        title: 'Description',
        name: 'description',
        type: 'text'
      }),
      defineField({
        title: 'URL',
        name: 'websiteUrl',
        type: 'url'
      }),
      defineField({
        title: 'client',
        name: 'client',
        type: 'string'
      }),
      defineField({
        title: 'year',
        name: 'year',
        type: 'string'
      }),
      defineField({
        title: 'roles',
        name: 'roles',
        type: 'array',
        of: [{type: 'string'}]
      }),
      defineField({
        title: 'Public',
        name: 'isPagePublic',
        type: 'boolean'
      }),
      defineField({
        title: 'Main image',
        name: 'coverImage',
        type: 'image',
      }),
      defineField({
        title: 'thumbnail',
        name: 'thumbnail',
        type: 'image',
      }),

    ]
  }),
  blockContent
]
