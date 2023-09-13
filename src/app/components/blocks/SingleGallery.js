import Image from 'next/image'
import Link from 'next/link'

function SingleGallery({ galleryItem }) {
    return (
        <>
            {galleryItem.picture?.map((picture, i) => {
                return (
                    <div key={i}>
                        <Link href={`/picture${picture}`}>
                            <Image
                                src={picture}
                                width={600}
                                height={600}
                                alt="Texte de ma photo"
                                className="transition duration-[200ms] ease-in-out hover:scale-[110%]"
                            />
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default SingleGallery
