import { User } from "./components";
import { useGetUsers } from "./../../hooks";

export const Students = () => {
  const { data: users, error } = useGetUsers();

  return (
    <div className="bg-grayOpacity h-screen p-5 flex flex-col">
      <h1 className="text-2xl uppercase">Utilisateurs</h1>

      <div className="flex-1 bg-white mt-3 rounded p-3">
        <div className="flex flex-wrap gap-5">
          {users?.map((user) => (
            <User key={user.id} user={user} />
          ))}

        </div>
      </div>
    </div>
  );
};
