# Microservicio de Parámetros

Microservicio para la gestión de parámetros con soporte para múltiples tipos de datos (string, number, boolean, json, array), construido con Node.js, TypeScript, Express, Prisma y PostgreSQL.

## Arquitectura

Este proyecto utiliza una **Arquitectura en Capas (Layered Architecture)** para separar las responsabilidades:

- **Controllers:** Capa de presentación (Express) que maneja las peticiones y respuestas HTTP.
- **Services:** Capa de lógica de negocio. Contiene el "cerebro" de la aplicación.
- **Repositories:** Capa de acceso a datos. Es la única que se comunica directamente con la base de datos (Prisma).
- **Models:** Definición de DTOs e interfaces de TypeScript.

**Patrón de Diseño:** Se utiliza el **Patrón Repositorio** y **Patrón de Inyección de Dependencias** para desacoplar la lógica de negocio del acceso a datos, facilitando las pruebas y el mantenimiento.

## 🛠️ Stack Tecnológico

- **Runtime:** Node.js 18+
- **Lenguaje:** TypeScript
- **Framework:** Express.js
- **Base de Datos:** PostgreSQL 15
- **ORM:** Prisma
- **Validación:** Zod
- **Testing:** Jest
- **Containerización:** Docker & Docker Compose

## 📋 Prerrequisitos

- Node.js 18+
- Docker y Docker Compose
- Git

---

## 🚀 Instalación y Ejecución Local

Sigue estos pasos para levantar el proyecto en un entorno local.

### 1. Clonar el repositorio

```bash
git clone <URL-DE-TU-REPOSITORIO-GIT>
cd parameter-service
```

npm install

Copia el archivo de ejemplo y edítalo con tus credenciales locales.
cp .env.template .env

Ejecutar con Docker Compose
docker-compose up --build

docker-compose up --build

Ejecución Manual

# 1. Levantar solo la base de datos

docker-compose up -d postgres

# 2. Aplicar las migraciones de la base de datos

npx prisma migrate dev

# 3. Generar el cliente de Prisma

npx prisma generate

# 4. Iniciar la aplicación en modo desarrollo

npm run dev
