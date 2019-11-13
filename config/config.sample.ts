import { Config, DbConnectionOptions } from './configuration';

// Edit these options with real values for your environment.
const database = new DbConnectionOptions({host: '', user: '', password: '', database: '', connectionLimit: 10});
const config = new Config({
    database,
    port: 13131,
    secretKey: '', // Required - generate a long random string to be a cryptographic key for your application.
    siteSettings: [
        // Enter key-value pairs in here; they are made available via config.getSiteSetting after importing this config file.
        // ['appName', 'My Awesome App']
    ]
});
export default config;
