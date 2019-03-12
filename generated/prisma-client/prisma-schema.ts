export const typeDefs = /* GraphQL */ `type AggregateSurveyRecord {
  count: Int!
}

type AggregateWechatOfficalAccount {
  count: Int!
}

type AggregateWechatUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Json

scalar Long

type Mutation {
  createSurveyRecord(data: SurveyRecordCreateInput!): SurveyRecord!
  updateSurveyRecord(data: SurveyRecordUpdateInput!, where: SurveyRecordWhereUniqueInput!): SurveyRecord
  updateManySurveyRecords(data: SurveyRecordUpdateManyMutationInput!, where: SurveyRecordWhereInput): BatchPayload!
  upsertSurveyRecord(where: SurveyRecordWhereUniqueInput!, create: SurveyRecordCreateInput!, update: SurveyRecordUpdateInput!): SurveyRecord!
  deleteSurveyRecord(where: SurveyRecordWhereUniqueInput!): SurveyRecord
  deleteManySurveyRecords(where: SurveyRecordWhereInput): BatchPayload!
  createWechatOfficalAccount(data: WechatOfficalAccountCreateInput!): WechatOfficalAccount!
  updateWechatOfficalAccount(data: WechatOfficalAccountUpdateInput!, where: WechatOfficalAccountWhereUniqueInput!): WechatOfficalAccount
  updateManyWechatOfficalAccounts(data: WechatOfficalAccountUpdateManyMutationInput!, where: WechatOfficalAccountWhereInput): BatchPayload!
  upsertWechatOfficalAccount(where: WechatOfficalAccountWhereUniqueInput!, create: WechatOfficalAccountCreateInput!, update: WechatOfficalAccountUpdateInput!): WechatOfficalAccount!
  deleteWechatOfficalAccount(where: WechatOfficalAccountWhereUniqueInput!): WechatOfficalAccount
  deleteManyWechatOfficalAccounts(where: WechatOfficalAccountWhereInput): BatchPayload!
  createWechatUser(data: WechatUserCreateInput!): WechatUser!
  updateWechatUser(data: WechatUserUpdateInput!, where: WechatUserWhereUniqueInput!): WechatUser
  updateManyWechatUsers(data: WechatUserUpdateManyMutationInput!, where: WechatUserWhereInput): BatchPayload!
  upsertWechatUser(where: WechatUserWhereUniqueInput!, create: WechatUserCreateInput!, update: WechatUserUpdateInput!): WechatUser!
  deleteWechatUser(where: WechatUserWhereUniqueInput!): WechatUser
  deleteManyWechatUsers(where: WechatUserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  surveyRecord(where: SurveyRecordWhereUniqueInput!): SurveyRecord
  surveyRecords(where: SurveyRecordWhereInput, orderBy: SurveyRecordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SurveyRecord]!
  surveyRecordsConnection(where: SurveyRecordWhereInput, orderBy: SurveyRecordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SurveyRecordConnection!
  wechatOfficalAccount(where: WechatOfficalAccountWhereUniqueInput!): WechatOfficalAccount
  wechatOfficalAccounts(where: WechatOfficalAccountWhereInput, orderBy: WechatOfficalAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WechatOfficalAccount]!
  wechatOfficalAccountsConnection(where: WechatOfficalAccountWhereInput, orderBy: WechatOfficalAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WechatOfficalAccountConnection!
  wechatUser(where: WechatUserWhereUniqueInput!): WechatUser
  wechatUsers(where: WechatUserWhereInput, orderBy: WechatUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WechatUser]!
  wechatUsersConnection(where: WechatUserWhereInput, orderBy: WechatUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WechatUserConnection!
  node(id: ID!): Node
}

type Subscription {
  surveyRecord(where: SurveyRecordSubscriptionWhereInput): SurveyRecordSubscriptionPayload
  wechatOfficalAccount(where: WechatOfficalAccountSubscriptionWhereInput): WechatOfficalAccountSubscriptionPayload
  wechatUser(where: WechatUserSubscriptionWhereInput): WechatUserSubscriptionPayload
}

type SurveyRecord {
  id: ID!
  htmlId: String!
  openid: String!
  questionSelected: Json!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: String
}

type SurveyRecordConnection {
  pageInfo: PageInfo!
  edges: [SurveyRecordEdge]!
  aggregate: AggregateSurveyRecord!
}

input SurveyRecordCreateInput {
  htmlId: String!
  openid: String!
  questionSelected: Json!
  deletedAt: String
}

type SurveyRecordEdge {
  node: SurveyRecord!
  cursor: String!
}

enum SurveyRecordOrderByInput {
  id_ASC
  id_DESC
  htmlId_ASC
  htmlId_DESC
  openid_ASC
  openid_DESC
  questionSelected_ASC
  questionSelected_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
}

type SurveyRecordPreviousValues {
  id: ID!
  htmlId: String!
  openid: String!
  questionSelected: Json!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: String
}

type SurveyRecordSubscriptionPayload {
  mutation: MutationType!
  node: SurveyRecord
  updatedFields: [String!]
  previousValues: SurveyRecordPreviousValues
}

input SurveyRecordSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SurveyRecordWhereInput
  AND: [SurveyRecordSubscriptionWhereInput!]
  OR: [SurveyRecordSubscriptionWhereInput!]
  NOT: [SurveyRecordSubscriptionWhereInput!]
}

input SurveyRecordUpdateInput {
  htmlId: String
  openid: String
  questionSelected: Json
  deletedAt: String
}

input SurveyRecordUpdateManyMutationInput {
  htmlId: String
  openid: String
  questionSelected: Json
  deletedAt: String
}

input SurveyRecordWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  htmlId: String
  htmlId_not: String
  htmlId_in: [String!]
  htmlId_not_in: [String!]
  htmlId_lt: String
  htmlId_lte: String
  htmlId_gt: String
  htmlId_gte: String
  htmlId_contains: String
  htmlId_not_contains: String
  htmlId_starts_with: String
  htmlId_not_starts_with: String
  htmlId_ends_with: String
  htmlId_not_ends_with: String
  openid: String
  openid_not: String
  openid_in: [String!]
  openid_not_in: [String!]
  openid_lt: String
  openid_lte: String
  openid_gt: String
  openid_gte: String
  openid_contains: String
  openid_not_contains: String
  openid_starts_with: String
  openid_not_starts_with: String
  openid_ends_with: String
  openid_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: String
  deletedAt_not: String
  deletedAt_in: [String!]
  deletedAt_not_in: [String!]
  deletedAt_lt: String
  deletedAt_lte: String
  deletedAt_gt: String
  deletedAt_gte: String
  deletedAt_contains: String
  deletedAt_not_contains: String
  deletedAt_starts_with: String
  deletedAt_not_starts_with: String
  deletedAt_ends_with: String
  deletedAt_not_ends_with: String
  AND: [SurveyRecordWhereInput!]
  OR: [SurveyRecordWhereInput!]
  NOT: [SurveyRecordWhereInput!]
}

input SurveyRecordWhereUniqueInput {
  id: ID
}

type WechatOfficalAccount {
  id: ID!
  appId: String!
  token: String
  jsApiTicket: String
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: String
}

type WechatOfficalAccountConnection {
  pageInfo: PageInfo!
  edges: [WechatOfficalAccountEdge]!
  aggregate: AggregateWechatOfficalAccount!
}

input WechatOfficalAccountCreateInput {
  appId: String!
  token: String
  jsApiTicket: String
  deletedAt: String
}

type WechatOfficalAccountEdge {
  node: WechatOfficalAccount!
  cursor: String!
}

enum WechatOfficalAccountOrderByInput {
  id_ASC
  id_DESC
  appId_ASC
  appId_DESC
  token_ASC
  token_DESC
  jsApiTicket_ASC
  jsApiTicket_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
}

type WechatOfficalAccountPreviousValues {
  id: ID!
  appId: String!
  token: String
  jsApiTicket: String
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: String
}

type WechatOfficalAccountSubscriptionPayload {
  mutation: MutationType!
  node: WechatOfficalAccount
  updatedFields: [String!]
  previousValues: WechatOfficalAccountPreviousValues
}

input WechatOfficalAccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WechatOfficalAccountWhereInput
  AND: [WechatOfficalAccountSubscriptionWhereInput!]
  OR: [WechatOfficalAccountSubscriptionWhereInput!]
  NOT: [WechatOfficalAccountSubscriptionWhereInput!]
}

input WechatOfficalAccountUpdateInput {
  appId: String
  token: String
  jsApiTicket: String
  deletedAt: String
}

input WechatOfficalAccountUpdateManyMutationInput {
  appId: String
  token: String
  jsApiTicket: String
  deletedAt: String
}

input WechatOfficalAccountWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  appId: String
  appId_not: String
  appId_in: [String!]
  appId_not_in: [String!]
  appId_lt: String
  appId_lte: String
  appId_gt: String
  appId_gte: String
  appId_contains: String
  appId_not_contains: String
  appId_starts_with: String
  appId_not_starts_with: String
  appId_ends_with: String
  appId_not_ends_with: String
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  jsApiTicket: String
  jsApiTicket_not: String
  jsApiTicket_in: [String!]
  jsApiTicket_not_in: [String!]
  jsApiTicket_lt: String
  jsApiTicket_lte: String
  jsApiTicket_gt: String
  jsApiTicket_gte: String
  jsApiTicket_contains: String
  jsApiTicket_not_contains: String
  jsApiTicket_starts_with: String
  jsApiTicket_not_starts_with: String
  jsApiTicket_ends_with: String
  jsApiTicket_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: String
  deletedAt_not: String
  deletedAt_in: [String!]
  deletedAt_not_in: [String!]
  deletedAt_lt: String
  deletedAt_lte: String
  deletedAt_gt: String
  deletedAt_gte: String
  deletedAt_contains: String
  deletedAt_not_contains: String
  deletedAt_starts_with: String
  deletedAt_not_starts_with: String
  deletedAt_ends_with: String
  deletedAt_not_ends_with: String
  AND: [WechatOfficalAccountWhereInput!]
  OR: [WechatOfficalAccountWhereInput!]
  NOT: [WechatOfficalAccountWhereInput!]
}

input WechatOfficalAccountWhereUniqueInput {
  id: ID
  appId: String
}

type WechatUser {
  id: ID!
  openid: String!
  nickname: String
  sex: Int
  country: String
  province: String
  city: String
  headimgurl: String
  unionid: String
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: String
}

type WechatUserConnection {
  pageInfo: PageInfo!
  edges: [WechatUserEdge]!
  aggregate: AggregateWechatUser!
}

input WechatUserCreateInput {
  openid: String!
  nickname: String
  sex: Int
  country: String
  province: String
  city: String
  headimgurl: String
  unionid: String
  deletedAt: String
}

type WechatUserEdge {
  node: WechatUser!
  cursor: String!
}

enum WechatUserOrderByInput {
  id_ASC
  id_DESC
  openid_ASC
  openid_DESC
  nickname_ASC
  nickname_DESC
  sex_ASC
  sex_DESC
  country_ASC
  country_DESC
  province_ASC
  province_DESC
  city_ASC
  city_DESC
  headimgurl_ASC
  headimgurl_DESC
  unionid_ASC
  unionid_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
}

type WechatUserPreviousValues {
  id: ID!
  openid: String!
  nickname: String
  sex: Int
  country: String
  province: String
  city: String
  headimgurl: String
  unionid: String
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: String
}

type WechatUserSubscriptionPayload {
  mutation: MutationType!
  node: WechatUser
  updatedFields: [String!]
  previousValues: WechatUserPreviousValues
}

input WechatUserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WechatUserWhereInput
  AND: [WechatUserSubscriptionWhereInput!]
  OR: [WechatUserSubscriptionWhereInput!]
  NOT: [WechatUserSubscriptionWhereInput!]
}

input WechatUserUpdateInput {
  openid: String
  nickname: String
  sex: Int
  country: String
  province: String
  city: String
  headimgurl: String
  unionid: String
  deletedAt: String
}

input WechatUserUpdateManyMutationInput {
  openid: String
  nickname: String
  sex: Int
  country: String
  province: String
  city: String
  headimgurl: String
  unionid: String
  deletedAt: String
}

input WechatUserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  openid: String
  openid_not: String
  openid_in: [String!]
  openid_not_in: [String!]
  openid_lt: String
  openid_lte: String
  openid_gt: String
  openid_gte: String
  openid_contains: String
  openid_not_contains: String
  openid_starts_with: String
  openid_not_starts_with: String
  openid_ends_with: String
  openid_not_ends_with: String
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  sex: Int
  sex_not: Int
  sex_in: [Int!]
  sex_not_in: [Int!]
  sex_lt: Int
  sex_lte: Int
  sex_gt: Int
  sex_gte: Int
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  province: String
  province_not: String
  province_in: [String!]
  province_not_in: [String!]
  province_lt: String
  province_lte: String
  province_gt: String
  province_gte: String
  province_contains: String
  province_not_contains: String
  province_starts_with: String
  province_not_starts_with: String
  province_ends_with: String
  province_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  headimgurl: String
  headimgurl_not: String
  headimgurl_in: [String!]
  headimgurl_not_in: [String!]
  headimgurl_lt: String
  headimgurl_lte: String
  headimgurl_gt: String
  headimgurl_gte: String
  headimgurl_contains: String
  headimgurl_not_contains: String
  headimgurl_starts_with: String
  headimgurl_not_starts_with: String
  headimgurl_ends_with: String
  headimgurl_not_ends_with: String
  unionid: String
  unionid_not: String
  unionid_in: [String!]
  unionid_not_in: [String!]
  unionid_lt: String
  unionid_lte: String
  unionid_gt: String
  unionid_gte: String
  unionid_contains: String
  unionid_not_contains: String
  unionid_starts_with: String
  unionid_not_starts_with: String
  unionid_ends_with: String
  unionid_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  deletedAt: String
  deletedAt_not: String
  deletedAt_in: [String!]
  deletedAt_not_in: [String!]
  deletedAt_lt: String
  deletedAt_lte: String
  deletedAt_gt: String
  deletedAt_gte: String
  deletedAt_contains: String
  deletedAt_not_contains: String
  deletedAt_starts_with: String
  deletedAt_not_starts_with: String
  deletedAt_ends_with: String
  deletedAt_not_ends_with: String
  AND: [WechatUserWhereInput!]
  OR: [WechatUserWhereInput!]
  NOT: [WechatUserWhereInput!]
}

input WechatUserWhereUniqueInput {
  id: ID
  openid: String
}
`