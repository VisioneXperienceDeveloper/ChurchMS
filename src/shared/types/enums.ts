export const Role = {
  ADMIN: 'ADMIN',
  SENIOR_PASTOR: 'SENIOR_PASTOR',
  PASTOR: 'PASTOR',
  LEADER: 'LEADER',
  MEMBER: 'MEMBER',
  NEWCOMER: 'NEWCOMER'
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const VisaType = {
  STUDENT: 'STUDENT',
  WORKING_HOLIDAY: 'WORKING_HOLIDAY',
  TRAVELLING: 'TRAVELLING',
  SPONSERSHIP: 'SPONSERSHIP',
  CITIZENSHIP: 'CITIZENSHIP',
  PR: 'PR',
  GRADUATE: 'GRADUATE',
  ETC: 'ETC'
} as const;

export type VisaType = (typeof VisaType)[keyof typeof VisaType];
