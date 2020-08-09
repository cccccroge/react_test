import { createContext } from "react";

/* emulate data storage from server */
export const data_storage = {
  categories: ["daily", "art", "programming"],
  current_category: "",
  tasks: [
    {
      name: "eat",
      description: "I should eat",
      deadline: new Date(2020, 8, 15),
      category: "daily",
      priority: "medium",
    },
    {
      name: "shit",
      description: "I should shit",
      deadline: new Date(2020, 8, 20),
      category: "daily",
      priority: "low",
    },
    {
      name: "cao",
      description: "I should cao",
      deadline: new Date(2020, 9, 13),
      category: "daily",
      priority: "high",
    },
  ],
};

export const ToDoListContext = createContext(null);
