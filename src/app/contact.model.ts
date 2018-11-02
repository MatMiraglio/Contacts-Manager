/**
 * Provides a `Contact` object
 */
export class Contact {
    constructor(
      public id: string,
      public name: string,
      public phoneNumber: string,
      public profilePicUrl: string,
      public company: string,
      public email: string) {
    }
  }
