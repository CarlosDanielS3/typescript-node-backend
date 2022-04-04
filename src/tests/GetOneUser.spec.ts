import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Carlos Daniel'

  expect(user.name).toEqual('Carlos Daniel')
})
