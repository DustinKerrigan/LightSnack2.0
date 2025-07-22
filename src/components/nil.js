import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const athletes = [
    {
        id: 1,
        name: "Dylan Cook",
        school: "Morehead State University",
        sport: "Football",
        image: "TBD", //working on photo
        position: "Defensive Back",
        number: 12
    }
];

const Nil = () => {

    return (
        <>
        <section id="nil-section">
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12">
                <h1 className="text-4xl font-bold text-center mb-10">Our Athletes</h1>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {athletes.map((athlete) => (
                    <Link
                    key={athlete.id}
                    to={`/athlete/${athlete.id}`}
                    className="group"
                    >
                    <div className="bg-white rounded-xl shadow-lg border-4 border-red-600 p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <img
                        src={athlete.image}
                        alt={athlete.name}
                        className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 mb-4"
                        />
                        <div className="text-center">
                        <h2 className="text-2xl font-bold">{athlete.name}</h2>
                        <p className="text-red-600 font-semibold">{athlete.sport}</p>
                        <p className="text-gray-500">{athlete.school}</p>
                        <p className="mt-2 text-sm">
                            #{athlete.number} &bull; {athlete.position}
                        </p>
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
        </section>
        </>
    );
}
export default Nil;