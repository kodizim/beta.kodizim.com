const MentorProfil = ({ mentor }) => {
    return (
        <div className="bg-black border-2 border-green-500 shadow-md rounded p-4 text-white">
            <img src={mentor.avatar} alt="mentor-avatar" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{mentor.name}</h2>
            <h3 className="text-lg mb-4">{mentor.expertise}</h3>
            <p>{mentor.bio}</p>
        </div>
    );
};

export default MentorProfil;