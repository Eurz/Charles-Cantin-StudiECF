// import { useTina } from 'tinacms/dist/react'
import client from '../../../tina/__generated__/client'
import { Blocks } from '../components/app/blocs-renderer'
import Author from '../components/contact/Author'
import FormContact from '../components/contact/FormContact'
import Layout from '../components/ui/Layout'
import PageTitle from '../components/ui/PageTitle'

export default async function page({ params }) {
    const filename = params.filename
    const { tinaProps } = await getPageData(filename)
    const { data } = tinaProps

    return (
        <>
            <Layout
                meta={{
                    seotitle: data.page.seotitle,
                    description: data.page.description,
                }}
                page={filename}
            >
                <PageTitle
                    title={{
                        title: data.page.title,
                        displayTitle: data.page.displayTitle,
                    }}
                />
                {filename === 'contact' && (
                    <div className="flex  flex-col md:flex-row h-full ">
                        <div className="md:w-2/3 border-content w-auto bg-secondary-blue italic text-white px-14 py-11 ">
                            <Author />
                        </div>
                        <div className="p-10">
                            {/* {children} */}
                            <div className="h-hull">
                                <Blocks data={data.page} />
                            </div>
                            <FormContact />
                        </div>
                    </div>
                )}
                {filename !== 'contact' && (
                    <div className="p-10 h-full">
                        <Blocks data={data.page} />
                    </div>
                )}
            </Layout>
        </>
    )
}

async function getPageData(filename) {
    const tinaProps = await client.queries.page({
        relativePath: `${filename}.md`,
        // relativePath: `Accueil.md`,
    })
    return { tinaProps }
}

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//     const pageResponse = await client.queries.pageConnection()
//     const pages = pageResponse.data.pageConnection.edges.map((page) => {
//         return { filename: page.node._sys.filename }
//     })
//     return pages
// }
