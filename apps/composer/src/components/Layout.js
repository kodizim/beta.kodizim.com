export default function Layout({children}) {
    return (
        <div
            className={`flex flex-col items-center justify-between px-24`}
        >
            {children}
        </div>
    )
}
