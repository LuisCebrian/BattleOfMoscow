var config = module.exports;

config["My tests"] = {
    env: "node",        // or "node"
    rootPath: "../",
    sources: [
        "sources/**/*.js"      // Glob patterns supported
        ],
    tests: [
        "test/*-test.js"
        ]
};
