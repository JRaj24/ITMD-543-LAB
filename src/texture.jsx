export default function () {
  return (
    <div>
      <div className="p-3 m-3 flex flex-col justify-center items-center relative">
        <div className="relative mt-32 md:mb-28 max-w-2xl">
          <img src="/images/texture.jpg" alt="" className="" />
        </div>
        <h1 className="text-6xl mt-10 text-center mx-auto text-[#c49358] uppercase font-semibold absolute top-0 left-0 right-0 md:top-8">
          Soothing Texture
        </h1>
        <img
          src="/images/smooth2.webp"
          alt=""
          className="absolute w-48 top-12 -right-3 hidden md:flex rounded-tl-full rounded-bl-full"
        />

        <h2 className="text-[#c49358] max-w-xs mt-8 mx-10 md:absolute md:right-0 md:top-80">
        "Summer's ultimate skin and lip serum, crafted for healthy, 
        radiant skin. No secrets, no opacity—just full transparency with a
        complete list of ingredients and their precise concentrations."
        </h2>
        <h2 className="text-[#c49358] max-w-xs mt-8 mx-10 md:absolute md:left-0 md:top-60">
          Win your battle against acne, blemishes and an uneven skin tone with
          our clean and transparent approach. Keep it real!
        </h2>
      </div>
    </div>
  );
}
