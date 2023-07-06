import blockContent from './blockContent'

import {SchemaTypeDefinition} from "sanity";

export const schemaTypes: SchemaTypeDefinition[] = [
  {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [{
      title: 'Title',
      name: 'title',
      type: 'string'
    }, {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    }, {
      title: 'type',
      name: 'type',
      type: 'string',
      options: {
        list: ['Poster', 'Book', 'Website', 'App', 'Installation', 'Video', 'Other']
      }
    }, {
      title: 'Tagline',
      name: 'tagline',
      type: 'string'
    }, {
      title: 'Description',
      name: 'description',
      type: 'text'
    }, {
      title: 'URL',
      name: 'websiteUrl',
      type: 'url'
    }, {
      title: 'client',
      name: 'client',
      type: 'string'
    }, {
      title: 'year',
      name: 'year',
      type: 'string'
    }, {
      title: 'roles',
      name: 'roles',
      type: 'array',
      of: [{type: 'string'}]
    }, {
      title: 'Public',
      name: 'isPagePublic',
      type: 'boolean'
    }, {
      title: 'Main image',
      name: 'coverImage',
      type: 'image',
    }, {
      title: 'thumbnail',
      name: 'thumbnail',
      type: 'image',
    }, {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{type: 'image'}]
    }

    ]
  },
  blockContent,

]
