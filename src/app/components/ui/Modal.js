export default function Modal(props) {
    return (
        <div className="bg-black/75 z-50 fixed w-full h-screen left-0 top-0 flex justify-center items-center">
            {props.children}
        </div>
    )
}
