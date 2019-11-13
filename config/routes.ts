import * as express from 'express';
import * as mysql from 'mysql';
import * as debug from 'debug';

import dashboard from '../routes/dashboard';
// Import your routes here and add them to the routes config below.

export const routes: {[key: string]: Function} = {
    '/': dashboard,
};