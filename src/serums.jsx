export default function Serums({ name, price, img, shadowColor }) {
  return (
    <div
      className={`flex flex-col items-center p-5 bg-white border rounded-lg shadow-md hover:shadow-lg transform transition duration-300`}
      style={{
        boxShadow: `0px 4px 10px ${shadowColor}`, // Added custom shadow color
      }}
    >
      <img
        src={img}
        alt={name}
        className="w-56 h-56 object-cover mb-4 rounded"
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 font-medium mt-2">₹{price}</p>
      </div>
    </div>
  );
}
