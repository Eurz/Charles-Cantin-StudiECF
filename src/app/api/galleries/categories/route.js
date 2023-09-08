import { NextResponse } from 'next/server'
import client from '../../../../../tina/__generated__/client'

export async function GET(request) {
    const response = await client.queries.galleryConnection()

    const categories = response.data.galleryConnection.edges.map((gallery) => {
        return {
            title: gallery.node.title,
        }
    })
    return NextResponse.json({ categories })
}
