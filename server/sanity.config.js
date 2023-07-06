import {defineConfig} from 'sanity'
import { defineType } from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './schemas/schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'plg940s8',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas
  },
})
