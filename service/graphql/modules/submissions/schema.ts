export const submissionTypeDefs = `#graphql

enum SubmissionStatus {
  in_progress
  submitted
  reviewed
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
  }

  extend type Query {
    submissions: [Submission]
    submission(id: String!): Submission
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
