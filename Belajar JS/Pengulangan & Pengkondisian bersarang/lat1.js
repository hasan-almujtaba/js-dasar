var s = '';

for (var i = 1; i <= 10; i++) {
	for (var j = 1; j <= i; j++) {
		s += '*';
	}
	s += '\n';
}
console.log(s);