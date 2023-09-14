import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className="flex justify-between items-end gap-11 pb-3.5 pt-5 ">
            <Link href={'/'}>
                <Image
                    src="/logo.png"
                    width={115}
                    height={54}
                    alt="Charles Cantin"
                />
            </Link>
            <Navbar />
        </header>
    )
}
