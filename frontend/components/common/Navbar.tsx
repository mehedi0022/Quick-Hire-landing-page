import Image from "next/image";
import navcontent from "../../data/content/navbar.json";

const Navbar = () => {
  return (
    <nav className="h-19.5 container mx-auto px-31 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div>
            <Image
              src={navcontent.logo.src}
              alt={navcontent.logo.alt}
              width={32}
              height={32}
            />
          </div>
          <div>
            <h1 className="text-2xl font-Epilogue font-bold text-gray-800">
              {navcontent.logo.name}
            </h1>
          </div>
        </div>

        <div>
          <ul className="flex space-x-6">
            {navcontent.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="text-[#515B6F] hover:text-blue-600 px-3 py-2 font-Epilogue font-medium rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="font-Epilogue font-bold text-[#4640DE]">
          {navcontent.cta.secondary.name}
        </button>
        <div className="h-8 w-px bg-gray-300"></div>
        <button className="font-Epilogue font-bold bg-[#4640DE] text-white px-4 py-2 hover:bg-blue-700">
          {navcontent.cta.primary.name}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
