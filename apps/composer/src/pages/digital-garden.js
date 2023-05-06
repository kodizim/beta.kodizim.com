import dynamic from 'next/dynamic'

const RemoteDigitalGarden = dynamic(
    () => import("kodizimDigitalGarden/DigitalGarden"),
    {ssr: false}
)

export default function DigitalGarden() {
    return (
        <RemoteDigitalGarden/>
    )
}