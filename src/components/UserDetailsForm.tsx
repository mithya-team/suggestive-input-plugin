import React from "react";
import { FormFields, ReactForm } from "../../lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(6, "Address is required"),
  emailId: z.string().email("Invalid email format").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  mobileNumber: z.string().min(1, "Mobile number is required"),
  gender: z.enum(["male", "female", "trans"], {
    required_error: "Gender is required",
  }),
  favouriteDish: z
    .array(z.string())
    .nonempty("Select at least one favourite dish")
    .optional(), // mark the field as optional if conditional rendering is applied
  favouritePokemon: z
    .enum(["pik", "char", "saiduck"], {
      required_error: "Pokemons is required",
    })
    .optional(), // mark the field as optional if conditional rendering is applied
  preferredTheme: z.boolean({ invalid_type_error: "value should be boolean" }),
  time: z.string(),
  date: z.string(),
  file: z.any().refine((files) => files?.length == 1, "Image is required."),
  phoneOtp: z.string(),
  countryPhoneNumber: z.string(),
});

// Define the form fields
const fieldsInput: FormFields[] = [
  {
    type: "text",
    name: "name",
    label: "Name",
    defaultValue: "Ram",
    inputProps: { disabled: true },
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    defaultValue: "8, Dasrath Palace, Ayodhya",
  },
  { type: "email", name: "emailId", label: "Email ID" },
  { type: "text", name: "mobileNumber", label: "Mobile Number" },
  { type: "tel", name: "phoneNumber", label: "Phone Number" },
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "trans", label: "Transgender" },
    ],
  },
  {
    type: "checkbox",
    name: "favouriteDish",
    label: "Favourite Dish",
    options: [
      { value: "rice", label: "Rice" },
      { value: "pizza", label: "Pizza" },
      { value: "burger", label: "Burger" },
    ],
    hide: true,
    defaultValue: ["rice"],
    conditions: [
      {
        when: (formValues) => {
          return formValues["gender"] === "female";
        },
        then: () => {
          return { hide: false };
        },
      },
    ],
  },
  {
    type: "select",
    name: "favouritePokemon",
    label: "Favourite Pokemon",
    options: [
      { value: "pik", label: "Pikachu" },
      { value: "char", label: "Charmander" },
      { value: "saiduck", label: "Saiduck" },
    ],
    hide: false,
    inputProps: { disabled: true },
    conditions: [
      {
        when: (formValues) => {
          return formValues["gender"] === "male";
        },
        then: () => {
          return { hide: false, inputProps: { disabled: false } };
        },
      },
    ],
  },
  {
    type: "switch",
    name: "preferredTheme",
    label: "Dark Theme",
    defaultValue: true,
  },
  {
    type: "time",
    name: "time",
    label: "Time",
  },
  {
    type: "date",
    name: "date",
    label: "Date",
  },
  {
    type: "file",
    name: "file",
    label: "file",
  },
  {
    type: "plainText",
    name: "plainHelperText",
    text: "we know each other",
  },
  {
    type: "country-phone-number",
    name: "countryPhoneNumber",
  },
  {
    type: "otp",
    name: "phoneOtp",
    length: 6,
  },
];

const UserDetailsForm: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <ReactForm
      fields={fieldsInput}
      onSubmit={onSubmit}
      validation={zodResolver(schema)}
    />
  );
};

export default UserDetailsForm;
