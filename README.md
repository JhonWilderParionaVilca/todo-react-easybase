# Base de datos

los aspectos más valiosos easybase-reactson el almacenamiento en caché automático de sesiones y la recuperación segura de dato

> yarn add easybase-react
> crear cuenta easybase -> bh

> EasybaseProvider dará a todos los componentes secundarios acceso válido al gancho useEasybase
> descargar ebconfig
> Crear tabla con + -> ...
> integrate > framefork > react -> activo -> modo de prueba -> permisos de lectura y escritura -> descargar ebconfig.js

# DEPLOY GITHUB PAGES

CREAR CLAVES https://github.com/JamesIves/github-pages-deploy-action/tree/dev#using-an-ssh-deploy-key-

> cd ~/.ssh/
> ssh-keygen -t rsa -m pem -b 4096 -C "jhon.pariona.27@unsch.edu.pe" -N ""
> cuando pida el directorio poner el nombre de la clave
> ir al proyecto > setings > deploy keys > pegar la clave publica y no activas el chek
> ir a secrets y pegar la privada
> en el archivo action.yml agregar la key que pasamos
> modificar el packagejson
