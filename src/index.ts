import {definePlugin} from 'sanity'

import {createScopedComponent} from './Component'

interface ImageAltGenPluginConfig {
  apiKey: string
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-image-alt-gen'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [myPlugin()],
 * })
 * ```
 */
export const myPlugin = definePlugin<ImageAltGenPluginConfig | void>((config) => {
  // eslint-disable-next-line no-console
  return {
    name: 'sanity-plugin-image-alt-gen',
    schema: {
      types: [
        {
          name: 'imageAltGen',
          type: 'image',
          components: {
            input: createScopedComponent(config?.apiKey),
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'A brief description of the image for screen readers',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'A caption for the image',
            },
          ],
        },
      ],
    },
  }
})
