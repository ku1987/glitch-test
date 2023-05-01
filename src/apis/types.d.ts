// Type definitions for the response object from the APIs.

export interface UserMaster {
  username: string;
  uid: string;
}

export interface UserProfile {
  userUid: string;
  address: string;
  birthdate: string;
}
