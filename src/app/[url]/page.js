import client from '../../../tina/__generated__/client'
import Layout from '../components/ui/Layout'
export default async function page({ params }) {
    const url = params.url
    const filename = `${url}`

    const data = await getData(filename)

    console.log(data)
    return (
        <>
            <Layout>
                <div>Title: {data.title}</div>
                <div>Seo Title: {data.seotitle}</div>
            </Layout>
        </>
    )
}

async function getData(filename) {
    const pageResponse = await client.queries.getAuthor({
        relativePath: `${filename}.md`,
    })

    return pageResponse.data.page
}
