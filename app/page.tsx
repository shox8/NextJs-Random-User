"use client";
import React, { useEffect, useState } from "react";
import { User } from "./types";
import {
  Avatar,
  Card,
  CardBody,
  Spacer,
  Chip,
  CircularProgress,
} from "@nextui-org/react";

export default function Home() {
  const [user, setUser] = useState<User | any>({});

  useEffect(() => {
    return () => {
      fetch("/random-user").then((response: any) => {
        response.json().then((user: User) => {
          setUser(user);
        });
      });
    };
  }, []);

  return (
    <main className="h-screen flex justify-center items-center">
      {user.id ? (
        <Card isPressable>
          <CardBody className="flex">
            <Avatar src={user.displayPhoto} size="lg" />
            <div>
              <Spacer y={2} />
              <Chip variant="dot">{user.fullname}</Chip>
              <Spacer y={1} />
              <Chip variant="dot">@{user.username}</Chip>
              <Spacer y={2} />
              <Chip>
                <strong>Age:</strong> {user.age}
              </Chip>
              <Spacer y={1} />
              <Chip>
                <strong>Gender:</strong> {user.gender}
              </Chip>
              <Spacer y={1} />
              <Chip>
                <strong>Email:</strong> {user.email}
              </Chip>
              <Spacer y={1} />
              <Chip>
                <strong>Occupation:</strong> {user.occupation}
              </Chip>
              <Spacer y={1} />
              <Chip>
                <strong>Status:</strong> {user.status}
              </Chip>
              <Spacer y={1} />
              <Chip>
                <strong>Address:</strong> {user.address?.street},{" "}
                {user.address?.city}, {user.address?.country},{" "}
                {user.address?.["zip-code"]}
              </Chip>
              <Spacer y={1} />
              <Chip>
                <strong>Interests:</strong> {user.interests?.join(", ")}
              </Chip>
              <Spacer y={1} />
              <Chip>
                <strong>Bio:</strong> {user.bio}
              </Chip>
            </div>
          </CardBody>
        </Card>
      ) : (
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            track: "stroke-white/10",
          }}
          strokeWidth={4}
          color="danger"
        />
      )}
    </main>
  );
}
