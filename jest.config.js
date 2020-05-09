module.exports = {
    roots: ['<rootDir>/'],

    moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts'],

    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    preset: 'ts-jest'
};
