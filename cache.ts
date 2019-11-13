export default class TailsCache {
    static _cache: {} = {};
    static _expiry: {} = {};
    static _getters: {} = {};

    /**
     * Indicates whether or not a given key is present and has a non-expired value.
     * @param key the cache key to check
     */
    static _hasValue(key: string): boolean {
        return Object.keys(TailsCache._cache).indexOf(key) !== -1 &&
               (Object.keys(TailsCache._expiry).indexOf(key) === -1 || TailsCache._expiry[key] >= Date.now());
    }

    /**
     * Removes a key and its associated value from the cache.
     * @param key the key to remove
     */
    static remove(key: string): any {
        delete TailsCache._cache[key];
        delete TailsCache._expiry[key];
        delete TailsCache._getters[key];
    }

    /**
     * Get the value associated with a cache key.
     * @param key the key to retrieve
     */
    static get(key: string): any {
        return TailsCache._hasValue(key) ? TailsCache._cache[key] : undefined;
    }

    /**
     * Set the value of a cache key.
     * @param key the key to set
     * @param expiry a TTL value for the key, in seconds - use -1 for no expiry
     * @param value the value to assign to the key
     */
    static set(key: string, expiry: number, value: any): void {
        TailsCache._cache[key] = value;
        if (expiry !== -1) {
            TailsCache._expiry[key] = Date.now() + (expiry * 1000);
        }
    }

    /**
     * Get the value associated with a cache key, or, on cache miss, use the provided function to generate a value.
     * @param key the cache key to retrieve
     * @param expiry a TTL value for the key, in seconds - use -1 for no expiry
     * @param getter a function to generate a value in case of cache miss - optional, but required the first time a key is used
     */
    static async fetch(key: string, expiry: number, getter?: Function): Promise<any> {
        const value = TailsCache.get(key);
        if (value === undefined) {
            let getFn = !!getter ? getter : TailsCache._getters[key];
            if (!getFn) {
                throw 'You must specify a getter the first time a key is used.';
            }
            const value = await getFn();
            TailsCache.set(key, expiry, value);
            TailsCache._getters[key] = getFn;
            return value;
        }
        else {
            return value;
        }
    }
}