import getSections from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/sections'
import getSettings from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/settings'
import getLayout from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/layout'
import getPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/pages'
import getBlogPosts from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/blog-posts'
import getExtraPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/extra-pages'
import getWidgets from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/widgets'

export default options => {
  options.sections = getSections(options).concat([
    {
        label: "Grid de banners MT Soluções",
        name: "banners-grid-mt",
        widget: "object",
        icon: "https://api.iconify.design/bi:grid.svg",
        fields: [
        {
            label: "Banners",
            name: "banners",
            widget: "list",
            fields: [
            {
                label: "Imagem",
                name: "img",
                widget: "image"
            },
            {
                label: "Link",
                required: false,
                name: "link",
                widget: "string"
            },
            {
                label: "Título",
                required: false,
                name: "title",
                widget: "string"
            }
            ]
        }
        ]
    },
    {
        label: "Instagram feed",
        name: "instafeed",
        widget: "object",
        icon: "https://api.iconify.design/bi:grid.svg",
        fields: [
            {
                label: "Ativar feed instagram",
                name: "active",
                widget: "boolean",
                default: true
            }
        ]
    },
    {
        label: "Newsletter",
        name: "newsletter-mt",
        widget: "object",
        icon: "https://api.iconify.design/bi:grid.svg",
        fields: [
            {
                label: "Ativar newsletter",
                name: "active",
                widget: "boolean",
                default: true
            }
        ]
    }
  ])

  return {
    backend: {
      name: 'git-gateway',
      branch: 'master',
      commit_messages: {
        create: 'Create {{collection}} “{{slug}}”',
        update: 'Update {{collection}} “{{slug}}”',
        delete: 'Delete {{collection}} “{{slug}}”',
        uploadMedia: 'Upload “{{path}}”',
        deleteMedia: '[skip ci] Delete “{{path}}”',
        openAuthoring: '{{message}}'
      }
    },
    logo_url: 'https://ecom.nyc3.digitaloceanspaces.com/storefront/cms.png',
    locale: 'pt',
    load_config_file: Boolean(window.CMS_LOAD_CONFIG_FILE),
    media_folder: `${options.baseDir}template/public/img/uploads`,
    public_folder: '/img/uploads',
    slug: {
      encoding: 'ascii',
      clean_accents: true,
      sanitize_replacement: '-'
    },
    collections: [
      getSettings(options),
      getLayout(options).files[0].fields.concat([
        {
          label: 'Menu secundário',
          name: 'secundarymenu',
          widget: 'object',
          hint: 'Itens do menu secundário',
          fields: [
            {
              label: 'Páginas',
              name: 'pages',
              widget: 'list',
              fields: [
                {
                  label: 'Titulo',
                  name: 'titulo',
                  required: true,
                  widget: 'string'
                },
                {
                  label: "Icone",
                  name: "img",
                  widget: "image"
                },
                {
                  label: "Link",
                  name: 'link',
                  required: true,
                  widget: 'string'
                }
              ]
            }
          ]
        }
      ]),
      getPages(options),
      getBlogPosts(options),
      getExtraPages(options),
      getWidgets(options)
    ]
  }
}
