const topProductKeysFactory = {
  all: ["all"],
  lists: () => [...topProductKeysFactory.all, "lists"],
  list: (filters: object) => [...topProductKeysFactory.lists(), { ...filters }],
};

export default topProductKeysFactory;
