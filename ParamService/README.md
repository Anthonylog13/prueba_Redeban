# Microservicio de Parámetros

Microservicio para la gestión de parámetros con soporte para múltiples tipos de datos (string, number, boolean, json, array), construido con Node.js, TypeScript, Express, Prisma y PostgreSQL.

## Arquitectura

Este proyecto utiliza una **Arquitectura en Capas (Layered Architecture)** para separar las responsabilidades:

- **Controllers:** Capa de presentación (Express) que maneja las peticiones y respuestas HTTP.
- **Services:** Capa de lógica de negocio. Contiene el "cerebro" de la aplicación.
- **Repositories:** Capa de acceso a datos. Es la única que se comunica directamente con la base de datos (Prisma).
- **Models:** Definición de DTOs e interfaces de TypeScript.

**Patrón de Diseño:** Se utiliza el **Patrón Repositorio** y **Patrón de Inyección de Dependencias** para desacoplar la lógica de negocio del acceso a datos, facilitando las pruebas y el mantenimiento.

## Stack Tecnológico

- **Runtime:** Node.js 18+
- **Lenguaje:** TypeScript
- **Framework:** Express.js
- **Base de Datos:** PostgreSQL 15
- **ORM:** Prisma
- **Validación:** Zod
- **Testing:** Jest
- **Containerización:** Docker & Docker Compose

## Prerrequisitos

- Node.js 18+
- Docker y Docker Compose
- Git

---

## Instalación y Ejecución

### Opción 1: Con Docker Compose

Esta opción levanta automáticamente la base de datos PostgreSQL y la aplicación.

```bash

git clone
cd ParamService

cp .env.example .env


npm install


npm run prisma:generate


docker-compose up --build
```

**La aplicación estará disponible en:** `http://localhost:3000/api/v1`

---

### Opción 2: Ejecución Manual (Desarrollo)

Si prefieres ejecutar la aplicación localmente sin Docker para el servidor Node:

```bash

git clone
cd ParamService
npm install


cp .env.example .env


docker-compose up -d postgres

npm run prisma:generate


npx prisma migrate dev


npm run dev
```

---

## Configuración de Base de Datos

### Variables de Entorno (.env)

```env
DATABASE_URL="postgresql://admin:mr5qcm2p@localhost:5432/parameter_db?schema=public"
PORT=3000
NODE_ENV=development
API_PREFIX=/api/v1
```

### Comandos de Prisma Útiles

```bash

npm run prisma:generate


npx prisma migrate dev --name nombre_migracion


npx prisma studio

npx prisma migrate reset
```

---

## API Endpoints

Base URL: `http://localhost:3000/api/v1`

### Crear Parámetro

```http
POST /parameters
Content-Type: application/json

{
  "name": "policyAlert",
  "value": true,
  "type": "boolean"
}
```

### Listar Todos los Parámetros

```http
GET /parameters
```

### Obtener Parámetro por ID

```http
GET /parameters/:id
```

### Obtener Parámetro por Nombre

```http
GET /parameters/name/:name
```

### Actualizar Parámetro

```http
PUT /parameters/:id
Content-Type: application/json

{
  "value": false,
  "type": "boolean"
}
```

### Eliminar Parámetro

```http
DELETE /parameters/:id
```

---

## Testing

```bash

npm test


npm run test:coverage


npm run test:watch
```

---
