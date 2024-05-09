export default function ContentBoxPresentation({ children }) {
  return (
    <div className="grid grid-cols-2 gap-10 w-full h-fit bg-[#06191f] rounded-b-lg font-light px-12 py-8">
      {children}
    </div>
  )
}
