// Get elements
const nav = document.getElementById('nav');
const container = document.getElementById('container');

// Generate nav
for(const id of Object.keys(shortcuts)) {
	const navItem = document.createElement('span');
	navItem.innerText = id;
	navItem.addEventListener('click', e => { showShortcuts(id, e); });
	nav.appendChild(navItem);
}

// Generate shortcut list
function showShortcuts(id, e) {
	// Make sure id is valid
	if(!(id in shortcuts)) {
		console.error(`Invalid ID ${id}`);
		return;
	}

	// Clear selected elements
	for(const element of document.querySelectorAll('#nav .selected'))
		element.classList.remove('selected');

	// Add selected class to target element
	const shortcutIndex = Object.keys(shortcuts).indexOf(id);
	if(shortcutIndex !== -1)
		nav.children[shortcutIndex].classList.add('selected');

	// Clear data in container
	while(container.firstElementChild) {
		container.firstElementChild.remove();
	}

	// Iterate over ids and add to container
	for(const shortcutData of Object.entries(shortcuts[id])) {
		// Create container
		const shortcutItem = document.createElement('div');
		container.appendChild(shortcutItem);

		// Add sub-items
		const shortcutIndex = document.createElement('span');
		shortcutIndex.innerText = shortcutData[0];
		shortcutItem.appendChild(shortcutIndex);

		const shortcutLabel = document.createElement('span');
		shortcutLabel.innerText = shortcutData[1];
		shortcutItem.appendChild(shortcutLabel);
	}
}
showShortcuts(Object.keys(shortcuts)[0]);