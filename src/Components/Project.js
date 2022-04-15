import React, { useState } from 'react'

const Project = () => {
  const [Work, setWork] = useState([
    {
      img: "https://media.istockphoto.com/vectors/voice-assistant-logo-with-sound-wave-vector-id1178972643?k=20&m=1178972643&s=170667a&w=0&h=8XTmuz9QcMhWQ0-b4fnCnQ8w1TXKr_usMEC8h53VYfc=",
      title: "Dude",
      desc: "A Virtual Voice Assistant",
      url: "https://github.com/BabbarRaghav/Dude"
    },
    {
      img: "https://cdn.digitbin.com/wp-content/uploads/Sites-to-Watch-Movies-Online.jpg",
      title: "Shortflix",
      desc: "Shotflix is a free streaming service that allows our member to watch movies without commercials on an internet-connected Desktop",
      url: "https://github.com/BabbarRaghav/Shotflix"
    },
    {
      img: "https://intsofttechnologies.com/wp-content/uploads/2021/03/Order-Food-Ordering-System-2-1.jpg",
      title: "LunchLauncher",
      desc: "LunchLauncher is a food ordering website which allow user to order there food online",
      url: "https://github.com/BabbarRaghav/LunchLauncher-Django"
    },
    {
      img: "https://is2-ssl.mzstatic.com/image/thumb/Purple2/v4/49/4a/a6/494aa633-2c48-47ad-7845-d5ae551cded4/source/512x512bb.jpg",
      title: "iNotebook",
      desc: "iNotebook provide user to add short notes or To-Do",
      url: "https://github.com/BabbarRaghav/iNotebook-React"
    },
  ])

  return (
    <div className="main flex flex-col justify-center items-center lg:items-stretch mt-9 space-y-4 lg:space-y-0 text-center lg:grid lg:gap-4 lg:grid-cols-4 lg:grid-rows-4 mx-3">
      {Work.map((work) => {
        return (
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={work.title}>
            <a href={work.url} target={"_blank"} rel="noopener noreferrer">
              <img className="rounded-t-lg p-2" src={work.img} alt={work.title} />
            </a>
            <div className="p-2">
              <a href={work.url} target={"_blank"} rel="noopener noreferrer">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{work.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{work.desc}</p>
              <a href={work.url}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target={"_blank"} rel="noopener noreferrer">
                Read more
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Project