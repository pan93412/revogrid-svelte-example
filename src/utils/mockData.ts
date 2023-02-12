function generateHeader(index: number) {
	const asciiFirstLetter = 65;
	const lettersCount = 26;
	let div = index + 1;
	let label = '';
	let pos = 0;
	while (div > 0) {
		pos = (div - 1) % lettersCount;
		label = String.fromCharCode(asciiFirstLetter + pos) + label;
		div = parseInt(((div - pos) / lettersCount).toString(), 10);
	}
	return label.toLowerCase();
}

export function generateFakeDataObject(rowsNumber: number, colsNumber: number) {
	const result: Record<number, Record<number, string>>[] = [];
	const columns: Record<number, { name: ReturnType<typeof generateHeader>, prop: number}> = {};
	const all = colsNumber * rowsNumber;
	for (let j = 0; j < all; j++) {
		const col = j % colsNumber;
		const row = (j / colsNumber) | 0;
		if (!result[row]) {
			result[row] = {};
		}
		if (!columns[col]) {
			columns[col] = {
				name: generateHeader(col),
				prop: col
			};
		}
		result[row][col] = row + ':' + col;
	}
	const headers = Object.keys(columns).map((k) => columns[parseInt(k, 10)]);
	return {
		source: result,
		headers
	};
}
