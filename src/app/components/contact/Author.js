import Image from 'next/image'
import client from '../../../../tina/__generated__/client'
import { roboto100 } from '@/app/fonts'

export default async function Author() {
    const author = await getAuthor()
    const { image, description } = author.data.author
    return (
        <>
            {
                <div className="flex flex-col items-center gap-11 justify-center h-full">
                    <div className="rounded">
                        <Image
                            src={image}
                            width={150}
                            height={150}
                            alt="Charles Cantin Photographe"
                            className="inline-block h-36 w-36 rounded-full object-fit object-cover"
                        />
                    </div>
                    <div className={roboto100.className}>{description}</div>
                </div>
            }
        </>
    )
}

export const getAuthor = async () => {
    const author = await client.queries.author({
        relativePath: 'blard-david.md',
    })

    return author
}
