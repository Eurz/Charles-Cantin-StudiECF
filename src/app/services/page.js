import { Suspense } from 'react'
import client from '../../../tina/__generated__/client'
import PageSections from '../components/app/pageSections'
import Loader from '../components/Loader'

const getMeta = async () => {
    const pageResponse = await client.queries.page({
        relativePath: 'Services.md',
    })

    const { seotitle, description } = pageResponse.data.page
    return { title: seotitle, description: description ?? 'dddd' }
}

export async function generateMetadata({ params, searchParams }, parent) {
    const data = await getMeta()
    if (!data) {
        return null
    }
    return data
}

export default async function ServicesPage() {
    const data = await getData()
    return (
        <>
            {data.data.page.displayTitle && <h1>{data.data.page.title}</h1>}
            <Suspense fallback={<Loader />}>
                <PageSections pageData={data} />
            </Suspense>
        </>
    )
}

export const getData = async () => {
    const pageResponse = await client.queries.page({
        relativePath: 'Services.md',
    })
    return {
        data: pageResponse.data,
        query: pageResponse.query,
        variables: pageResponse.variables,
    }
}
