
export const sayHello = name => {
    let response = 'Hello, World'

    if(name) {
        response = `Hello, ${name}`
    }

    return response
}
