module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': [
            2,
            'always',
            ['ios', 'google', 'amazon', 'ios & google', 'ios & amazon', 'google & amazon', 'release']
        ],
    }
};