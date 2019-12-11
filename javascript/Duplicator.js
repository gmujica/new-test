const array = []

Array.prototype.duplicator = function() {
	console.log(this)
  const arrayString = this.join();
  return `${arrayString},${arrayString}`.split(',');
}

[1, 2, 3, 4, 5].duplicator().map(Number);