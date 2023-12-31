import { Suspense } from 'react'
import client from '../../../tina/__generated__/client'
import PageSections from '../components/app/pageSections'
import FormContact from '../components/contact/FormContact'
import Author from '../components/contact/Author'
import Loader from '../components/Loader'

const getMeta = async () => {
    const pageResponse = await client.queries.page({
        relativePath: 'Contact.md',
    })

    const { seotitle, description } = pageResponse.data.page
    return { title: seotitle, description: description }
}

export async function generateMetadata({ params, searchParams }, parent) {
    const data = await getMeta()
    if (!data) {
        return null
    }
    return data
}

export default async function contactPage() {
    const data = await getData()

    return (
        <>
            <h1>Contact</h1>
            <div className="flex  flex-col md:flex-row h-full ">
                {/* <div className="lg:grid lg:grid-cols-3 md:flex-1 md:flex-col"> */}
                <div className="md:w-2/3 border-content w-auto bg-secondary-blue italic text-white px-14 py-11 ">
                    <Author />
                </div>
                <div className="">
                    <Suspense fallback={<Loader />}>
                        <PageSections pageData={data}>
                            <FormContact />
                        </PageSections>
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export const getData = async () => {
    const pageResponse = await client.queries.page({
        relativePath: 'Contact.md',
    })
    return {
        data: pageResponse.data,
        query: pageResponse.query,
        variables: pageResponse.variables,
    }
}
