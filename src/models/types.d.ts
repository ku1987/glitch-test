// Type definitions for the request object from the users.

export interface Wish {
  uid: string;
  username: string;
  address: string;
  birthdate: string;
  wishText: string;
  addedAt: ?Date;
  is_processed: boolean = false;
}
