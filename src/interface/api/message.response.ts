export interface MessageResponse {
  id: string;
  created_at: number;
  user: User;
  message: string;
  is_new: boolean;
}

export interface User {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  you: boolean;
}
