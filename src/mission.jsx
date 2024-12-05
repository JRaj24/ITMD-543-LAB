export default function Mission() {
  return (
    <div id="About">
      <div className="bg-[#f2c48b] flex flex-col justify-around md:flex-row min-h-[500px] py-10">
        {/* Heading Section */}
        <div className="flex flex-col items-center mt-10 md:mt-20 md:max-w-lg mx-auto"> {/* Center aligned and consistent width */}
          <h1 className="text-4xl md:text-7xl text-center font-normal uppercase text-black">
            More things that
          </h1>
          <h1 className="text-4xl md:text-7xl text-center uppercase text-[#594024] font-semibold">
            you can fix.
          </h1>
        </div>

        {/* Paragraph Section */}
        <div className="flex flex-col justify-center items-center mt-6 md:mt-20 md:max-w-lg mx-auto"> {/* Same width and alignment */}
          <p className="text-justify font-medium text-xl md:text-2xl mb-10">
            We believe self-care should nurture not just individuals,
            but also the world we share. Every routine, every choice,
            and every product can contribute to a cleaner, healthier planet.
            By embracing sustainable practices and thoughtful innovation,
            we empower people to make a difference—starting with their daily habits.
          </p>
        </div>
      </div>
      <img
        src="/images/footer.png"
        alt=""
        className="w-[80%] mx-auto my-5 md:w-[100%]"
      />
    </div>
  );
}
