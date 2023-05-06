// DigitalGarden.js
import React, { useState, useEffect } from "react";
import projectsData from "./projects.json";

const OpenSource = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Burada gerçek API çağrısı yapılabilir, ancak mock veri için JSON dosyasını kullanıyoruz
        setProjects(projectsData);
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-8">Digital Garden</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="border border-gray-300 rounded-lg p-4"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex justify-between">
                            <div className="flex flex-wrap">
                                {project.languages.map((language, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500 text-white px-2 py-1 mr-2 mb-2 rounded"
                                    >
                    {language}
                  </span>
                                ))}
                            </div>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-yellow-500 mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.32 10.66a1 1 0 01-1.414 1.415l-2.829-2.828a1 1 0 010-1.415l2.828-2.828a1 1 0 011.414 1.414L9.586 10l2.828 2.828z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{project.stars}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpenSource;
