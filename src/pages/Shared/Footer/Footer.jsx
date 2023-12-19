import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white py-6 px-12 md:px-20">
        <div className="flex justify-evenly items-center">
          <div>
            <Link to="/">
              <img
                className="w-20 rounded-full"
                src="../../../../public/logo.png"
                alt=""
              />
            </Link>
          </div>
          <h3 className="md:text-xl mx-4 font-semibold">Follow Us With</h3>
          <div className="flex gap-6">
            <Link>
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
                alt=""
              />
            </Link>
            <Link>
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
                alt=""
              />
            </Link>
            <Link>
              <img
                className="h-12 rounded"
                src="https://img.freepik.com/free-psd/discord-logo-3d-social-media-icon-isolated_47987-11941.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 text-start">
          <div className="flex flex-col ">
            <p className="text-orange-500 font-semibold py-6">COMPANY</p>
            <Link>About</Link>
            <Link className="my-1">Careers</Link>
            <Link>Brand Center</Link>
            <Link className="my-1"> Blog</Link>
          </div>
          <div className="flex flex-col ">
            <p className="text-orange-500 font-semibold py-6">HELP CENTER</p>
            <Link>Discord Server</Link>
            <Link className="my-1">Twitter</Link>
            <Link>Facebook</Link>
            <Link className="my-1"> Contact Us</Link>
          </div>
          <div className="flex flex-col ">
            <p className="text-orange-500 font-semibold py-6">ADDRESS</p>
            <p></p>555 4th 5t NW, <br /> Washington DC
            <p> +88 01750 234 567</p>
            <p>toyworld@gmail.com</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-orange-500 font-semibold py-6">DOWNLOAD</p>
            <Link>iOS</Link>
            <Link className="my-1">Android</Link>
            <Link>Windows</Link>
            <Link className="my-1"> MacOS</Link>
          </div>
        </div>
        <p className="text-center my-4">
          <small>Copyright © 2023 LensMasters Academy</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
