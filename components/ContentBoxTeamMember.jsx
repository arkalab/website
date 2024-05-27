export default function ContentBoxTeamMember({ img, name, jobTitle }) {
  return (
    <div>
      <div className="mb-4">
        <img src={img} className="w-full rounded-lg" />
      </div>
      <div className="text-center">
        <p className="font-extrabold">{name}</p>
        <p className="italic">{jobTitle}</p>
      </div>
    </div>
  )
}
