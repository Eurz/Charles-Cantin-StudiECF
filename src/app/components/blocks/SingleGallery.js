import React from 'react'
import Image from 'next/image'

function SingleGallery({ galleryItem }) {
    return (
        <>
            {galleryItem.picture?.map((picture, i) => {
                return (
                    <div key={i}>
                        <Image
                            src={picture}
                            width={600}
                            height={600}
                            alt="Texte de ma photo"
                            className="w-full h-auto "
                        />
                    </div>
                )
            })}
        </>
    )
}

export default SingleGallery
