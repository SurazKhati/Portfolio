"use client"
import { useAppContext } from "@/context/contexts"
import StatsBar from "./status"
import { Stat } from "./status"

type herotype = {
  batchtxt?: string
  title: string
  subtext: string
  description?: string
  resume?: string | "Download Resume"
  viewwork?: string | "view my work"
  image?: string
  stats: Stat[]
}

export const HeroSection = ({
  batchtxt,
  title,
  subtext,
  description,
  resume,
  viewwork,
  image,
  stats
}: herotype) => {

  const { mblview, darkState } = useAppContext()

  const Resume = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "My-Portfolio.pdf"
    link.click()
  }

  const viewmywork = () => {
    window.location.assign("https://github.com/SurazKhati")
  }

  const handleEmail = () => {
    window.location.href = "mailto:your@email.com?subject=Hello from Portfolio"
  }

  return (
    <>
      <section
        className={`px-7 py-8 ${mblview ? "flex flex-col-reverse" : "flex"}
          ${darkState ? "bg-neutral-950 text-white" : "bg-white text-black"}
        `}
      >
        <div className={`h-auto ${mblview ? "w-full" : "w-[50%] pt-15 px-10"}`}>
          <h1
            className={`my-1 ${
              mblview ? "text-2xl w-full text-center" : "w-full text-5xl text-bold"
            }`}
          >
            {title}
          </h1>

          <p
            className={`pt-5 ${
              darkState ? "text-gray-300" : "text-gray-800"
            } ${mblview ? "text-lg w-[90%] m-auto text-center" : "text-3xl"}`}
          >
            {subtext}
          </p>

          <p
            className={`pt-5 ${
              darkState ? "text-gray-400" : "text-gray-600"
            } ${mblview ? "text-sm w-[90%] m-auto text-center" : "text-xl"}`}
          >
            {description}
          </p>

          <div className={`${mblview ? "block" : "flex"} text-center`}>
            <button
              className={`m-3 p-3 rounded hover:cursor-pointer
                ${darkState ? "bg-white text-black" : "bg-black text-white"}
                ${mblview ? "text-lg w-[60%]" : "text-xl"}
              `}
              onClick={Resume}
            >
              Download Resume
            </button>

            <button
              className={`m-3 p-3 rounded border hover:cursor-pointer
                ${
                  darkState
                    ? "border-white text-white bg-neutral-800 hover:bg-neutral-700"
                    : "border-black text-black bg-gray-100 hover:bg-gray-200"
                }
                ${mblview ? "text-lg w-[60%]" : "text-xl"}
              `}
              onClick={viewmywork}
            >
              View My Works
            </button>
          </div>

          <div className={`flex items-baseline pt-7 ${mblview ? "justify-center" : ""}`}>
            <a href="https://github.com/SurazKhati">
              <img
                src="./github.png"
                className="inline-block w-16 h-16 m-4 rounded-full object-cover hover:cursor-pointer"
                alt="GitHub"
              />
            </a>

            <a href="https://www.linkedin.com/in/surajkhati/">
              <img
                src="./linkedin.png"
                className="inline-block w-16 h-16 m-4 rounded-full object-cover hover:cursor-pointer"
                alt="LinkedIn"
              />
            </a>

            <button onClick={handleEmail}>
              <img
                src="./mail2.jpg"
                className={`inline-block w-16 h-16 m-4 rounded-full object-cover hover:cursor-pointer
                  ${darkState ? "border border-neutral-600" : "border-2"}
                `}
                alt="Mail"
              />
            </button>
          </div>

          <div className="w-full">
            <StatsBar stats={stats} />
          </div>
        </div>

        <div className={`h-auto ${mblview ? "w-full mb-10" : "w-[50%]"}`}>
          <img
            src={image}
            height="100px"
            width="300px"
            alt=""
            className={`rounded-full my-7 mx-auto object-cover object-top border-4 shadow-2xl
              ${
                darkState
                  ? "border-neutral-700 shadow-black"
                  : "border-white shadow-gray-600"
              }
              ${mblview ? "w-45 h-45" : "w-80 h-80"}
            `}
          />

          <div
            className={`rounded-xl m-auto px-3 w-fit py-2.5 text-sm border
              ${
                darkState
                  ? "bg-neutral-900 text-white border-neutral-700"
                  : "bg-gray-200 text-black border-amber-950"
              }
            `}
          >
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>{" "}
            Available for work
          </div>
        </div>
      </section>
    </>
  )
}
