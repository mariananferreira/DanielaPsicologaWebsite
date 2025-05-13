import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function ExpandableCourseCard({ title, shortDescription, details }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`rounded-xl border border-[#eee] bg-white p-6 shadow-sm transition-all duration-300 ${
        expanded ? 'bg-[#fdf8f5]' : ''
      }`}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start justify-between text-left"
      >
        <div>
          <h4 className="text-[#7c3e2f] font-semibold mb-1">{title}</h4>
          <p className="text-sm text-gray-600">{shortDescription}</p>
        </div>
        <span className="shrink-0 ml-4 mt-1">
          {expanded ? (
            <ChevronUp className="text-[#7c3e2f]" size={20} />
          ) : (
            <ChevronDown className="text-[#7c3e2f]" size={20} />
          )}
        </span>
      </button>

      {expanded && (
        <div className="mt-4 text-sm text-gray-700 space-y-2">
          {details.map((line, index) => (
            <p key={index}>• {line}</p>
          ))}
        </div>
      )}
    </div>
  )
}
