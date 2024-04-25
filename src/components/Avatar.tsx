function Avatar({
  src = "",
  className = "",
}: {
  src?: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} rounded-full h-8 w-8 bg-gray-5 overflow-hidden cursor-pointer`}
    >
      {src ? (
        <img src={src} alt="" className="object-cover rounded-full h-full w-full" />
      ) : null}
    </div>
  );
}

export default Avatar;
