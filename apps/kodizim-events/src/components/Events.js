// EventsPage.js
import React, { useState, useEffect } from "react";
import eventsData from "./events.json";

export const EventsPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Burada gerçek API çağrısı yapılabilir, ancak mock veri için JSON dosyasını kullanıyoruz
        setEvents(eventsData);
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-8">Etkinlikler</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="border border-gray-300 rounded-lg p-4"
                    >
                        <h2 className="text-2xl font-semibold">{event.title}</h2>
                        <p className="text-gray-600">{event.date}</p>
                        <p className="text-gray-600">{event.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

