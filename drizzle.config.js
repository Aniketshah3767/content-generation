/** @type{import ("drizzle-kit").Config } */
export default{
    schema : "./utils/schema.tsx",
    dialect : 'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_Hl1iy6hIMdEv@ep-silent-night-a8nlulhn-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
    }
} 



