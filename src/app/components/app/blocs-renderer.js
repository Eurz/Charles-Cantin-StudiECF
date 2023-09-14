import Hero from '@/app/components/blocks/Hero'
import Services from '@/app/components/blocks/Services'
import Galeries from '@/app/components/blocks/Galeries'
import SimpleText from '@/app/components/blocks/SimpleText'
import { tinaField } from 'tinacms/dist/react'

export const Blocks = (props) => {
    return (
        <>
            {props.data.block
                ? props.data.block.map(function (block, i) {
                      return (
                          <div key={i} data-tina-field={tinaField(block)}>
                              <Block {...block} />
                          </div>
                      )
                  })
                : null}
        </>
    )
}

const Block = (block) => {
    switch (block.__typename) {
        case 'PageBlockHero': {
            return <Hero data={block} />
        }
        case 'PageBlockImage': {
            return <SingleImage data={block} />
        }
        case 'PageBlockMember': {
            return <Member data={block} />
        }
        case 'PageBlockService': {
            return <Services data={block} />
        }
        case 'PageBlockGallery': {
            return <Galeries data={block} />
        }
        case 'PageBlockSimpletext': {
            return <SimpleText data={block} />
        }
        default:
            return null
    }
}
