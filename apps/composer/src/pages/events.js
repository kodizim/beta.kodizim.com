import dynamic from 'next/dynamic'

const RemoteEvents = dynamic(
    () => import("kodizimEvents/Events"),
    {ssr: false}
)

export default function Events() {
    return (
        <RemoteEvents/>
    )
}