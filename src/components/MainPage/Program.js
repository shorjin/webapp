import React from 'react';
import './Program.css'; // Make sure you have the correct path to your CSS file

function Program() {
  return (
    <section id="programs">
      {/* programs container */}

        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Programs
          </h2>
          <a href="/programs">
          <button className="hidden btn md:block">See All</button>
          </a>
        </div>



    </section>

  );
}

export default Program;