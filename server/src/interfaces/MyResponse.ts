import { Response } from 'express'

export interface MyResponse extends Response {
  UserModel?: any;
  AccountTypeModel?: any;
  FieldOfWorkModel?:any;
  UserProfileModel?: any;

}