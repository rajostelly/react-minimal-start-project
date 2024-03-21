// import { useThemeStore } from "@/store";
// import { ColorEnum } from "./types/colors.enum";
import { logo } from "@/assets";
import { useForm } from "react-hook-form";
import { LoginType } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "@/modules/authentication/pages/login/validation";
import { useNavigate } from "react-router-dom";
import { Input } from "./components/input2";
import { path } from "../../../../constants";
import { ColorEnum } from "./types/colors.enum";

const colorsClass = {
  [ColorEnum.Blue]: "text-blue-500",
  [ColorEnum.Green]: "text-green-500",
  [ColorEnum.Red]: "text-red-500",
  [ColorEnum.White]: "text-white",
};

export const Login = () => {
  // const { theme } = useThemeStore();
  const navigate = useNavigate();

  const form = useForm<LoginType>({
    mode: "onSubmit",
    resolver: yupResolver(loginValidation),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const onSubmit = (data: LoginType) => {
    console.log(data);
    navigate(path.authentication);
  };


  return (
    <div className="bg-grayOpacity flex justify-center items-center h-screen">
      <div className="bg-white shadow px-10 py-5 flex flex-col">
        <img src={logo} alt="youth-computing" className="w-36" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="Entrez votre adresse email"
            register={register("email")}
            error={errors.email?.message}
          />

          <Input
            id="mdp"
            type="password"
            label="Mot de passe"
            placeholder="Entrez votre mot de passe"
            register={register("password")}
            error={errors.password?.message}
          />
          <button
            type="submit"
            className={`block w-full bg-blue ${colorsClass[ColorEnum.Green]} py-1 rounded-sm`}
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};
