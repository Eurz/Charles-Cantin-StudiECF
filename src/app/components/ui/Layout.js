import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, meta }) {
    return (
        <div className="flex flex-col h-full container mx-auto">
            <div className=" ">
                <Header />
            </div>
            <main className="flex flex-col grow">{children}</main>
            <div className=" ">
                <Footer />
            </div>
        </div>
    )
}
