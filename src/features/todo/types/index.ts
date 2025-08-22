export type TodoResponse = {
  id: number | string;
  todo: string;
  completed: boolean;
  userId: number;
};

export const DND_TYPES = { TODO: "TODO" } as const;
