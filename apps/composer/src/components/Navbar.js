import {Search} from "react-feather";
export default function Navbar(){
    return (
        <header className="bg-black shadow-md">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-xl font-bold text-blue-500">
                        <a href="/">
                            <img src="/logo.png" alt="Logo"/>
                        </a>
                    </div>

                    {/* Navbar Links */}
                    <ul className="flex space-x-6 items-center">
                        <li><a href="/" className="text-gray-100 hover:text-primary">Digital Bahçe</a></li>
                        <li><a href="/" className="text-gray-100 hover:text-primary">Mentor/Mentee</a></li>
                        <li><a href="/events" className="text-gray-100 hover:text-primary">Etkinlikler</a></li>
                        <li><a href="/" className="text-gray-100 hover:text-primary">Açık Kaynak</a></li>
                    </ul>

                    {/* Button */}
                    <div>
                        <button className="flex items-center justify-center bg-secondary text-primary text-xs px-6 py-2 rounded-lg hover:bg-primary hover:text-secondary ">
                            <Search className="inline-block mr-2" width={14} />
                            Hızlı Ara
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}