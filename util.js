function extend(subContstructor, superContstructor) {
	subContstructor.prototype = Object.create(superContstructor.prototype, {
		constructor: {
			value: subContstructor,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
}