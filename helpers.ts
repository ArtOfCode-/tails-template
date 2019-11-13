/**
 * Detect if a value is an object literal, i.e. declared with a literal or created with `new Object`.
 * @param obj a value to test
 */
export const isObjectLiteral = (obj: any): boolean => {
    let _test  = obj;
    return (typeof obj !== 'object' || obj === null ?
            false :  
            (() => {
                while (!false) {
                    if (Object.getPrototypeOf(_test = Object.getPrototypeOf(_test)) === null) {
                        break;
                    }      
                }
                return Object.getPrototypeOf(obj) === _test;
            })());
};

/**
 * Array.map for objects. fn will be passed parameters for key and value.
 * @param obj the object to map through
 * @param fn the mapper callback function
 */
export const objectMap = (obj: {}, fn: Function): any[] => {
    return Object.keys(obj).map(k => fn(k, obj[k]));
};

/**
 * Array.forEach for objects. fn will be passed parameters for key and value.
 * @param obj the object to iterate over
 * @param fn the action callback function
 */
export const objectForEach = (obj: {}, fn: Function): void => {
    Object.keys(obj).forEach(k => fn(k, obj[k]));
};

/**
 * Convert a nested array of 2-item arrays into an object, using x[0] as the key
 * and x[1] as the value.
 * @param ary the array to convert
 */
export const toObject = (ary: Array<any[2]>): {} => {
    const obj = {};
    ary.forEach(x => {
        obj[x[0]] = x[1];
    });
    return obj;
};

/**
 * Split an array into groups based on a key returned by the callback function.
 * The callback will be passed the current item in the array
 * @param ary the array to split up
 * @param fn the callback function to provide the key
 */
export const groupBy = (ary: any[], fn: Function): {} => {
    const data = {};
    ary.forEach(x => {
        const key = fn(x);
        if (!data[key]) {
            data[key] = [];
        }
        data[key].push(x);
    });
    return data;
}

/**
 * Subtract an array from another and return only those items in a not also in b.
 * @param a the array from which to subtract
 * @param b the array to subtract
 */
export const arraySub = (a: any[], b: any[]) => {
    return a.filter(x => !b.includes(x));
};

/**
 * Pretty-print a value for display in terminal environments.
 * @param val a value to format
 */
export const pp = (val: any): string => {
    if (typeof val === 'string') {
      return `"${val}"`;
    }
    else if (val instanceof Array) {
      return `[${val.map(i => pp(i)).join(', ')}]`;
    }
    else if (isObjectLiteral(val)) {
      return `{${Object.keys(val).map(k => `${pp(k)}: ${pp(val[k])}`).join(', ')}}`;
    }
    else {
      return !!val ? val.toString() : `${val}`;
    }
  };