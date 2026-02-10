"use client"
import { useAppContext } from "@/context/contexts"
import Image from "next/image"

export type Project = {
  id?: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export const SelfFeatured = ({ projects }: { projects: Project[] }) => {
  const { mblview, darkState } = useAppContext()

  return (
    <div className={`px-6  md:px-12 ${darkState ? "bg-black": "bg-white"}` }>
      
       <h3
  className={`text-center p-16 font-extrabold ${
    mblview ? "text-xl" : "text-4xl"
  } ${
    darkState
      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400"
      : "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-orange-400"
  } animate-pulse`}
  style={{
    textShadow: darkState
      ? "0 0 10px #ff00ff, 0 0 20px #00ffff"
      : "0 0 10px #00ffff, 0 0 20px #ff9900",
  }}
>
  Featured Projects
</h3>

      

      <div className={`grid grid-cols-1 mdg:grid-cols-2 lg:grid-cols-3 gap-10 ${darkState ? "bg-black": "bg-white"}`}>
        {projects.map((prj, idx) => (
          <a href="https://github.com/SurazKhati" target="_blank" className="cursor-pointer" key={idx}>
            <div
              className={`border rounded
                ${darkState ? "bg-neutral-900 border-neutral-700" : "bg-white border-gray-600"}
              `}
            >
              <div className="relative h-56 w-full">
                <Image
                  fill
                  src={prj.image}
                  alt={prj.title}
                  className="object-cover grayscale"
                />
              </div>

              <div className="p-6">
                <h3 className={`${darkState ? "text-white" : "text-black"} text-lg font-semibold`}>
                  {prj.title}
                </h3>
                <p className={`${darkState ? "text-gray-400" : "text-gray-500"} mt-3`}>
                  {prj.description}
                </p>

                <div className="flex flex-wrap">
                  {prj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-sm px-4 m-2 py-1 rounded-2xl
                        ${darkState ? "text-gray-300 bg-neutral-800" : "text-black bg-gray-200"}
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
