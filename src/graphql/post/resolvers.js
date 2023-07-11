const post = () => ({
  id: '1',
  title: 'Title',
  text: 'Text',
});

const posts = () => [
  {
    id: '1',
    title: 'Title',
    text: 'Text',
  },
];

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
