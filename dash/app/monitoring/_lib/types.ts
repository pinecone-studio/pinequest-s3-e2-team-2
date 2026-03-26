export type StudentStatus = "online" | "offline" | "submitted";

export type Student = {
  id: number;
  name: string;
  email: string;
  className: string;
  status: StudentStatus;
  currentQuestion: number;
  totalQuestions: number;
  submittedMinutesAgo?: number;
  tabSwitches: number;
};
