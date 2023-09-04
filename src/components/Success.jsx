import { success } from "../assets";

// eslint-disable-next-line react/prop-types
const Success = ({ email }) => {
  return (
    <div className="lg:h-min h-screen flex flex-col lg:justify-start justify-center gap-5 bg-white lg:shadow-xl max-w-[400px] lg:px-12 lg:mx-0 mx-8 lg:py-8 p-0 lg:rounded-[30px] rounded-none">
      <img src={success} alt="Success icon" className="w-[48px] h-[48px]" />
      <h1 className="mt-4 text-dark-slate-gray font-semibold lg:text-5xl text-3xl">
        Thanks for subscribing!
      </h1>
      <p className="lg:text-sm text-[13px] text-charcoal-gray">
        A confirmation email has been sent to{" "}
        <span className="font-semibold">{email}</span>. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 hover-gradient lg:text-base text-[13px] bg-dark-slate-gray p-3 rounded-[7px] outline-none border-none text-white"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default Success;
