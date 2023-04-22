import dynamic from 'next/dynamic'

const RemoteMario = dynamic(
    () => import("kodizimEvents/mario"),
    { ssr: false }
)

export default function Events() {
    return (
        <div>
            <RemoteMario />
        </div>
    )
}