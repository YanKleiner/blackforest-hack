CREATE TABLE `file_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`path` text,
	`name` text,
	`summary` text,
	`description` text,
	`content` text,
	`xml` text,
	`status` text,
	`createdAt` text,
	`updatedAt` text
);
