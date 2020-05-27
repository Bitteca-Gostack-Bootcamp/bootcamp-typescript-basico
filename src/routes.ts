import { Request, Response } from 'express'
import createUser from './services/createUser'

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    name: 'Eduardo',
    email: 'biteca@teste',
    password: '123456',
  })
  return res.json({ Message: 'Hello World' })
}
