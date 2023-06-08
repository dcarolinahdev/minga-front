export default function Arrow({ d, onClick }) {
  return (
    <svg onClick={onClick} className="w-6 h-6 fill-current text-slate-700/[0.8] bg-slate-300/50 rounded-full p-1"
         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )
}
