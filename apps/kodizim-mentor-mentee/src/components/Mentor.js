import MentorProfil from "@/components/MentorProfil";
import MenteeProfil from "@/components/MenteeProfil";

const Mentor = () => {
    const mockData = {
        mentors: [
            {
                id: 1,
                name: "Mentor Adı 1",
                expertise: "Uzmanlık Alanı 1",
                bio: "Kısa Biyografi 1",
                avatar: "https://avatars.githubusercontent.com/u/56169582?v=4",
            },
            {
                id: 2,
                name: "Mentor Adı 2",
                expertise: "Uzmanlık Alanı 2",
                bio: "Kısa Biyografi 2",
                avatar: "https://avatars.githubusercontent.com/u/56169582?v=4",
            },
            {
                id: 3,
                name: "Mentor Adı 3",
                expertise: "Uzmanlık Alanı 3",
                bio: "Kısa Biyografi 3",
                avatar: "https://avatars.githubusercontent.com/u/56169582?v=4",
            },
            {
                id: 2,
                name: "Mentor Adı 4",
                expertise: "Uzmanlık Alanı 4",
                bio: "Kısa Biyografi 4",
                avatar: "https://avatars.githubusercontent.com/u/56169582?v=4",
            },
        ],
        mentees: [
            {
                id: 1,
                name: "Mentee Adı 1",
                interests: "İlgi Alanları 1",
                goals: "Hedefler 1",
                avatar: "https://avatars.githubusercontent.com/u/56169582?v=4",
            },
            {
                id: 2,
                name: "Mentee Adı 2",
                interests: "İlgi Alanları 2",
                goals: "Hedefler 2",
                avatar: "https://avatars.githubusercontent.com/u/56169582?v=4",
            },
        ],
    };

    const { mentors, mentees } = mockData;

    return (
        <div className="container mx-auto px-4 py-5">
            <h1 className="text-3xl font-bold mb-5 text-white">Mentor-Mentee Sayfası</h1>
            <h1 className="my-4">Mentors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mentors.map((mentor) => (
                    <MentorProfil key={mentor.id} mentor={mentor} />
                ))}
            </div>
            <h1 className="my-4">Mentees</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {mentees.map((mentee) => (
                    <MenteeProfil key={mentee.id} mentee={mentee} />
                ))}
            </div>
        </div>
    );
};

export default Mentor;