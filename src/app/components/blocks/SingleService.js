import Image from 'next/image'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default function SingleService({ service }) {
    return (
        <div
            className="flex flex-col border border-gray-300 "
            data-tina-field={tinaField(service, 'service')}
        >
            <h2 className="bg-main-blue text-white text-center p-4">
                « {service.title} »
            </h2>
            <div className="">
                <Image
                    src={service.image}
                    width={400}
                    height={267}
                    alt={service.title}
                    className="w-full"
                />
            </div>
            <div className="flex flex-col gap-4 p-5 pb-11 items-center bg-white grow">
                <div className="font-bold">{service.price} €</div>

                <TinaMarkdown content={service.body} />
            </div>
        </div>
    )
}
