window.addEventListener('DOMContentLoaded', function (event) {
	let btns = document.getElementsByClassName('menu-btn');
	let lableAccordion = document.getElementsByClassName('accordion-section__label')
	for (let i = 0, len = btns.length; i < len; i++) {
		createEvent(btns[i]);
	}

	for (let i = 0, len = lableAccordion.length; i < len; i++) {
		createEventAccordion(lableAccordion[i]);
	}

	function createEventAccordion(label) {
		let content = label.nextElementSibling;
		label.addEventListener('click', function (event) {
			event.preventDefault();

			setHeight(content, label);
		});
	}

	function createEvent(btn) {
		let dropdown = btn.nextElementSibling;
		btn.addEventListener('mousedown', function (event) {
			event.preventDefault();
			btn.focus();

			setHeight(dropdown);
		});

		btn.addEventListener('blur', (event) => {
			dropdown.style.maxHeight = null;
		});
	}

	function setHeight(element, toggle) {
		if (toggle) {
			toggle.classList.toggle('active');
		}

		if (!element.style.maxHeight) {
			element.style.maxHeight = element.scrollHeight + 'px';
		} else {
			element.style.maxHeight = null;
		}
	}

});



