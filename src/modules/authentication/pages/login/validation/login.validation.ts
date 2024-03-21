import { LoginType } from "./../types";
import * as yup from "yup";

export const loginValidation: yup.ObjectSchema<LoginType> = yup.object({
  email: yup
    .string()
    .email("Veuillez entrer un adresse email valide")
    .required("L'adresse email est obligatoire"),
  // password: yup.string().required("Le mot de passe est obligatoire"),
  password : yup.string().required("")
});

















