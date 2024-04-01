"use client";
import React, { useEffect, useState } from "react";
import { User } from "../types";
import {
  Card,
  CardBody,
  Spacer,
  Code,
  User as NextUser,
  Button,
  Spinner,
} from "@nextui-org/react";
import Link from "next/link";

export default function RandomUser() {
  const [user, setUser] = useState<User | any>({});
  const url = location.origin + "/random-user";

  useEffect(() => {
    return () => {
      getRandomUser();
    };
  }, []);

  function getRandomUser() {
    fetch("/random-user").then((response: any) => {
      response.json().then((user: User) => {
        setUser(user);
      });
    });
  }

  function copyUrl() {
    navigator.clipboard.writeText(url);
  }

  return (
    <div className="w-full justify-center p-3 flex flex-col items-center">
      <div>
        <Code className="p-2">
          <span className="text-green-200 px-2 bg-green-900 p-1 rounded-md">
            GET
          </span>
          <Link href={url} className="ml-2" target="_blank">
            {url}
          </Link>
        </Code>
        <Button
          onClick={copyUrl}
          color="success"
          size="sm"
          className="ml-2 h-9"
        >
          Copy Url
        </Button>
      </div>
      {user.id ? (
        <div className="flex flex-col gap-4 items-start">
          <NextUser
            name={user.fullname}
            description={user.occupation}
            avatarProps={{ src: user.displayPhoto }}
          />
          <Card isPressable>
            <CardBody>
              <Code className="text-wrap">@{user.username}</Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Age:</strong> {user.age}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Gender:</strong> {user.gender}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Email:</strong> {user.email}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Status:</strong> {user.status}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Address:</strong> {user.address?.street},{" "}
                {user.address?.city}, {user.address?.country},{" "}
                {user.address?.["zip-code"]}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Interests:</strong> {user.interests?.join(", ")}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Bio:</strong> {user.bio}
              </Code>
            </CardBody>
          </Card>
        </div>
      ) : (
        <Spinner size="lg" color="danger" />
      )}
      <Button
        onClick={getRandomUser}
        variant="solid"
        color="warning"
        className="w-full my-5"
      >
        Update
      </Button>
    </div>
  );
}
