# Development
Pasos para levantar la app en desarrollo
1. Levantar la base de datos 
```
docker compose up -d
```
2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno.
4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)
#Prisma commands
```
npx prisma init
npx prisma migrate dev #crea los modelos a partir de una basde de datos existente
npx primsa generate #purga la base de datos y crea la nueva estructura a partir del modelo
npx prisma db push #agrega columnas del modelo a la base de datos
```
