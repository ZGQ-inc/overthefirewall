function onkeydown(e) {
	// For controlling the menu, source:
	// https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html

	const element = e.currentTarget;

	if (!element) return;

	const currentFocusEl = element.querySelector(":focus");

	const letterKey = e.code.match(/^Key([A-Z])$/);
	if (letterKey) {
		element.open = true;
		const letter = letterKey[1].toLowerCase();
		const elsAfter = Array.from(
			element.querySelectorAll("li:focus-within ~ li")
		);
		for (const el of elsAfter) {
			if (el.textContent.trim().toLowerCase()[0] === letter) {
				return el.querySelector("a").focus();
			}
		}
		const allEls = Array.from(element.querySelectorAll("li"));
		for (const el of allEls) {
			if (el.textContent.trim().toLowerCase()[0] === letter) {
				return el.querySelector("a").focus();
			}
		}
		return;
	}

	if (currentFocusEl.tagName === "SUMMARY") {
		switch (e.code) {
		case "ArrowUp":
			e.preventDefault();
			element.open = true;
			element.querySelector("li:last-child>a").focus();
			return false;

		case "ArrowDown":
		case "Space":
		case "Return":
			e.preventDefault();
			element.open = true;
			element.querySelector("li:first-child>a").focus();
			return false;
		}
	}

	if (currentFocusEl.tagName === "A") {
		let el, prevEl;

		switch (e.code) {
		case "ArrowUp":
			e.preventDefault();
			el = element.querySelector("li:focus-within");
			prevEl =
					el.previousElementSibling ||
					element.querySelector("li:last-child");
			prevEl.querySelector("a").focus();
			return false;

		case "ArrowDown":
			e.preventDefault();
			el =
					element.querySelector("li:focus-within+li>a") ||
					element.querySelector("li:first-child>a");
			el.focus();
			return false;

		case "Enter":
		case "Escape":
			element.open = false;
			element.querySelector("summary").focus();
			break;

		case "Home":
			e.preventDefault();
			element.querySelector("li:first-child>a").focus();
			break;

		case "End":
			e.preventDefault();
			element.querySelector("li:last-child>a").focus();
			break;
		}
	}
}

function onblur(e) {
	const element = e.currentTarget;
	if (element.matches(':focus-within')) return;
	element.open = false;
}

function ontoggle(e) {
	const element = e.currentTarget;
	if (element.querySelector('ul').matches(':focus-within')) return;
	if (element.open) element.querySelector("li:first-child>a").focus();
}

function ouiBindKeys() {
	for (const el of [...document.querySelectorAll(".oui-menu")]) {
		el.removeEventListener("blur", onblur);
		el.removeEventListener("toggle", ontoggle);
		el.removeEventListener("keydown", onkeydown);
		el.addEventListener("blur", onblur, true);
		el.addEventListener("toggle", ontoggle);
		el.addEventListener("keydown", onkeydown);
	}
}
ouiBindKeys();
