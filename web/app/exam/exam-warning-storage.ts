export const getExamWarningSessionStorageKey = (examId: string) =>
  `exam-warning-session:${examId}`;

export const getExamWarningStateStorageKey = (examId: string) =>
  `exam-warning-state:${examId}`;
