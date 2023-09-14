import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="p-10 h-full">
            <h1>Page introuvable</h1>
            <p>Désolé, la ressource demandée n'est pas disponible</p>
            <Link className="btn" href="/">
                Retour à l'accueil
            </Link>
        </div>
    )
}

// import Link from 'next/link'
// import { headers } from 'next/headers'

// export default async function NotFound() {
//     const headersList = headers()
//     const domain = headersList.get('host')
//     const data = await getSiteData(domain)
//     return (
//         <div>
//             <h2>Not Found: {data.name}</h2>
//             <p>Could not find requested resource</p>
//             <p>
//                 View <Link href="/blog">all posts</Link>
//             </p>
//         </div>
//     )
// }
