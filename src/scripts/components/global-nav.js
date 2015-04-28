(function() {
	'use strict';

	// Create custom element
	var proto = Object.create(HTMLElement.prototype);
	proto.name = 'Global Nav';

	proto.createdCallback = function() {
		// import the template and retrieve a document fragment from it
		var content = document.querySelector('#globalNavImport').import,
			template = content.querySelector('#globalNavTemplate'),
			clone = document.importNode(template.content, true),
			logoAnchor = clone.querySelector('.global-nav-logo-anchor'),
			logoImg = clone.querySelector('.global-nav-logo-img');

		logoAnchor.href = this.getAttribute('logo-href');
		logoImg.src = this.getAttribute('logo-src');

		// add our doc fragment to the DOM
		this.innerHTML = '';
		this.appendChild(clone);
	};

	// register the custom element
	document.registerElement('global-nav', {
		prototype: proto
	});

})();