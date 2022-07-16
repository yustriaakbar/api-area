# API Area NodeJS

Untuk step run project API ini sebagai berikut.

## Installation

Clone project dan lakukan npm install 

```bash
npm install
```

Setup database di file config.json (database menggunakan mysql). Kemudian lakukan migrate dengan command berikut :
```bash
npx sequelize-cli db:migrate
```

Step selanjutnya seeder file userTableSeeder
```bash
npx sequelize-cli db:seed:all
```

Run project
```bash
npm run start
```

## Import Collection and Environment di Postman
Untuk memudahkan percobaan dengan postman, import collection dan environment yang ada di folder testing. Cara import collection ke postman dengan cara :
- Masuk ke postman
- Klik Collection (sidebar kiri)
- Kemudian import Area NodeJS.postman_collection.json

dan import juga environments dengan cara :
- Klik Environments (sidebar kiri)
- Kemudian import Area NodeJS.postman_environment.json

## List Routes
Login credentials `admin@gmail.com` - `password123`

```python
localhost:3001/api/login (untuk login)
localhost:3001/api/provinsi (method get untuk list provinsi)
localhost:3001/api/provinsi (method post untuk list provinsi by id)
localhost:3001/api/kota (method post untuk list kota by provinsi_id)
localhost:3001/api/kecamatan (method post untuk list kecamatan by kota_id)
localhost:3001/api/kelurahan (method post untuk list kelurahan by kecamatan_id)
```
