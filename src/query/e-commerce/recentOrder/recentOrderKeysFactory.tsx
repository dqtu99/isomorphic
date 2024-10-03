const recentOrderKeysFactory = {
  all: ["recent-order/all"],
  lists: () => [...recentOrderKeysFactory.all, "lists"],
  list: (filters: object) => [
    ...recentOrderKeysFactory.lists(),
    { ...filters },
  ],
};

export default recentOrderKeysFactory;
