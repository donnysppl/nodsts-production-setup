
module.exports = {
    extends: ["@commitlint/cli", "@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feat",         // feature
                "fix",          // bug fix
                "docs",         // documentation
                "style",        // for css
                "refactor",     
                "perf",         // performance
                "test",         // text case
                "build",        // for build
                "ci",           
                "chore",
                "revert"
            ],
        ],
        "subject-case": [2, "always", "sentence-case"]
    }
}