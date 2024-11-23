import React from 'react';

const CareerPage = () => {
  const jobListings = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build beautiful and performant user interfaces using React and Tailwind CSS.',
    },
    {
      title: 'Backend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and maintain scalable APIs and server-side logic using Node.js and Express.',
    },
    {
      title: 'Product Manager',
      location: 'bangalore, India',
      type: 'Full-time',
      description: 'Lead teams to build world-class solutions by defining product roadmaps and priorities.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg">
            Be part of a company that values innovation, creativity, and growth. Explore exciting opportunities below.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Why Work With Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Work With Us?</h2>
          <p className="text-gray-600 mb-6">
            We are a team of innovators, dreamers, and builders. We believe in creating an environment where everyone
            can grow and thrive while working on challenging and impactful projects.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-600">
            <li>Remote-friendly culture</li>
            <li>Opportunities for professional development</li>
            <li>Collaborative and inclusive environment</li>
            <li>Competitive salary and benefits</li>
          </ul>
        </section>

        {/* Job Listings Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Open Positions</h2>
          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-gray-500">{job.location} · {job.type}</p>
                <p className="text-gray-600 my-4">{job.description}</p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-all duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerPage;
