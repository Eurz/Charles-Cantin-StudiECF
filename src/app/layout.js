import './globals.css'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import { roboto400 } from './fonts'

export const metadata = {
    title: {
        default: 'Charles Cantin Photographe',
        template: 'Charles Cantin - Photographe - %s ',
        // absolute: 'Charles Cantin Default',
    },
}

// export async function generateMetadata({ params, searchParams }, parent) {
//     return {
//         title: {
//             default: 'Charles Cantin Photographe',
//             template: 'Charles Cantin - Photographe - %s ',
//             // absolute: 'Charles Cantin Default',
//         },
//     }
// }

export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en" className="">
                <body className={`h-screen ${roboto400.className}`}>
                    {children}
                </body>
            </html>
        </>
    )
}
