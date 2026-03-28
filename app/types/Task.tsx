export type Task = {
  id: string;
  title: string;
  description: string;
  status: "Todo" | "In Progress" | "Completed";
  dueDate: string;
};