import dynamic from 'next/dynamic'

const RemoteFreelance = dynamic(
    () => import("kodizimFreelance/Freelance"),
    {ssr: false}
)

export default function Freelance() {
    return (
        <RemoteFreelance/>
    )
}