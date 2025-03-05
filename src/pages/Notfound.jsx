import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="border-red flex h-screen flex-col items-center justify-center">
      <Link to="/">Home</Link>
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <img
        className="h-[600px] border-none"
        src="/404 Error-rafiki.svg"
        alt=""
      />
    </div>
  );
};

export default Notfound;
