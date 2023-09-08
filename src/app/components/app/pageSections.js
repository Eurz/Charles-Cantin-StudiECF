'use client'
// import React from 'react'
import { tinaField, useTina } from 'tinacms/dist/react'
import Hero from '../blocks/Hero'
import SingleImage from '../blocks/SingleImage'
import Member from '../blocks/Member'
import Services from '../blocks/Services'
import Galeries from '../blocks/Galeries'
import SimpleText from '../blocks/SimpleText'
import Author from '../contact/Author'
// import Galeries from '../templates/Galeries'

function PageSections({ pageData, children }) {
    const { data } = useTina({
        query: pageData.query,
        variables: pageData.variables,
        data: pageData.data,
    })
    return (
        <>
            {/* <h1 data-tina-field={tinaField(data, 'title')}>
                {data.page.title}
            </h1> */}
            <div className="p-10 h-full">
                {data.page.block &&
                    data.page.block.map((block, i) => {
                        switch (block?.__typename) {
                            case 'PageBlockHero': {
                                return <Hero key={i} {...block} />
                            }
                            case 'PageBlockImage': {
                                return <SingleImage key={i} {...block} />
                            }
                            case 'PageBlockMember': {
                                return <Member key={i} {...block} />
                            }
                            case 'PageBlockService': {
                                return <Services key={i} {...block} />
                            }
                            case 'PageBlockGallery': {
                                return <Galeries key={i} {...block} />
                            }
                            case 'PageBlockSimpletext': {
                                return <SimpleText key={i} {...block} />
                            }

                            default: {
                                return null
                            }
                        }
                    })}
                <div>{children}</div>
            </div>
        </>
    )
}

export default PageSections
