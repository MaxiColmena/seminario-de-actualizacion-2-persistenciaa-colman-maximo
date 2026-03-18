# 📚 Gestión Académica - Aplicación de Persistencia
# Proyecto a nombre de Colman Máximo

Una aplicación web para gestionar datos de alumnos con **persistencia en el servidor**. Permite registrar estudiantes, visualizar sus calificaciones ordenadas y mantener los datos almacenados incluso después de cerrar el navegador.

## 🎯 ¿Qué consiste este proyecto?

### Primera Parte: Frontend (JavaScript en el navegador)
Aplicación inicial que permitía:
- ✅ Cargar datos de alumnos (nombre, edad, calificación)
- ✅ Mostrar los datos ordenados por calificación
- ✅ Persistencia en el cliente (LocalStorage)

### Segunda Parte: Backend (Servidor Node.js + Express)
Sistema completo que incluye:
- 🔧 **Servidor Express** que sirve la página
- 💾 **Persistencia en el servidor** (los datos permanecen en el backend)
- 🆔 **Identificación por cookies** - cada usuario tiene su propia lista de alumnos
- 📱 **Accesible desde cualquier IP** - permite múltiples dispositivos cargando sus propios datos
- 🔄 **API REST** con endpoints GET, POST y DELETE

## 🚀 Cómo clonar el proyecto

### Opción 1: Clonar desde GitHub
```bash
git clone https://github.com/MaxiColmena/seminario-de-actualizacion-2-persistenciaa-colman-maximo.git
cd seminario-persistencia
```

### Opción 2: Descargar el ZIP
1. Ve a https://github.com/MaxiColmena/seminario-de-actualizacion-2-persistenciaa-colman-maximo
2. Click en **Code** > **Download ZIP**
3. Descomprime el archivo en tu carpeta deseada
4. Abre una terminal en la carpeta del proyecto

## 📦 Instalación de dependencias

### Requisitos previos
- **Node.js** (versión 14 o superior)
  - Descarga desde: https://nodejs.org/

### Pasos de instalación

1. Abre una terminal en la carpeta del proyecto
2. Ejecuta el comando:
```bash
npm install
```

Esto instalará **Express 5.2.1**, que es el único framework que necesita este proyecto.

## ▶️ Cómo ejecutar la aplicación

### Iniciar el servidor

```bash
npm start
```

Deberías ver un mensaje como:
```
🚀 Servidor listo en http://localhost:3000
```

### Acceder a la aplicación

- **Desde tu computadora**: Abre el navegador y ve a:
  ```
  http://localhost:3000
  ```

- **Desde otra computadora (misma red LAN)**:
  - Identifica la IP de tu computadora (ej: 192.168.1.100)
  - Accede desde otra PC a: 
    ```
    http://192.168.1.100:3000
    ```

### Detener el servidor
Presiona `Ctrl + C` en la terminal

## 💡 ¿Qué cosas puedes hacer?

### 1. **Registrar un alumno**
- Completa los campos: Nombre, Edad y Calificación (0-10)
- Haz click en **"Registrar Alumno"**
- El alumno aparecerá automáticamente en el ranking

### 2. **Ver el ranking de calificaciones**
- Los alumnos se ordenan **de mayor a menor calificación**
- Se muestra una tabla con: Nombre, Edad y Nota
- Los datos se actualizan en tiempo real

### 3. **Ver estadísticas**
- **Total**: Cantidad de alumnos registrados
- **Puntos**: Suma de todas las calificaciones
- **Promedio**: Promedio aritmético de las notas

### 4. **Limpiar todos los datos**
- Haz click en **"Limpiar Base"**
- Aparecerá una confirmación
- Se eliminarán todos los alumnos del servidor

### 5. **Persistencia entre sesiones**
- **Cierra completamente el navegador**
- **Reabre la aplicación**
- ✅ Tus datos siguen aquí (almacenados en el servidor)

### 6. **Múltiples usuarios simultáneamente**
- Cada dispositivo que accede tiene su propia lista de alumnos
- Son identificados por una cookie única (userId)
- Dos computadoras pueden registrar alumnos diferentes

## 📱 Arquitectura técnica

### Frontend
- **HTML/CSS**: Interfaz moderna y responsiva
- **JavaScript Vanilla**: Gestión de la UI sin frameworks
- **Fetch API**: Comunicación con el servidor

### Backend
- **Node.js**: Runtime de JavaScript servidor
- **Express**: Framework web minimalista
- **Cookies**: Identificación de usuarios
- **Almacenamiento en memoria**: Persistencia en tiempo de ejecución

### API Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/alumnos` | Obtiene la lista de alumnos del usuario |
| `POST` | `/api/alumnos` | Crea un nuevo alumno |
| `DELETE` | `/api/alumnos` | Elimina todos los alumnos del usuario |

## 🔧 Estructura del proyecto

```
.
├── index.html           # Página principal con HTML, CSS y JavaScript
├── server.js            # Servidor Express y API
├── package.json         # Dependencias del proyecto
└── README.md            # Este archivo
```

## ⚙️ Variables de entorno

Actualmente, el proyecto no requiere variables de entorno. Si deseas cambiar el puerto:

1. Abre `server.js`
2. Busca la línea: `const PORT = 3000;`
3. Cambia `3000` por el puerto que desees
4. Guarda y reinicia el servidor

## 🐛 Troubleshooting

### "El servidor no inicia"
```bash
# Verifica que el puerto 3000 no esté en uso:
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # Mac/Linux
```

### "No puedo conectarme desde otro dispositivo"
- Verifica que ambos dispositivos estén en la **misma red**
- Usa tu IP local, no localhost:
  ```
  ipconfig  # Windows
  ifconfig  # Mac/Linux
  ```

### "Node no está instalado"
Descargue desde: https://nodejs.org/

### "npm command not found"
Reinicia la terminal después de instalar Node.js

## 📝 Notas importantes

> ⚠️ **Advertencia**: Los datos se almacenan **en memoria del servidor**
> - Si reinicias el servidor, se pierden todos los datos
> - Para persistencia permanente, necesitarías agregar una base de datos (MongoDB, PostgreSQL, etc.)

> 💡 **Cada usuario es identificado por**: Una cookie llamada `userId` con un UUID único
> - Válida por 365 días
> - No es segura para aplicaciones en producción (requeriría autenticación real)

## 🎓 Caso de uso ideal

- ✅ Múltiples profesores/computadoras
- ✅ Cada uno carga sus propios alumnos
- ✅ Los datos persisten mientras el servidor está activo
- ✅ Pruebas educativas de persistencia en servidor

## 📚 Referencia de tecnologías

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Guide](https://nodejs.org/en/docs/)
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

---

**Proyecto desarrollado como ejercicio de persistencia en aplicaciones web.**
