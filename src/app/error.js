'use client'

export default function Error({ error, reset }) {
    // console.log('XXXXXXXXXXXXX', error.message)
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}