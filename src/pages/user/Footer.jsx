import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-custom-primary p-10 text-white">
      <div className="mx-10">
        <div className="flex flex-row justify-between px-10 pb-32 pt-20">
          <div className="w-1/3">
            <h2 className="text-xl font-semibold">CNC AESTHETIC PRODUCTS</h2>
            <p className="mt-2 text-slate-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas in
              possimus fugit earum blanditiis debitis, iure animi laborum quod
              magnam.
            </p>
          </div>
          <div className="flex w-1/3 flex-row justify-between">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Brand</h2>
              <Link to={"/about"} className="hover:text-sky-600">
                About Us
              </Link>
              <Link to={"/contact"} className="hover:text-sky-600">
                Contact
              </Link>
              <Link className="hover:text-sky-600"></Link>
            </div>

            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Store</h2>
              <Link className="hover:text-sky-600">Instagram</Link>
              <Link className="hover:text-sky-600">Facebook</Link>
              <Link className="hover:text-sky-600">Twitter</Link>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-lg font-semibold">Social Media</h2>

              <Link className="transition-transform hover:scale-110 hover:transform hover:text-sky-600">
                <img src="/assets/sm_icons/telegram-3-24.ico" alt="" />
              </Link>
              <Link className="transition-transform hover:scale-110 hover:transform hover:text-sky-600">
                <img src="/assets/sm_icons/linkedin-3-24.ico" alt="" />
              </Link>
              <Link className="transition-transform hover:scale-110 hover:transform hover:text-sky-600">
                <img src="/assets/sm_icons/twitter-x-24.ico" alt="" />
              </Link>
              <Link className="transition-transform hover:scale-110 hover:transform hover:text-sky-600">
                <img src="/assets/sm_icons/facebook-5-24.ico" alt="" />
              </Link>
              {/* <Link className="transition-transform hover:scale-110 hover:transform hover:text-sky-600">
                <img src="/assets/sm_icons/instagram-6-24.ico" alt="" />
              </Link> */}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between border-t border-slate-500 pt-3 text-sm text-slate-300">
          <div>Copyright @ 2024, All rights reserved</div>
          <div className="flex space-x-4">
            <p>Terms & conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
