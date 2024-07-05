interface IUsers<T> {
	name: string;
	age: number;
	date: T;
}

const users: IUsers<Date>[] = [
	{
		name: 'Петр',
		age: 18,
		date: new Date()
	}
];

console.log(users);
