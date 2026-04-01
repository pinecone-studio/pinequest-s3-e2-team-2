export const cheatLogTypeDefs = `#graphql
  type CheatLog {
    id: String
    student_id: String
    exam_id: String
    type: String
    event: String
    severity: Int
    metadata: String
    created_at: String
  }

  extend type Query {
    cheatLogs(student_id: String, exam_id: String): [CheatLog]
    cheatLog(id: String!): CheatLog
  }

  extend type Mutation {
    createCheatLog(
      student_id: String!
      exam_id: String!
      type: String!
      event: String!
      severity: Int!
      metadata: String
    ): CheatLog

    updateCheatLog(
      id: String!
      type: String
      event: String
      severity: Int
      metadata: String
    ): CheatLog

    deleteCheatLog(id: String!): Boolean
  }
`;
