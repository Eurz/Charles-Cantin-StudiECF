'use client'
import React, { useEffect, useState } from 'react'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import SingleGallery from './SingleGallery'
import FiltersList from '../../galeries/FiltersList'

function Galeries(props) {
    const { body, galerieslist } = props

    const [category, setCategory] = useState('')
    const [data, setData] = useState(galerieslist)
    const categories = props.galerieslist.map((item) => {
        return item.title
    })
    const onHandleSelect = (e) => {
        setCategory(e.target.value)
    }

    useEffect(() => {
        if (category !== '') {
            const newGallery = galerieslist.filter((item) => {
                return item.title === category
            })
            setData(newGallery)
            return
        }
        setData(galerieslist)

        return () => {}
    }, [category, galerieslist])

    return (
        <>
            <div data-tina-field={tinaField(props, 'body')} className="mb-10">
                <TinaMarkdown content={body} />
            </div>

            <div className="text-right mb-4">
                <FiltersList
                    categories={categories}
                    onChange={onHandleSelect}
                />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {data.map((gallery, i) => {
                    return <SingleGallery key={i} {...gallery} />
                })}
            </div>
        </>
    )
}

export default Galeries

export const galeriesTemplate = {
    label: 'Galeries',
    name: 'gallery',
    format: 'md',
    fields: [
        {
            name: 'title',
            label: 'Nom du service',
            type: 'string',
            isTitle: true,
            required: true,
        },
        {
            name: 'body',
            label: 'Texte du service',
            type: 'rich-text',
        },
        {
            name: 'galerieslist',
            label: 'Galeries',
            type: 'object',
            list: true,
            defaultItem: () => {
                return {
                    title: 'Nouvelle galerie',
                }
            },
            ui: {
                description: 'Choissisez les galeries à afficher',
                itemProps: (item) => {
                    return { label: item.title || 'none' }
                },
            },
            fields: [
                {
                    name: 'title',
                    label: 'Titre',
                    type: 'string',
                    ui: {
                        validate: (value) => {
                            if (value === '') {
                                return 'Le titre est requis'
                            }
                        },
                    },
                },
                {
                    name: 'galleryItem',
                    label: 'Galeries dispos',
                    type: 'reference',
                    collections: ['gallery'],
                },
            ],
        },
    ],
}
