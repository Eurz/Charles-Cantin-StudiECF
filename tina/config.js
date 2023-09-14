import { simpleTextTemplate } from '../src/app/components/blocks/SimpleText'
import { galeriesTemplate } from '../src/app/components/blocks/Galeries'
import { heroBannerTemplate } from '../src/app/components/blocks/Hero'
import { memberTemplate } from '../src/app/components/blocks/Member'
import { servicesTemplate } from '../src/app/components/blocks/Services'
import { imageTemplate } from '../src/app/components/blocks/SingleImage'
import React from 'react'

import { defineConfig, wrapFieldsWithMeta } from 'tinacms'

// const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'
const branch =
    process.env.NEXT_PUBLIC_TINA_BRANCH ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD

export default defineConfig({
    branch: 'refactoring',
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
    token: process.env.TINA_TOKEN, // Get this from tina.io

    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    media: {
        tina: {
            mediaRoot: 'uploads',
            publicFolder: 'public',
        },
    },
    schema: {
        collections: [
            {
                name: 'page',
                label: 'Pages',
                path: 'content/pages',
                format: 'md',
                ui: {
                    router: ({ document, collection }) => {
                        if (document._sys.filename === 'Accueil') {
                            return '/'
                        }
                        if (document._sys.filename === 'Services') {
                            return `/services`
                        }
                        if (document._sys.filename === 'Galeries') {
                            return `/galeries`
                        }
                        if (document._sys.filename === 'Contact') {
                            return `/contact`
                        }
                        return undefined
                    },
                    defaultItem: () => {
                        return {
                            isPublished: false,
                            displayTitle: true,
                        }
                    },
                    beforeSubmit: async ({ form, cms, values }) => {
                        const checkedData = {}

                        if (values.seotitle == '') {
                            checkedData.seotitle = values.title
                        }

                        checkedData.description = values.description.trim()
                        const data = Object.assign(values, checkedData)

                        return
                        data
                    },
                    slugify: (values) => {
                        return `${values?.title}`
                            .toLowerCase()
                            .replace(/ /g, '-')
                    },
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        isTitle: true,
                        required: true,
                        placeholder: 'Entrez le titre de votre page',
                    },
                    {
                        name: 'seotitle',
                        label: 'Titre SEO ',
                        type: 'string',
                        placeholder: 'SEO title',
                    },
                    {
                        name: 'description',
                        label: 'Meta description',
                        type: 'string',
                        isBody: 'true',
                        placeholder: 'Meta description pour le SEO',
                        ui: {
                            component: 'textarea',
                        },
                    },
                    {
                        name: 'displayTitle',
                        label: 'Afficher le titre',
                        type: 'boolean',
                    },
                    { name: 'isPublished', label: 'Publier', type: 'boolean' },
                    {
                        name: 'block',
                        label: 'Blocks',
                        type: 'object',
                        list: true,
                        ui: {
                            visualSelector: true,
                        },
                        templates: [
                            heroBannerTemplate,
                            imageTemplate,
                            memberTemplate,
                            servicesTemplate,
                            galeriesTemplate,
                            simpleTextTemplate,
                        ],
                    },
                ],
            },

            {
                label: 'Services',
                name: 'service',
                path: 'content/services',
                format: 'md',
                fields: [
                    {
                        name: 'title',
                        label: 'Nom du service',
                        type: 'string',
                        isTitle: true,
                        required: true,
                        ui: {
                            validate: (value, data) => {
                                if (value?.length < 3) {
                                    return 'Le titre doit contenir au moins 3 caractères'
                                }
                            },
                        },
                    },
                    {
                        name: 'body',
                        label: 'Description',
                        type: 'rich-text',
                        isBody: true,
                    },
                    {
                        name: 'price',
                        label: 'Prix',
                        type: 'string',
                        ui: {
                            component: wrapFieldsWithMeta(
                                ({ field, input, meta }) => {
                                    return (
                                        <div className="flex items-center gap-1">
                                            <input
                                                className="shadow-inner w-24 focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md "
                                                type="text"
                                                {...input}
                                            />
                                            <span className="">€</span>
                                        </div>
                                    )
                                }
                            ),
                        },
                    },
                    {
                        name: 'devise',
                        label: 'Devise',
                        type: 'string',
                        list: false,
                        options: [
                            {
                                value: '€',
                                label: 'euro',
                            },
                            {
                                value: '$',
                                label: 'dollar',
                            },
                        ],
                    },
                    {
                        name: 'image',
                        label: 'Image',
                        type: 'image',
                        description: 'Ajoutez une photo pour ce service',
                        ui: { component: 'image' },
                    },
                ],
            },
            {
                label: 'Gallerie',
                name: 'gallery',
                path: 'content/galleries',
                format: 'md',
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        isTitle: true,
                        required: true,
                        ui: {
                            validate: (value) => {
                                if (value?.length < 1) {
                                    return 'Le titre ne peut être vide'
                                }
                            },
                        },
                    },
                    {
                        name: 'picture',
                        label: 'Photo',
                        type: 'image',
                        list: true,
                        ui: {
                            label: 'Photos',
                            description:
                                'Insérez des photos pour agrémenter cette galerie',
                        },
                    },
                ],
            },

            {
                name: 'author',
                label: 'Auteur',
                path: 'content/author',
                format: 'md',

                ui: {
                    filename: {
                        // if disabled, the editor can not edit the filename
                        readonly: true,
                        // Example of using a custom slugify function
                        slugify: (values) => {
                            // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
                            return `${values?.name}`
                                .toLowerCase()
                                .replace(/ /g, '-')
                        },
                    },
                },

                fields: [
                    {
                        name: 'name',
                        label: 'Nom',
                        isTitle: true,
                        required: true,
                        type: 'string',
                        ui: {
                            validate: (value) => {
                                if (value === '' || value === undefined) {
                                    return 'Le nom est obligatoire'
                                }

                                if (value.length < 3) {
                                    return 'Votre nom doit contenir au moins 3 caractères'
                                }
                                return
                            },
                            allowedActions: {
                                create: false,
                                delete: false,
                            },
                        },
                    },

                    {
                        name: 'image',
                        label: "Photo de l'auteur",
                        type: 'image',
                    },
                    {
                        name: 'description',
                        label: 'A propos',
                        isBody: true,
                        type: 'string',
                        ui: { component: 'textarea' },
                    },
                ],
            },
            {
                label: 'Paramètres',
                name: 'setting',
                path: 'content/settings',
                format: 'md',
                ui: { global: true },
                fields: [
                    {
                        name: 'title',
                        label: 'Titre',
                        type: 'string',
                        isTitle: true,
                        required: true,
                    },
                    {
                        name: 'header',
                        label: 'Header',
                        type: 'object',
                        fields: [
                            {
                                name: 'name',
                                label: 'Nom du site',
                                type: 'string',
                            },
                            {
                                name: 'tageLine',
                                label: 'Slogan',
                                type: 'string',
                            },
                            {
                                name: 'homePage',
                                label: "Page d'accueil",
                                type: 'reference',
                                collections: ['page'],
                            },
                        ],
                    },
                ],
            },
        ],
    },
})
