import React from "react";
import image from "../assets/social.jpg"


export default function Intro() {
  return (
    <div className="bg-[#f5ddea] py-10" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
      <div className="grid grid-cols-2 px-10 py-10 items-center">
        {/* <!--Left Col--> */}
        <div>
          <h1 className="text-3xl mt-20 w-4/5 text-center leading-relaxed">
            Join us on a journey of self-discovery and social empowerment – one breath, conversation, and blog post at a time!
          </h1>
        </div>
        {/* <!--Right Col--> */}
        <div>
          <img className="w-full md:w-4/5 z-50 m-auto" src="https://images.prismic.io/cerebral/1dfe1f54-cc0b-4f47-a187-b805b7b29371_mobile%20(3).png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=903&h=600" />
        </div>
      </div>
    </div>
  );
}
