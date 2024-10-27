import React from "react";

interface InputFieldProps {
  label: string;
  placeHolder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeHolder }) => (
  <div className="flex flex-col w-full">
    <label htmlFor="" className="text-primary">
      {label}
    </label>
    <input
      type="text"
      name=""
      id=""
      placeholder={placeHolder}
      className="bg-primary placeholder:text-gray-400 px-4 py-2 border-gray-400 outline-none w-full text-secondary"
    />
  </div>
);

const ContactUsForm = () => {
  return (
    <div
      id="contact-form"
      className="max-w-[1200px] w-full mx-auto lg:px-0 px-5"
    >
      <div className="flex gap-10 py-20 lg:flex-nowrap flex-wrap items-center">
        {/* left */}
        <div className="lg:max-w-[40%] max-w-full w-full">
          <h1 className="2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl text-lg text-secondary font-semibold">
            We are here to help
          </h1>
          <p className="lg:text-lg md:text-base text-sm lg:pt-4 pt-1 font-medium text-secondary">
            {`Let's get this conversation started. Tell us a bit about yourself
            and we'll get in touch as soon as we can.`}
          </p>

          <h1 className="lg:text-2xl md:text-xl text-lg font-semibold lg:pt-6 pt-3 text-secondary">
            Looking to learn about careers at OMENTEX?
          </h1>
          <p className="lg:text-lg md:text-base text-sm text-secondary">
            We do not accept applications via this form. To apply for roles,
            please review our portal here.
          </p>
          <div className="flex lg:justify-start justify-center">
            <button className="bg-secondary text-primary px-5 py-2 hover:bg-primary hover:text-secondary border border-secondary mt-8 transition-colors rounded-xl">
              Apply Now
            </button>
          </div>
        </div>
        {/* right */}
        <div className="lg:max-w-[60%] max-w-full w-full bg-secondary px-5 rounded-xl">
          <h1 className="lg:text-3xl md:text-xl text-lg font-semibold lg:pt-6 pt-3 text-primary">
            Contact Us
          </h1>

          <form className="mt-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between lg:gap-9 lg:flex-nowrap flex-wrap">
                <InputField
                  label="First Name *"
                  placeHolder="Enter your first name"
                />
                <InputField
                  label="Last Name *"
                  placeHolder="Enter your last name"
                />
              </div>
              <div className="flex justify-between lg:gap-9 lg:flex-nowrap flex-wrap">
                <InputField
                  label="Email *"
                  placeHolder="Enter your email address"
                />
                <InputField
                  label="Company Name"
                  placeHolder="Enter your company name"
                />
              </div>
              <div className="flex justify-between lg:gap-9 lg:flex-nowrap flex-wrap">
                <div className="flex flex-col w-full">
                  <label className="text-primary">Message *</label>
                  <textarea placeholder="Enter Your Message" className="bg-primary placeholder:text-gray-400 px-4 py-2 border-gray-400 outline-none w-full text-secondary"></textarea>
                </div>
              </div>
            </div>
            <button
              className="bg-primary px-7 py-2 text-center text-secondary mt-14 mb-6 w-full rounded-xl hover:bg-secondary hover:text-primary transition-all border[2px solid #222]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
