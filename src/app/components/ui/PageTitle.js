export default function PageTitle({ title }) {
    return <>{title.displayTitle && <h1>{title.title}</h1>}</>
}
