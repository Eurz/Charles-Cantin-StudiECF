'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Modal from '../ui/Modal'

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
                                className="transition duration-[350ms] ease-in-out transition hover:scale-[105%]"
                            />
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default SingleGallery
