# Hactiv8 Final Project 2 Kelompok7

## Link Railway :
https://hacktiv8-final-project-2-production-5128.up.railway.app/

## Cara penggunaan pada local

1. `npm install` untuk menginstall dependencies
2. Create, Migrate, dan Seed data terlebih dahulu<br>
   ```
   npm run dev : "node app.js",
   npm run start:production : "npx sequelize db:migrate && npx sequelize db:seed:all"
   ```
3. `npm run dev` untuk menjalankan server
Sesuaikan `config` dengan database postgres device
Port dapat disesuaikan di `.env`
