import React from 'react'

const About = () => {
  return (
    <>
      <div class="heading text-3xl flex justify-center mt-9">About <div class="font-bold ml-2">Me</div></div>
      <div class="main flex flex-col justify-center items-center text-center lg:flex lg:flex-row">
        <div class="about m-10 lg:order-1 rounded-3xl border border-gray-200 shadow-md w-1/2 p-4">
          <div class="slogo my-2 text-purple-500">
            <p>Ask not what your programming language can do for you ask what you can do for your programming language.</p>
          </div>
          <div class="info my-4">
            <p>I am Raghav Babbar from Delhi, India who is software/web developer. I am always ready to learn new things. I love to code and drink coffee😋<br /> I completed my Graduation from SGTBIMIT(Shri Guru Tegh Bahadur Institute of Management and Information Technology) and I am pursuing my Post-Graduation from JIMS(Jagan Institute of Management Studies) in MCA.<br />I'm a MERN Stack Developer and I like Burgers. No, Burgers is not a Javascript Framework, I mean not yet.</p>
            </div>
          </div>
          <div class="info m-5 lg:order-2 w-1/2 space-y-4">
            <div class="rounded-3xl border border-gray-200 shadow-md h-10 p-2">
              <p>He/Him</p>
            </div>
            <div class="rounded-3xl border border-gray-200 shadow-md h-10 p-2">
              <p>22 years old</p>
            </div>
            <div class="rounded-3xl border border-gray-200 shadow-md h-10 p-2">
              <p>Aquarius</p>
            </div>
            <div class="hobbies flex items-center justify-center my-10">
              <hr class="w-28 bg-purple-600 h-1" />
                <div class="mx-1 transform transition-all hover:scale-110" alt="Coffee">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z" />
                  </svg>
                </div>
                <div class="mx-1 transform transition-all hover:scale-110" alt="Coffee">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                  </svg>
                </div>
                <div class="mx-1 transform transition-all hover:scale-110" alt="Coffee">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                  </svg>
                </div>
                <hr class="w-28 bg-purple-600 h-1" />
                </div>
            </div>
          </div>
        </>
        )
}

        export default About