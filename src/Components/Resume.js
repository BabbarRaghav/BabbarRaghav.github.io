import React, { useState } from 'react'

const Resume = () => {
  const [Education, setEducation] = useState([
    {
      date: "Batch of 2016",
      title: "Xth",
      name: "Kulachi Hansraj Model School",
      place: "Delhi, India",
      mark: "Percentage: 54%"
    },
    {
      date: "Batch of 2018",
      title: "XIIth",
      name: "Kulachi Hansraj Model School",
      place: "Delhi, India",
      mark: "Percentage: 70.4%"
    },
    {
      date: "Batch of 2021",
      title: "Bachelor of Computer Application - BCA",
      name: "Shri Guru Tegh Bahadur Institute of Management and Information Technology",
      place: "Delhi, India",
      mark: "CGPA: 8.5"
    },
    {
      date: "Batch of 2023",
      title: "Master of Computer Application - MCA",
      name: "Jagan Institute of Management Studies",
      place: "Delhi, India",
      mark: "CGPA: (In Progress)"
    },
  ])

  const [experience, setExperience] = useState([
    {
      date: "Sept 2022 - Sept 2025",
      title: "Backend Developer",
      name: "ReinGames Pvt Ltd",
      desc: [
        "Developed and maintained 20+ microservices in an agile environment, ensuring scalability, reliability, and performance.",
        "Led backend development for popular gaming applications such as 3 Patti, Poker, and Indian Poker, delivering low-latency, high-availability systems.",
        "Designed and implemented a custom CRM backend solution from scratch, streamlining workflows and improving system efficiency.",
        "Proficient in Golang with expertise in building and deploying microservices architectures and containerized applications using Docker.",
        "Collaborated with cross-functional teams, conducted code reviews, and contributed to system design and performance optimization."
      ]
    }
  ])

  const [Community, setCommunity] = useState([
    {
      date: "March 2022",
      title: "Chief Coordinator",
      name: "Prastuti",
      desc: "PRASTUTI, a presentation competition is an effort of Department of Information Technology, JIMS, Rohini, annually practiced since 2007. It provides a platform to inculcate a culture of research, thinking, and presentation of ideas among students. It offers a platform to demonstrate technical talents and to exhibit communication skills in the form of Case Study, Innovative projects, Piece of code or any New Invention (Like Gadget, Management theory or case study). PRASTUTI-2020 is a theme based contest for PG (Post Graduation) and UG (Under Graduate) students of both Management and IT programs. In this contest, students from different Universities, Institutes, and Colleges are invited to present their ideas on the:- 'INNOVATION & TECHNOLOGIES: SMART GREEN SOCIETY'"
    }
  ])

  return (
    <div className="main flex flex-col lg:flex-row justify-center items-center lg:items-baseline mt-9 text-center">
      <div className="education lg:h-full">
        <div className="font-bold text-2xl">Education</div>
        {Education.map((edu) => {
          return (<div className="box m-10 rounded-3xl border border-gray-200 shadow-md p-4 size">
            <p className="text-slate-400 underline mb-2">{edu.date}</p>
            <p className="font-bold text-left">{edu.name}</p>
            <p className="font-bold text-left text-slate-400">{edu.title}</p>
            <p className="text-left">{edu.place}</p>
            <hr className="my-4" />
            <p className="text-left">{edu.mark}</p>
          </div>)
        })}
      </div>
      <div className="comm-work lg:h-full">
      <div className="font-bold text-2xl">Experience</div>
        {experience.map((exp) => {
          return (<div className="box m-10 rounded-3xl border border-gray-200 shadow-md p-4 lg:size">
            <p className="text-slate-400 underline mb-2">{exp.date}</p>
            <p className="font-bold text-left">{exp.name}</p>
            <p className="text-left">{exp.title}</p>
            <hr className="my-4" />
            <ul className="text-left list-disc ml-4">
              {exp.desc.map(desc => {
                return <li>{desc}</li>
              })}
            </ul>
          </div>
          )
        })}
        <div className="font-bold text-2xl">Community Work</div>
        {Community.map((comm) => {
          return (<div className="box m-10 rounded-3xl border border-gray-200 shadow-md p-4 lg:size">
            <p className="text-slate-400 underline mb-2">{comm.date}</p>
            <p className="font-bold text-left">{comm.name}</p>
            <p className="text-left">{comm.title}</p>
            <hr className="my-4" />
            <p className="text-left">{comm.desc}</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Resume