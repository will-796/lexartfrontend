export type Session = {
  token: string
  user: {
    id: string
    username: string
    email: string
  }
}