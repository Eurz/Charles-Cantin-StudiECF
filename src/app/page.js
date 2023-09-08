import { Suspense, cache } from 'react'
import client from '../../tina/__generated__/client'
import Loader from './components/Loader'
import PageSections from './components/app/pageSections'

export default async function Home() {
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

export const revalidate = 0
export const getData = cache(async () => {
    const pageResponse = await client.queries.page({
        relativePath: 'Accueil.md',
    })

    return {
        data: pageResponse.data,
        query: pageResponse.query,
        variables: pageResponse.variables,
    }
})
