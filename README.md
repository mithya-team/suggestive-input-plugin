# React Dynamic Form Library

A flexible and dynamic form library for React, featuring a generic form component capable of rendering various input types, including custom dynamic inputs. Built with accessibility and extensibility in mind.

## Features

- **Dynamic Form Fields**: Render various input types based on provided configurations.
- **Custom Input Types**: Easily extend with custom input types.
- **Form State Management**: Integrated with `react-hook-form` for robust form state management and validation.
- **Accessibility**: Inputs come with basic ARIA attributes and can be further customized for accessibility.
- **Controlled Components**: Manage and manipulate form inputs dynamically from parent components.

## Installation

Install the package using npm or yarn:

```bash
npm install git+https://github.com/mithya-team/react-form-plugin.git
```

or

```bash
yarn add git+https://github.com/mithya-team/react-form-plugin.git
```

## Usage

Integrating and utilizing the `ReactForm` component in your React application is straightforward. Follow these steps to render and manage forms dynamically.

### Basic Form Setup

Here's a basic example to get you started:

```tsx
import React from "react";
import { ReactForm } from "react-form-plugin";

const MyForm = () => {
  const fieldsInput = [
    { type: "text", name: "name", label: "Name" },
    // ...add other field configurations
  ];

  const onSubmit = (data) => {
    // Handle form submission data
    console.log(data);
  };

  return <ReactForm fieldsInput={fieldsInput} onSubmit={onSubmit} />;
};

export default MyForm;
```

### Validation

Example showing validation with zod

```tsx
import React, { useState } from "react";
import { FieldInput, ReactForm } from "react-form-plugin";
// import validation library
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  emailId: z.string().email("Invalid email format").min(1, "Email is required"),
  gender: z.enum(["male", "female", "trans"], {
    required_error: "Gender is required",
  }),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  { type: "text", name: "name", label: "Name", defaultValue: "Ram" },
  { type: "email", name: "emailId", label: "Email ID" },
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
];

const UserDetailsForm: React.FC = () => {
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <ReactForm
        fieldsInput={fieldsInput}
        onSubmit={onSubmit}
        resolver={zodResolver(schema)}
      />
      <button onClick={logFormValues}>Log Form Values</button>
    </div>
  );
};

export default UserDetailsForm;
```

### Conditional Update

Use conditions to update the field props

```tsx
import React from "react";
import { FieldInput, ReactForm } from "react-form-plugin";

// Define the form fields
const fieldsInput: FieldInput[] = [
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
    type: "select",
    name: "favouritePokemon",
    label: "Favourite Pokemon",
    options: [
      { value: "pik", label: "Pikachu" },
      { value: "char", label: "Charmander" },
      { value: "saiduck", label: "Saiduck" },
    ],
    inputProps: { disabled: true },
    conditions: [
      {
        when: (formValues) => {
          return formValues["gender"] === "male";
        },
        then: () => {
          return { inputProps: { disabled: false } };
        },
      },
    ],
  },
];

const UserDetailsForm: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <ReactForm fields={fieldsInput} onSubmit={onSubmit} />
    </div>
  );
};

export default UserDetailsForm;
```

### Extending Custom Input Types

Add custom input types by extending the input component map:

```tsx
import { addtype } from "react-form-plugin";
import MyCustomInput from "./MyCustomInput";

addtype("myCustom", MyCustomInput);
```

## API Reference

Below is the API reference for the ReactForm component and its associated input types.

### ReactForm

A flexible and dynamic form component that renders based on provided field configurations.

#### Props

- fieldsInput: Array of field configuration objects
- onSubmit: Function to handle form submission.
- onGetValues: Function to expose the getValues method from react-hook-form
- classes: CSS Classes for styling
- resolver: Use any validation library supported by `react-hook-form`

### Field Configuration

Defines how each field in the form should be rendered and behave.

#### Properties

- type: Defines the type of input (e.g., 'text', 'checkbox', 'radio').
- name: A unique identifier for the form field.
  label (optional): Display label for the form field.

Additional properties for validation, aria attributes, and other custom behaviors.

### File config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  file: z.any().refine((files) => files?.length == 1, "Image is required."),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    inputType: "file",
    name: "file",
    label: "file",
  },
];
```

### date and time config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  time: z.string(),
  date: z.string(),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    inputType: "time",
    name: "time",
    label: "Time",
    defaultValue: true,
  },

  {
    inputType: "date",
    name: "date",
    label: "Date",
    defaultValue: true,
  },
];
```
