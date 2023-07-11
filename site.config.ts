import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd20a751e8cd148c78d76f53d39d52bb3',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'AJ',
  domain: 'ajdemarinis.com',
  author: 'AJ DeMarinis',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)

  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths

  pageUrlOverrides: {
  '/about' : '66a27067d323416fb7d1b0e16f8b9b80',
  '/projects' : '7cd1063b6008406984d99dfd84640768',
  '/contact' : '7842db5fba8d4600ac2b36f90bb23c64',
  '/home' : 'd20a751e8cd148c78d76f53d39d52bb3'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: 'd20a751e8cd148c78d76f53d39d52bb3'
      },
    {
      title: 'About',
      pageId: '66a27067d323416fb7d1b0e16f8b9b80'
      },
    {
      title: 'Projects',
      pageId: '7cd1063b6008406984d99dfd84640768'
      },
    {
      title: 'Contact',
      pageId: '7842db5fba8d4600ac2b36f90bb23c64'
      }
  ]
})
