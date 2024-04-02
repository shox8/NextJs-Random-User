"use client";
import { useEffect, useState } from "react";
import { User } from "../types";
import Url from "../components/Url";

export default function UsersById() {
  const [user, setUser] = useState<User>();
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const path = "/api/users/1";

  useEffect(() => {
    return () => {
      fetch(path)
        .then((response) => {
          response.json().then((user: User) => {
            setUser(user);
          });
        })
        .finally(() => setLoading(false));
    };
  });

  return (
    <div className="w-full justify-center p-3 flex flex-col items-center gap-5">
      <Url path={path} />
    </div>
  );
}
