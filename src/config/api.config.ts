export const apiUrls = {
  todos: {
    list: "/todos",
    add: "/todos/add",
    todo: (id: number) => `/todos/${id}`,
  },
};
