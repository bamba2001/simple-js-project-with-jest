import { sayHello } from "../src/main";

describe('Hello world test', () => {
    it('shoud return hello world', () => {
        expect(sayHello()).toBe('Hello, World')
    })

    it('shoud return hello class', () => {
        expect(sayHello('Class')).toBe('Hello, Class')
    })
})
