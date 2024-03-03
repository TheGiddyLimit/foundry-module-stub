Hooks.on("init", () => {
	libWrapper.register(
		"a-module-stub",
		"TextEditor._onClickContentLink",
		async (fn, ...args) => {
			return fn(...args);
		},
		"MIXED",
	);

	document.body.addEventListener("click", () => {
		// waste some time
		const num = Array.from({length: 1_000_000}, (_, i) => i).reduce((a, b) => a + b, 0);
		console.log(`click counted to ${num}`);
	});
})
