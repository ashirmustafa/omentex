"use client";
import React, { FormEvent, useState } from "react";
import axios from "axios";
import { validateHeaderName } from "http";

interface InputFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeHolder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeHolder,
  value,
  onChange,
  name,
}) => (
  <div className="flex flex-col w-full">
    <label htmlFor="" className="text-secondary">
      {label}
    </label>
    <input
      type="text"
      value={value}
      name={name}
      onChange={onChange}
      id={name}
      placeholder={placeHolder}
      className="bg-white placeholder:text-gray-700 px-4 py-2 border-gray-400 outline-none w-full"
    />
  </div>
);

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const clearInputField = () => {
  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    message: "",
  })
};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const response = await axios.post(
        "http://localhost:3000/api/contact-us",
        formData
      );

      const emailResponse = await axios.post(
        "http://localhost:3000/api/send",
        JSON.parse(formData.email)
      );

      console.log("Form submitted successfully ", formData);
      clearInputField();
    } catch (error) {
      console.log("Error submitting form", error);
    }
  };

  return (
    <div
      id="contact-form"
      className="max-w-[1760px] w-full mx-auto lg:px-0 px-5 bg-secondary"
    >
      <div className="flex gap-10 py-20 lg:flex-nowrap flex-wrap items-center">
        {/* left */}
        <div className="lg:max-w-[40%] max-w-full w-full">
          <h1 className="2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl text-lg text-primary font-semibold">
            We are here to help
          </h1>
          <p className="lg:text-lg md:text-base text-sm lg:pt-4 pt-1 font-medium">
            {`Let's get this conversation started. Tell us a bit about yourself
            and we'll get in touch as soon as we can.`}
          </p>

          <h1 className="lg:text-2xl md:text-xl text-lg font-semibold lg:pt-6 pt-3">
            Looking to learn about careers at OMENTEX?
          </h1>
          <p className="lg:text-lg md:text-base text-sm">
            We do not accept applications via this form. To apply for roles,
            please review our portal here.
          </p>
          <div className="flex lg:justify-start justify-center">
            <button className="bg-primary text-secondary px-5 py-2 hover:bg-secondary hover:text-primary border border-primary mt-8 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
        {/* right */}
        <div className="lg:max-w-[60%] max-w-full w-full bg-primary px-5">
          <h1 className="lg:text-3xl md:text-xl text-lg font-semibold lg:pt-6 pt-3 text-secondary">
            Contact Us
          </h1>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between lg:gap-9 lg:flex-nowrap flex-wrap">
                <InputField
                  name="firstName" // Pass the name prop
                  label="First Name *"
                  placeHolder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <InputField
                name="lastName"  // Pass the name prop
                  label="Last Name *"
                  placeHolder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-between lg:gap-9 lg:flex-nowrap flex-wrap">
                <InputField
                name="companyName"  // Pass the name prop
                  label="Company Name"
                  placeHolder="Enter your company name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-between lg:gap-9 lg:flex-nowrap flex-wrap">
                <InputField
                name="message"  // Pass the name prop
                  label="Message"
                  placeHolder="Enter your message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button
              className="bg-secondary px-7 py-2 text-center text-primary mt-14 mb-6 w-full"
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
