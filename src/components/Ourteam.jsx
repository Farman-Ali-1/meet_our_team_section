import { Link } from "react-router-dom";
import { useState } from "react";

function Ourteam() {
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Jeny",
      role: "Web Developer",
      imageUrl:
        "https://images.pexels.com/photos/27044945/pexels-photo-27044945/free-photo-of-woman-wearing-black-blouse-holding-hands-on-her-neck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "John Doe",
      role: "UI/UX Designer",
      imageUrl:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Jeny",
      role: "Web Developer",
      imageUrl:
        "https://images.pexels.com/photos/1861586/pexels-photo-1861586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "John Doe",
      role: "UI/UX Designer",
      imageUrl:
        "https://images.pexels.com/photos/1861594/pexels-photo-1861594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <>
      <div className="ourteam flex items-center mb-6">
        <div className="border-b border-gray-400 w-28 mr-4"></div>
        <h1 className="text-3xl capitalize text-gray-900 font-bold">Our Team</h1>
      </div>

      <div className="container h-[90%] flex flex-row justify-evenly">
        {teamMembers.map((member) => (
          <Link
            key={member.id}
            to={`/detail/${member.id}`}
            className="card h-[500px] w-[350px] items-center flex flex-col justify-end relative"
          >
            <img
              src={member.imageUrl}
              className="h-full w-full absolute inset-0 object-cover"
              style={{
                filter:
                  hoveredId === member.id ? "grayscale(0%)" : "grayscale(100%)",
                transition: "filter 0.3s ease",
              }}
              alt={member.name}
              onMouseEnter={() => handleMouseEnter(member.id)}
              onMouseLeave={handleMouseLeave}
            />

            <h1 className="z-10 text-2xl relative text-white">{member.name}</h1>
            <p className="z-10 text-sm relative text-white">{member.role}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Ourteam;
