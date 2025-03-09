import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="py-20 text-center">
      <h2 className="text-4xl font-bold text-green-600">
        Order Placed Successfully!
      </h2>
      <p className="mt-4 text-lg">
        Thank you for your order. You will receive a confirmation email shortly.
      </p>
      <Link to={"/"} className="mt-6 text-sky-600 underline">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default SuccessPage;
