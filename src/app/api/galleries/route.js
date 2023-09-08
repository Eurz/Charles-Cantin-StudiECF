import { NextResponse } from 'next/server'
import client from '../../../../tina/__generated__/client'

export async function GET(request) {
    const { searchParams } = new URL(request.url)

    let filters = null

    if (searchParams.get('cat')) {
        filters = {
            filter: { title: { eq: searchParams.get('cat') } },
        }
    }

    const response = await client.queries.galleryConnection(filters)
    const data = response.data.galleryConnection.edges.map((gallery) => {
        return {
            id: gallery.node.id,
            title: gallery.node.title,
            picture: gallery.node.picture,
        }
    })
    return NextResponse.json({ data })
}
