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
