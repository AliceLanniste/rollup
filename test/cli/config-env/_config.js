module.exports = {
	description: 'passes environment variables to config file',
	command: 'rollup --config --environment PRODUCTION,FOO:bar',
	execute: true
};
