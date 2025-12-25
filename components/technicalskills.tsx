"use client"
import { useAppContext } from "@/context/contexts"

type SkillCategory = {
  icon: string
  title: string
  skills: string[]
}

const getIcon = (iconName: string) => {
  const icons: { [key: string]: string } = {
    code: "</>",
    devops: "⚙️",
    javascript: "🌐",
    framework: "📚",
    backend: "☁️",
    testing: "🧪",
  }
  return icons[iconName] || "📦"
}

type TechnicalSkillsProps = {
  heading?: string
  description?: string
  categories: SkillCategory[]
}

export const TechnicalSkills = ({
  heading,
  description,
  categories,
}: TechnicalSkillsProps) => {
  const { mblview, darkState } = useAppContext()

  return (
    <>
      <div
        className={`pt-10 border 
          ${darkState ? "bg-neutral-950 text-white" : "bg-gray-50 text-black"}
        `}
      >
        <div>
          <h1
            className={`text-center ${
              mblview ? "text-2xl" : "text-5xl"
            }`}
          >
            {heading}
          </h1>

          <p
            className={`text-center pt-5 m-auto
              ${darkState ? "text-gray-400" : "text-gray-600"}
              ${mblview ? "text-xs max-w-[80%]" : "text-xl max-w-[60%]"}
            `}
          >
            {description}
          </p>
        </div>

        <div
          className={`grid
            ${darkState ? "bg-neutral-950" : "bg-gray-50"}
            ${
              mblview
                ? "grid-cols-1 gap-6 px-4 py-12"
                : "grid-cols-2 lg:grid-cols-3 gap-8 px-16 py-20"
            }
          `}
        >
          {categories.map((ctg, idx) => (
            <div
              key={idx}
              className={`border rounded p-5
                ${
                  darkState
                    ? "bg-neutral-900 border-neutral-700"
                    : "bg-white border-gray-300"
                }
              `}
            >
              <div className="p-2 flex items-center mb-4 gap-3">
                <span className="text-2xl grayscale">
                  {getIcon(ctg.icon)}
                </span>
                <h3 className={`${darkState ? "text-white" : "text-black"}`}>
                  {ctg.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {ctg.skills.map((Skill, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded text-sm
                      ${
                        darkState
                          ? "bg-neutral-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }
                    `}
                  >
                    {Skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
