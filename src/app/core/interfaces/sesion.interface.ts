import { IUser } from "./usuario.interface";

export interface ISession{
  expiresIn: string;
  token?: string;
}

export interface IMeData{
  status: boolean;
  message?: string;
  user?: IUser;
}
