const swc = require('@swc/core')
const ConsoleStripper = require('../lib').default;

it('should strip console call', () => {
    const output = swc.transformSync(`console.log('Foo')`, {
        plugin: (m) => (new ConsoleStripper()).visitModule(m),
    });

    expect(output.code.replace(/\n/g, '')).toBe('void 0;')
})