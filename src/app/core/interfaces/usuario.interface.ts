export interface IUser{
  id?: string;
  Nombre?: string;
  Apellido?: string;
  password?: string;
  userName: string;
}

export const defaultUser = {
  id: "User ID",
  username: "Username",
  role: "CLIENT"
}
