import fs from "node:fs";
import packageJson from "./package.json" assert { type: "json" };

class Versao {
	#major = 0;
	#minor = 0;
	#patch = 0;

	incrementMajor(): void {
		this.#major++;
		this.#minor = 0;
		this.#patch = 0;
	}

	incrementMinor(): void {
		this.#minor++;
		this.#patch = 0;
	}

	incrementPatch(): void {
		this.#patch++;
	}

	static of(value: string): Versao {
		const [major, minor, patch] = value.split(".");
		const v = new Versao();
		v.#major = Number.parseInt(major);
		v.#minor = Number.parseInt(minor);
		v.#patch = Number.parseInt(patch);
		return v;
	}

	static to(reference: Versao): string {
		return `${reference.#major}.${reference.#minor}.${reference.#patch}`;
	}
}

function getVersion(): Versao {
	return Versao.of(packageJson.version);
}

function saveVersion(version: Versao) {
	packageJson.version = Versao.to(version);
	fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, "\t"));
}

function doSomething(something: (v: Versao) => void): void {
	const v = getVersion();
	something(v);
	saveVersion(v);
	console.log("Versão incrementada");
}

const minor = () => {
	doSomething((v) => {
		v.incrementMinor();
	});
};

const major = () => {
	doSomething((v) => {
		v.incrementMajor();
	});
};

const patch = () => {
	doSomething((v) => {
		v.incrementPatch();
	});
};

const arg: string = process.argv[2];
switch (arg) {
	case "p":
		patch();
		break;
	case "m":
		minor();
		break;
	case "M":
		major();
		break;
	default:
		console.log("M, ou m, ou p");
		break;
}
