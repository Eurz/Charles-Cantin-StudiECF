'use client'
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
                            className="transition duration-[350ms] ease-in-out transition hover:scale-[105%]"
                        />
                    </div>
                )
            })}
        </>
    )
}

export default SingleGallery
