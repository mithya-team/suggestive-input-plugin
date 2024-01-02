import {
  FieldInput,
  Field,
  SwitchInputProps,
  CountryPhoneNumberInputProps,
  OtpInputProps,
} from "./@types";
import ReactForm from "./ReactForm";
import {
  addInputType,
  getInputComponent,
} from "./components/InputComponentsMap";
import OtpInput from "./components/Otp";
import CountryPhoneNumberInput from "./components/PhoneNumber";
import SwitchInput from "./components/SwitchInput";

// Dynamically adding switch component and overriding type
type FormFields =
  | FieldInput
  | Field<"switch", SwitchInputProps>
  | Field<"country-phone-number", CountryPhoneNumberInputProps>
  | Field<"otp", OtpInputProps>;

addInputType("switch", SwitchInput);
addInputType("country-phone-number", CountryPhoneNumberInput);
addInputType("otp", OtpInput);

export { ReactForm, addInputType, getInputComponent };
export type { FieldInput, FormFields };
