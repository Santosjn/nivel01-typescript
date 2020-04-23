import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "John",
    email: "email123@email.com",
    password: "342433",
    techs: ["React Native", { title: "Javascript", experience: 100 }],
  });

  return response.json({ message: "Hello World!" });
}
