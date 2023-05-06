const MenteeProfil = ({ mentee }) => {
    return (
        <div className="bg-black border-2 border-green-500 shadow-md rounded p-4 text-white">
            <img src={mentee.avatar} alt="mentee-avatar" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{mentee.name}</h2>
            <h3 className="text-lg mb-4">{mentee.interests}</h3>
            <p>{mentee.goals}</p>
        </div>
    );
};

export default MenteeProfil
