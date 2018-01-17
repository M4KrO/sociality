import { ResultCode } from '../ResultCode';

export default class UserState {
	public resultCode?: ResultCode;
	public id?: number;
	public name?: string;
	public surname?: string;
	public city?: string;
	public birthday?: number;
	public about?: string;
	public avatarPath?: string;

	constructor(resultCode?: ResultCode, id?: number, name?: string, surname?: string, city?: string, birthday?: number,
			about?: string, avatarPath?: string) {
		this.resultCode = resultCode;
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.city = city;
		this.birthday = birthday;
		this.about = about;
		this.avatarPath = avatarPath;
	}
}
