import { TUser } from "@/modules/etudiants/types";
import { Icon } from "@iconify/react";

type UserProps = {
  user: TUser;
};

export const User = (props: UserProps) => {
  const { user } = props;
  const { phone, username, website } = user;

  return (
    <div className="px-3 py-5 w-60 shadow ">
      <h1 className="text-lg">{username}</h1>

      <p className="flex gap-1 items-center">
        <Icon icon="mdi:phone-outline" className="" />
        <span className="opacity-70">{phone}</span>
      </p>

      <p className="flex gap-1 items-center">
        <Icon icon="ion:logo-chrome-outline" className="" />
        <span className="opacity-70">{website}</span>
      </p>
    </div>
  );
};
