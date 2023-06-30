export interface GetHoliday {
  startDate: string;
  endDate: string;
}
export interface OutPutHoliday {
  holidayId: number;
  date: string;
  isLock: boolean;
  createAt: string;
  timeZone: string;
  userCreationId: number;
}
export interface dynamicfilter {
  data: UserOutPutViweModel[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export interface UserOutPutViweModel {
  userId: number;
  userName: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  isLocked: boolean;
  isAdmin: boolean;
  userInRole: UserInRole[];
  emailVerified: boolean;
  phoneVerified: boolean;
  createAt: string;
  userCreationId: string;
  userLevel: string;
  businessRoleName: string;
  businessRoleId: number;
}

export interface UserInRole {
  roleId: number;
  name: string;
  isBusinessRole: boolean;
  businessName: string;
}