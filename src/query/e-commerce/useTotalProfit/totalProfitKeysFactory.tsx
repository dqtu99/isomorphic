const topProductKeysFactory = {
  all: ["profit/all"],
  lists: () => [...topProductKeysFactory.all, "lists"],
  list: () => [...topProductKeysFactory.lists(), "profit"],
};

export default topProductKeysFactory;
