/**
 * Provides a `Contact` object
 */
export class Contact {

  public constructor(init?: Partial<Contact >) {
    Object.assign(this, init);
  }
    public id: number;
    public name: string;
    public company: string;
    public profilePicUrl: string;
    public email: string;
    public birthday: string;
    public phoneNumberWork: string;
    public phoneNumberHome: string;
    public address: string;
}
