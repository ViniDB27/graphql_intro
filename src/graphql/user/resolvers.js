const user = () => ({
  id: '1',
  userName: 'Vinicio',
});

const users = () => [
  {
    id: '1',
    userName: 'Vinicio',
  },
];

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
