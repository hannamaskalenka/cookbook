export const AuthServiceMock = {
  login: jest.fn().mockResolvedValue({ access_token: 'token' }),
  hashPassword: jest.fn(),
};

export const UsersServiceMock = {
  getUser: jest.fn().mockResolvedValue({
    username: 'John',
    id: 'someid',
    email: 'email@email.com',
    password: 'passwords',
  }),
  createUser: jest.fn(),
};

export const jwtServiceMock = {
  sign: jest.fn(),
};
