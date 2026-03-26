export type SubmissionStatus = "Хүлээгдэж байна" | "Дүгнэгдсэн";

export type RubricCriterion = {
  id: string;
  name: string;
  description: string;
  maxScore: number;
  score: number;
};

export type EssayQuestion = {
  id: number;
  question: string;
  studentAnswer: string;
  rubric: RubricCriterion[];
  feedback: string;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  initials: string;
  submittedAt: string; // e.g. "5м өмнө"
  status: SubmissionStatus;
  mcScore: number;
  mcTotal: number;
  essays: EssayQuestion[];
};

export type ClassCourse = {
  id: string;
  code: string;
  name: string;
  assignmentLabel: string;
  pending: number;
  graded: number;
  total: number;
};
