/**
 * Provides a `Contact` object
 */
export class Contact {
  constructor(
    public id: number,
    public name: string,
    public company: string,
    public profilePicUrl: string,
    public email: string,
    public birthday: string,
    public phoneNumberWork: string,
    public phoneNumberHome: string,
    public address: string
    ) {}
}
