class Color {
	#r = 0;
	#g = 0;
	#b = 0;
	#a? = 1;

	static createFrom(hex: string): Color {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (result) {
			const c = new Color();
			c.#r = Number.parseInt(result[1], 16);
			c.#g = Number.parseInt(result[2], 16);
			c.#b = Number.parseInt(result[3], 16);
			c.#a = 1;

			return c;
		}

		const result2 =
			/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (result2) {
			const c = new Color();
			c.#r = Number.parseInt(result2[1], 16);
			c.#g = Number.parseInt(result2[2], 16);
			c.#b = Number.parseInt(result2[3], 16);
			c.#a = Number.parseInt(result2[4], 16);

			return c;
		}
		return new Color();
	}

	toRgb(): string {
		return `rgb(${this.#r},${this.#g},${this.#b})`;
	}

	changeAlpha(a: number): Color {
		this.#a = a;
		return this;
	}

	toRgba(): string {
		return `rgb(${this.#r},${this.#g},${this.#b},${this.#a})`;
	}
}

export default Color;
