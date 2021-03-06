
export default class DBService {
	apiBase = process.env.REACT_APP_API_BASE;
	async getResource(url) {
		const res = await fetch(url);

		if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);

		return await res.json()
	}
	getField(field) {
		return this.getResource(this.apiBase).then(res => res[field])
	}
	getDonutBlocks() {
		return this.getField('donutBlocks')
	}
	getReviews() {
		return this.getField('reviews')
	}
	getDonutCount() {
		return this.getField('donutCount')
	}
}