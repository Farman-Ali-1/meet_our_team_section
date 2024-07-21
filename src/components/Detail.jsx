import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Detail() {
  let { id } = useParams();
    
  const teamMembers = [
    {
      id: 1,
      name: "Jeny",
      role: "Web Developer",
      imageUrl:
        "https://images.pexels.com/photos/27044945/pexels-photo-27044945/free-photo-of-woman-wearing-black-blouse-holding-hands-on-her-neck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Experienced web developer with a passion for creating user-friendly applications.",
    },
    {
      id: 2,
      name: "John Doe",
      role: "UI/UX Designer",
      imageUrl:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Creative UI/UX designer with a focus on delivering intuitive user interfaces.",
    },
    {
      id: 3,
      name: "Jeny",
      role: "Web Developer",
      imageUrl:
        "https://images.pexels.com/photos/1861586/pexels-photo-1861586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Experienced web developer with a passion for creating user-friendly applications.",
    },
    {
      id: 4,
      name: "John Doe",
      role: "UI/UX Designer",
      imageUrl:
        "https://images.pexels.com/photos/1861594/pexels-photo-1861594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Creative UI/UX designer with a focus on delivering intuitive user interfaces.",
    },
  ];

  const selectedMember = teamMembers.find(
    (member) => member.id.toString() === id
  );

  if (!selectedMember) {
    return <div>Member not found!</div>;
  }

  return (
    <div className="container flex w-screen h-screen">
      <div className="left h-full w-[20%] flex p-6 flex-col justify-start bg-black text-white opacity-50 relative z-10">
        <h1 className="text-2xl">{selectedMember.name}</h1>
        <p className="text-lg">{selectedMember.role}</p>
        <p className="mt-4">{selectedMember.description}</p>
      </div>
      <div className="right w-full h-full bg-white absolute flex flex-row">
        <img
          src={selectedMember.imageUrl}
          className="object-cover h-full w-full"
          style={{ filter: "grayscale(100%)" }}
          alt={selectedMember.name}
        />
        <Link
          to="/"
          className="absolute top-[50%] left-[90%] transform -translate-x-1/2 -translate-y-1/2 h-[30px] w-[30px] overflow-hidden bg-black rounded-full text-white flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-white text-xl" />
        </Link>
      </div>
    </div>
  );
}

export default Detail;
