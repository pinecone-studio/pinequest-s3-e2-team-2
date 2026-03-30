export const submissionTypeDefs = `#graphql

enum SubmissionStatus {
  in_progress
  submitted
  reviewed
}

  input SubmitExamAnswerInput {
    question_id: String!
    answer_id: String
    text_answer: String
  }

  type Submission {
    id: String
    student_id: String
    exam_id: String
    started_at: String
    submitted_at: String
    status: SubmissionStatus
    attempt_number: Int
    score_auto: Int
    score_manual: Int
    final_score: Int
    answers: [SubmissionAnswer]
    exam: Exam
  }

  extend type Query {
    submissions: [Submission]
    submission(id: String!): Submission
    submissionsByStudent(student_id: String!): [Submission]
    submissionsByStudentEmail(email: String!): [Submission]
    submissionByStudentAndExam(student_id: String!, exam_id: String!): Submission
  }

  extend type Mutation {
    createSubmission(
      student_id: String!
      exam_id: String!
      started_at: String!
      submitted_at: String
      status: SubmissionStatus
      attempt_number: Int
      score_auto: Int
      score_manual: Int
      final_score: Int
    ): Submission

    submitExam(
      student_email: String!
      student_name: String!
      exam_id: String!
      answers: [SubmitExamAnswerInput!]!
      started_at: String
      submitted_at: String
    ): Submission

    updateSubmission(
      id: String!
      student_id: String
      exam_id: String
      started_at: String
      submitted_at: String
      status: SubmissionStatus
      attempt_number: Int
      score_auto: Int
      score_manual: Int
      final_score: Int
    ): Submission
  }
`;
