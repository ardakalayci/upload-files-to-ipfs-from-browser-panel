// Change this file as you need it

const config = {
	port: 5001,
	gateway: 8080
}

const node = {
	// default remote Node
	default: 'remote',
	remote: {
		domain:"https://ipfs.akalayci.com/ipfs/"
,
		address: '34.95.60.195',
		...config,
		protocol: 'http'
	},

	// default local node
	local: {
		address: '127.0.0.1',
		...config,
		protocol: 'http'
	}
}
