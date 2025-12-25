"use client"
import { useAppContext } from "@/context/contexts"

export const Scroll = () => {
  const { darkState } = useAppContext()

  return (
    <div
      className={`flex flex-col items-center  w-full text-center justify-center
        ${darkState ? "bg-neutral-950" : "bg-white"}
      `}
    >
      <span className={`${darkState ? "text-gray-400" : "text-gray-600"} text-sm`}>
        Scroll to explore
      </span>
      <span className={`${darkState ? "text-gray-400" : "text-gray-800"} text-xl`}>
        ↓
      </span>
    </div>
  )
}
