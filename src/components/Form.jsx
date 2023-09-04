import { useState } from "react";
import { illustration, illustrationMobile, successList } from "../assets";
import validator from "validator";

const emailValidation = (str) => {
  if (!validator.isEmail(str)) {
    return "Valid email required";
  } else {
    return "";
  }
};

const EmailSubmission = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    if (emailValidation(e.target.value).length !== 0) {
      setError(emailValidation(e.target.value));
    } else {
      setError("");
    }
    setEmail(e.target.value);
  };

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <label
            htmlFor="email"
            className="text-dark-slate-gray lg:text-[13px] text-[11px] font-semibold"
          >
            Email address
          </label>
          {error.length !== 0 ? (
            <p className="text-[13px] font-semibold text-tomato text-right">
              {error}
            </p>
          ) : (
            <></>
          )}
        </div>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          className={`outline-none ${
            error.length !== 0
              ? "focus:border-tomato bg-tomato-alpha placeholder-tomato text-tomato"
              : "focus:border-black"
          } text-black border-gray-300 border lg:text-base text-[13px] p-3 rounded-[7px]`}
          autoComplete="off"
          placeholder="email@company.com"
          onChange={handleChange}
        />
      </div>
      <button
        className="lg:text-base text-[13px] hover-gradient bg-dark-slate-gray p-3 rounded-[7px] outline-none border-none text-white"
        type="submit"
      >
        Subscribe to monthly newsletter
      </button>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const Form = ({ setSuccess, setEmail }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (emailValidation(email).length === 0) {
      setSuccess(true);
      setEmail(email);
    }
  };

  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:grid flex lg:grid-cols-2 flex-col-reverse lg:gap-8 gap-5 bg-white lg:shadow-xl lg:max-w-[750px] max-w-[370px] lg:pl-10 pl-0 lg:pr-5 pr-0 lg:py-8 py-0 lg:rounded-[30px] rounded-none"
    >
      <div className="lg:p-0 px-6 pb-10 flex flex-col gap-5 justify-center">
        <h1 className="text-dark-slate-gray font-semibold lg:text-5xl text-3xl">
          Stay updated!
        </h1>
        <p className="text-charcoal-gray lg:text-sm text-[13px]">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="flex flex-col gap-3">
          {list.map((el, i) => (
            <li key={i} className="flex gap-2 items-center lg:text-sm text-[13px]">
              <img className="w-5" src={successList} alt="success" />
              <p>{el}</p>
            </li>
          ))}
        </ul>
        <EmailSubmission />
      </div>
      <div>
        <img
          src={illustration}
          className="lg:block hidden rounded-none"
          alt="Illustration"
        />
        <img
          src={illustrationMobile}
          className="w-full lg:hidden block rounded-none"
          alt="Illustration"
        />
      </div>
    </form>
  );
};

export default Form;
