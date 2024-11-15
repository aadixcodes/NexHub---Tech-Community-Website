import React from 'react';

const OurTeam = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-black-600">Our NexHub Core Team Members</h1>
        <p className="text-lg mt-4">
          With over 100 years of combined experience, we've got a well-seasoned team at the helm.
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-8 px-8">
        <div className="text-center mb-8">
          <div className="relative w-64 h-80 bg-yellow-500 flex items-center rounded-[20] justify-center overflow-hidden">
            <img
              alt="Portrait of Mike Cannon-Brookes"
              className="absolute top-0 transform -translate-y-1/4 w-full h-auto"
              src="https://storage.googleapis.com/a1aa/image/q4VOWcZ5YbL3D5GgXSeFjQHAdKG3jK0cJGF9NBe27OHD7TxTA.jpg"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Mike Cannon-Brookes</h2>
          <p className="text-gray-600">CO-FOUNDER & CO-CEO</p>
        </div>

        <div className="text-center mb-8">
          <div className="relative w-64 h-80 bg-green-500 flex rounded-[20] items-center justify-center overflow-hidden">
            <img
              alt="Portrait of Scott Farquhar"
              className="absolute top-0 transform -translate-y-1/4 w-full h-auto"
              src="https://storage.googleapis.com/a1aa/image/fKGi9Piw38RoeExMBMiHfqB0N6XHSevVbJoLOwpQTUmJsPFPB.jpg"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Scott Farquhar</h2>
          <p className="text-gray-600">CO-FOUNDER & CO-CEO</p>
        </div>
        <div className="text-center mb-8">
          <div className="relative w-64 h-80 bg-teal-500 rounded-[20] flex items-center justify-center overflow-hidden">
            <img
              alt="Portrait of Anu Bharadwaj"
              className="absolute top-0 transform -translate-y-1/4 w-full h-auto"
              src="https://storage.googleapis.com/a1aa/image/FPQFd1AlUgbiEZqK1zPgiAh5ZpKKBMez4ayVUnjqZ7qg9p4JA.jpg"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Anu Bharadwaj</h2>
          <p className="text-gray-600">PRESIDENT</p>
        </div>
        <div className="text-center mb-8">
          <div className="relative w-64 h-80 bg-blue-500 rounded-[20] flex items-center justify-center overflow-hidden">
            <img
              alt="Portrait of Team Member 4"
              className="absolute top-0 transform -translate-y-1/4 w-full h-auto"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/a985IrwrlS5AJtlDLQiOrUizKVAZNiBQL39DB1T2SMpDfp4JA.jpg"
              width="300"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Team Member 4</h2>
          <p className="text-gray-600">POSITION</p>
        </div>
        <div className="text-center mb-8">
          <div className="relative w-64 h-80 bg-red-500 rounded-[20] flex items-center justify-center overflow-hidden">
            <img
              alt="Portrait of Team Member 5"
              className="absolute top-0 transform -translate-y-1/4 w-full h-auto"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/r64SJJ0XlkrzNlfcAJQHdQmDj5E1gJS9afJjYWbCfzLh4ninA.jpg"
              width="300"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Team Member 5</h2>
          <p className="text-gray-600">POSITION</p>
        </div>
      </div>
      <div className="text-center mb-8">
        <button className="bg-blue-500 hover:bg-blue-600 rounded-[20] text-white font-bold py-2 px-4 rounded">
          View Organiser
        </button>
      </div>
    </div>
  );
};

export default OurTeam;