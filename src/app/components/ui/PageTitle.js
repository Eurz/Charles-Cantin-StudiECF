export default function PageTitle({ title }) {
    console.log(title)
    return <>{title.displayTitle && <h1>{title.title}</h1>}</>
}
