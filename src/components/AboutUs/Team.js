import React from 'react';

function TeamMember({ name, role, description, avatarSrc }) {
  return (
    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
      <p>
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          src={avatarSrc}
          alt={`${name} Avatar`}
        />
      </p>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{name}</p>
        </h3>
        <span className="text-gray-500 dark:text-gray-400">{role}</span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{description}</p>
        <ul className="flex space-x-4 sm:mt-0">
          {/* Social icons here */}
        </ul>
      </div>
    </div>
  );
}

function Team() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-8 text-4xl font-bold  md:text-5xl  text-gray-700 uppercase">
            Our Team
          </h2>
          <p className=" text-gray-500 lg:mb-16 sm:text-xl">
            Explore the whole collection of open-source web components and elements
            built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {/* Render TeamMember components here */}
          <TeamMember
            name="Bonnie Green"
            role="CEO & Web Developer"
            description="Bonnie drives the technical strategy of the flowbite platform and brand."
            avatarSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          />
          <TeamMember
            name="Jese Leos"
            role="CTO"
            description="Jese drives the technical strategy of the flowbite platform and brand."
            avatarSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
          />
          <TeamMember
            name="Michael Gough"
            role="Senior Front-end Developer"
            description="Michael drives the technical strategy of the flowbite platform and brand."
            avatarSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
          />
          <TeamMember
            name="Lana Byrd"
            role="Marketing & Sale"
            description="Lana drives the technical strategy of the flowbite platform and brand."
            avatarSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
          />

        </div>
      </div>
    </section>
  );
}

export default Team;