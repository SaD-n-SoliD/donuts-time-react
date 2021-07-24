
export default class DBService {
	apiBase = 'https://donuts-time-reborn/api';
	async getResource(url) {
		const res = await fetch(url);

		if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);

		return await res.json()
	}
	getDonuts() {
		return this.getResource(this.apiBase)
	}
}