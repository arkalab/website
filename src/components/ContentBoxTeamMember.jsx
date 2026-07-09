export default function ContentBoxTeamMember({ img, name, jobTitle, url }) {
  const photo = (
    <div className="mb-4 overflow-hidden rounded-lg">
      <img
        src={img}
        className="w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );

  return (
    <div>
      {url === "" ? (
        <>
          {photo}
          <div className="text-lg text-center">
            <p className="font-extrabold">{name}</p>
            <p>{jobTitle}</p>
          </div>
        </>
      ) : (
        <a href={url} target="_blank" className="group block cursor-pointer">
          {photo}
          <div className="text-lg text-center">
            <p className="font-extrabold">{name}</p>
            <p>{jobTitle}</p>
          </div>
        </a>
      )}
    </div>
  );
}
