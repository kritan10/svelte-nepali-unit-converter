export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.10e242cb.js","imports":["_app/immutable/entry/start.10e242cb.js","_app/immutable/chunks/index.57679127.js","_app/immutable/chunks/singletons.54ba0296.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7a9d22af.js","imports":["_app/immutable/entry/app.7a9d22af.js","_app/immutable/chunks/index.57679127.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
