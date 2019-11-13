-- This is your canonical database schema. It's highly recommended to check this
-- in to version control. Add more tables as you require.
-- All tables MUST have id, created_at, and updated_at fields.

create database if not exists `tails-template`; -- Remember to rename your database

use `tails-template`; -- Copy your new name to here

create table if not exists `metadata` ( -- This table is required. It lets the engine persistently store bits of data.
    `id` bigint primary key auto_increment,
    `name` varchar(255) not null,
    `val` varchar(255),

    index index_metadata_on_name (`name`)
) character set utf8mb4 collate utf8mb4_unicode_ci;

create table if not exists `users` ( -- This table is also required. User and sign-in functionality is baked in.
    `id` bigint primary key auto_increment,
    `username` varchar(255) not null,
    `site_admin` tinyint(1) not null default 0, -- This column is recommended but not essential.
    `created_at` datetime not null default current_timestamp,
    `updated_at` datetime not null default current_timestamp,

    index index_users_on_site_admin (`site_admin`)
) character set utf8mb4 collate utf8mb4_unicode_ci;