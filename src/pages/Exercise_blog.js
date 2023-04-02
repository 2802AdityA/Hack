import React from "react";
import data from ".././components/Exercise"

export default function Exercise_blog() {
    return (
        <div className="p-4 space-y-16 mt-24">
            <p className="text-7xl font-serif font-semibold text-[#5d001e] mx-auto text-center">Exercises</p>
            <p className="text-3xl font-serif text-center text-[#9a1750]">Breathe In, Stress Out: Exercises for a Calm and Clear Mind</p>
            {data.map((item) => {
                return (
                    <div key={item.key} className="p-4 space-y-8">
                        <p className="text-5xl font-serif font-semibold text-[#ee4c7c]">{item.key}.{item.name}</p>
                        <p className="text-xl ">{item.description}</p>
                        <iframe
                            width="100%"
                            height="450"
                            src={item.link}
                            title={item.name}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className="mx-auto"
                            allowfullscreen
                            style={{ maxWidth: "860px" }}
                        ></iframe>
                        </div>
                )
            })}
        </div>
    );
}