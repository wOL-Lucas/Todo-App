import { User } from "@types/User";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  
  const errors:Error = {};

  
  if(!data.email){
    errors.email = "*Email is required";
  }

  if(!data.password){
    errors.password = "*Password is required";
  }

  return errors;
};
