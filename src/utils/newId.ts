const newId = (data: number[]) => {
	return data.reduce((acc, cur) => (cur > acc ? cur : acc), 0) + 1;
};

export default newId;
