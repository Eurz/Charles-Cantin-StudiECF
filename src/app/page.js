// import { Suspense, cache } from 'react'
import { notFound } from 'next/navigation'
import client from '../../tina/__generated__/client'
import PageSections from './components/app/pageSections'

const getMeta = async () => {
    const pageResponse = await client.queries.page({
        relativePath: 'Accueil.md',
    })

    const { seotitle, description } = pageResponse.data.page
    return { title: seotitle, description }
}

export async function generateMetadata({ params, searchParams }, parent) {
    const data = await getMeta()
    if (!data) {
        return null
    }
    return data
}

export default async function Home() {
    const data = await getData()
    return (
        <>
            {data.data.page.displayTitle && <h1>{data.data.page.title}</h1>}
            <PageSections pageData={data} />
        </>
    )
}

// export const revalidate = 0
export const getData = async () => {
    const pageResponse = await client.queries.page({
        relativePath: 'Accueil.md',
    })

    return {
        data: pageResponse.data,
        query: pageResponse.query,
        variables: pageResponse.variables,
    }
}
