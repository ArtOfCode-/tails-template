import { BaseModel } from './base';

export class User extends BaseModel {
    id: number;
    username: string;
    site_admin: number;
    created_at: string;
    updated_at: string;

    static get tableName() {
        return 'users';
    }

    get tableName() {
        return 'users';
    }
}
