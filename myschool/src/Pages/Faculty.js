import React from "react";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Sarah",
      role: "Head of Science Department",
      image:
        "images/beautiful-young-arabian-woman-with-dark-skin-wears-transparent-spectacles-holds-papers-notepad-has-toothy-smile.jpg",
      description:
        "Dr. Sarah inspires curiosity through hands-on experiments and innovative teaching methods that make science engaging and practical.",
    },
    {
      name: "Ms. Misha",
      role: "Mathematics Teacher",
      image: "images/international-day-education-celebration.jpg",
      description:
        "Ms. Misha makes math simple and fun by connecting real-life examples with problem-solving strategies, encouraging logical thinking in every student.",
    },
    {
      name: "Ms. Emily Davis",
      role: "English Literature Teacher",
      image: "images/medium-shot-man-correcting-grammar-mistakes.jpg",
      description:
        "Ms. Davis brings literature to life through storytelling, debates, and creative writing exercises that enhance students’ critical thinking.",
    },
    {
      name: "Ms. Iqra",
      role: "Computer Science Instructor",
      image: "images/modern-muslim-woman-hijab-office-room.jpg",
      description:
        "With expertise in coding and AI, Ms. Iqra empowers students to innovate and create through hands-on technology-based learning.",
    },
    {
      name: "Ms. Komal",
      role: "History & Social Studies Teacher",
      image: "images/woman-holding-book-front-view.jpg",
      description:
        "Mrs. Komal makes history come alive by connecting past events to current global issues, fostering awareness and civic responsibility.",
    },
    {
      name: "Mr. Daniel Smith",
      role: "Physical Education Coach",
      image: "images/portrait-happy-young-man-eyeglasses.jpg",
      description:
        "Mr. Smith promotes physical fitness, teamwork, and discipline through engaging sports activities and leadership training.",
    },
  ];

  return (
    <section className="py-5 " id="faculty">
      <div
        className="container"
        style={{
          backgroundImage: "url(images/border.jpg)",
          backgroundSize: "cover",
          objectFit: "fill",
        }}
      >
        <h2
          className="mb-5 text-center text-primary fw-bold"
          style={{ fontSize: "6cap" }}
        >
          Our Faculty
        </h2>

        <div className="row g-4">
          {facultyMembers.map((member, index) => (
            <div className="col-md-4" key={index}>
              <div className="p-4 h-100 text-center bg-white rounded shadow highlight-box">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mb-3 rounded-circle img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="fw-bold">{member.name}</h5>
                <p className="mb-1 text-muted">{member.role}</p>
                <p className="text-secondary small">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
