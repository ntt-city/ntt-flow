function stringifyProps<T>(obj: T) {
    const result = {} as Stringify<T>;
    for (const prop in obj) {
        result[prop] = String(obj[prop]);
    }
    return result;
}

export default stringifyProps;