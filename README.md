## 🔌 Configuraciones

Es necesario crear la base de datos **techome** en su servidor pgAdmin.

## 💿 Instalar Dependencias

Desde su CLI y dentro de la carpeta, ejecuta el siguiente comando:

npm install

**Asegúrese de haber modificado las configuraciones de la base de datos dentro de config/config.json**

Para ejecutar migraciones use el siguiente comando dentro de la carpeta
**solo use este comando una vez cuando el esquema no esté configurado**:

npx sequelize-cli db:migrate

Para ejecutar las semillas, use el siguiente comando **solo se necesita en un entorno local/desarrollo, evite usarlo en producción** :

npx sequelize-cli db:seed:all

## 💻 Ejecutar Proyecto

Para ejecutar el proyecto use el siguiente comando dentro de la carpeta Nahual-ServicioDatos:

npm run start --env=<environment>

Para ejecutar en un entorno de desarrollo, utilice el siguiente comando:

npm run dev --env=<enviroment>