function Card({ title, desc, btn, img }) {
  return (
    <div className="rounded-xl bg-blue-100 border border-black p-5 shadow-md">
      <img
        src={img}
        alt={title}
        className="mx-auto h-48 w-48 object-contain"
      />

      <h2 className="mt-4 text-xl font-bold">{title}</h2>

      <p className="mt-2 text-gray-600">{desc}</p>

      {btn && (
        <button className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-blue-700">
          {btn}
        </button>
      )}
    </div>
  );
}

export default Card;
