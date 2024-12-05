export default function Footer() {
  return (
    <div className="flex justify-center items-center flex-col text-center bg-white py-6 md:py-4 md:justify-start md:items-start">
      <div className="flex flex-col md:justify-between md:flex-row md:space-x-40">
        <img src="/images/logo.png" alt="Logo" className="h-30 mt-8 w-60 pl-2" />
      </div>

      <div className="flex flex-col md:flex-row mt-2">
        <div className="group">
          <a className="text-black font-semibold" href="#">
            Home
          </a>
          <div className="my-2 h-1 mx-auto w-10 group-hover:border-b-2 md:mx-5 group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <a className="text-black font-semibold" href="#About">
            About
          </a>
          <div className="my-2 h-1 mx-auto w-10 group-hover:border-b-2 md:mx-5 group-hover:border-rounded group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <a className="text-black font-semibold" href="#Product">
            Products
          </a>
          <div className="my-2 h-1 mx-auto w-10 group-hover:border-b-2 md:mx-5 group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <a className="text-black font-semibold" href="#">
            Support
          </a>
          <div className="my-2 h-1 mx-auto w-10 group-hover:border-b-2 md:mx-5 group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <a className="text-black font-semibold" href="#">
            Terms & Condition
          </a>
          <div className="my-2 h-1 mx-auto w-10 group-hover:border-b-2 md:mx-5 hover:border-rounded group-hover:border-blue-50"></div>
        </div>
      </div>
    </div>
  );
}
