import { boolean } from "drizzle-orm/gel-core";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templeteSlug:varchar('templeteSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt')
})


export const UserSubscription = pgTable('userSubscription', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }),
  userName: varchar('userName', { length: 255 }),
  active: boolean('active'),
  paymentId: varchar('paymentId', { length: 255 }),
  joinDate: varchar('joinDate', { length: 100 }),
});