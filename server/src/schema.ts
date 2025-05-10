import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { stat } from 'fs';

export const fileTable = sqliteTable('file_table', {
  id: int().primaryKey({ autoIncrement: true }),
  path: text(),
  name: text(),
  summary: text(),
  description: text(),
  content: text(),
  xml: text(),
  status: text(),
  createdAt: text(),
  updatedAt: text(),
});
