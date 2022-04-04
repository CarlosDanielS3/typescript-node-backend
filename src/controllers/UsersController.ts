import { User } from '@models/User'

export async function getOneUser (id: string): Promise<User> {
  const user = new User(id, "Carlos Daniel", "gordonkoerich@gmail.com")
  return user
}