import { createContext } from "react";

/* emulate data storage from server */
export const data_storage = {
  categories: ["daily", "art", "programming"],
  tasks: [
    {
      name: "eat",
      description: "I should eat",
      deadline: null,
      category: "daily",
    },
    {
      name: "shit",
      description: "I should shit",
      deadline: null,
      category: "daily",
    },
    {
      name: "cao",
      description: "I should cao",
      deadline: null,
      category: "daily",
    },
  ],
};

export const ToDoListContext = createContext(null);
