export default function ContentBoxCarousel({ children, columns }) {
  return (
    <div className={"grid grid-cols-" + columns.toString() + " gap-10 w-full h-fit bg-[#06191f] rounded-b-lg font-light px-12 py-8"}>
      {children}
    </div>
  )
}