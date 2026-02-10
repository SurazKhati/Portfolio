"use client"
import { useAppContext } from "@/context/contexts"
import { useState, ReactNode } from "react"

type ContactInfo = {
  email: string
  phone: string
  location: string
}

type ContactSectionProps = {
  heading?: ReactNode   // <-- allow JSX
  description?: ReactNode // <-- allow JSX
  contactInfo: ContactInfo
}

export const Selfcontacts = ({ heading, description, contactInfo }: ContactSectionProps) => {
  const { mblview, darkState } = useAppContext()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`
    window.location.href = mailtoLink
  }

  const cardBg = darkState ? "bg-neutral-900 border-neutral-700" : "bg-white border-gray-200"
  const cardText = darkState ? "text-white" : "text-gray-900"
  const inputBg = darkState ? "bg-neutral-800 text-white placeholder-gray-400" : "bg-gray-100 text-black placeholder-gray-500"

  return (
    <section className={`${mblview ? "px-4 py-12" : "px-16 py-20"} ${darkState ? "bg-neutral-950" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`mb-5 text-center ${mblview ? "text-3xl" : "text-5xl"} ${cardText}`}>
          {heading}
        </h2>
        {description && (
          <p className={`text-center ${mblview ? "text-base px-4" : "text-lg"} max-w-3xl mx-auto ${cardText}`}>
            {description}
          </p>
        )}
      </div>

      <div className={`grid ${mblview ? "grid-cols-1 gap-8 p-5" : "p-15 grid-cols-2 gap-12"}`}>
        {/* Contact Info */}
        <div className="space-y-6 ">
          {/* Email */}
          <div className={`flex border rounded-lg p-2 ${cardBg} `}>
            <svg className={`w-6 mx-5 h-6 ${cardText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className={`text-xl ${darkState ? "text-white" : "text-black"}`}>
                Email
                <p className={`text-lg  ${cardText}`}>{contactInfo.email}</p>
              </h3>
            </div>
          </div>

          {/* Phone */}
          <div className={`flex border rounded-lg p-6 ${cardBg}`}>
            <svg className={`w-6 h-6 mx-5 ${cardText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h3 className={`text-xl ${darkState ? "text-white" : "text-black"}`}>
                Phone
                <p className={`text-lg ${cardText}`}>{contactInfo.phone}</p>
              </h3>
            </div>
          </div>

          {/* Location */}
          <div className={`flex border rounded-lg p-6 ${cardBg}`}>
            <svg className={`w-6 mx-5 h-6 ${cardText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h3 className={`text-xl ${darkState ? "text-white" : "text-black"}`}>
                Location
                <p className={`text-lg ${cardText}`}>{contactInfo.location}</p>
              </h3>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`border rounded-lg p-10 ${cardBg}`}>
          <h3 className={`text-xl mb-4 ${cardText}`}>Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4 py-5">
            <div className={`grid ${mblview ? "grid-cols-1" : "grid-cols-2"} gap-4`}>
              <input
                className={`focus:outline-none focus:border focus:border-gray-300 w-full px-4 py-3 rounded ${inputBg}`}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className={`focus:outline-none focus:border focus:border-gray-300 w-full px-4 py-3 rounded ${inputBg}`}
                type="text"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              className={`focus:outline-none focus:border focus:border-gray-300 w-full px-4 py-3 rounded ${inputBg}`}
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              className={`focus:outline-none focus:border focus:border-gray-300 w-full resize-none px-4 py-3 rounded ${inputBg}`}
              rows={5}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-3
                ${darkState ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-900 text-white hover:bg-gray-800"}
              `}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
