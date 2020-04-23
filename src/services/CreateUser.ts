interface techObject {
  title: string;
  experience: number;
}

interface createUserData {
  name?: string;
  email: string;
  password: string | number;
  techs: Array<string | techObject>;
  // techs: string[];
}

// destrucuturing the function input
export default function createUser({
  name = "",
  email,
  password,
  techs,
}: createUserData) {
  const user = { name, email, password, techs };

  return user;
}
