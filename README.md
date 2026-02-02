# NewProject

Sistema de gestión empresarial construido con Next.js 16, React 19, Prisma 7 y shadcn/ui.

## Requisitos Previos

- Node.js 18+ (recomendado 20+)
- Docker y Docker Compose
- npm

## Instalación

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone <url-del-repositorio>
cd newproject
npm install
```

### 2. Configurar variables de entorno

Copiar el archivo de ejemplo y configurar las variables:

```bash
cp .env.example .env
```

Configurar las siguientes variables en `.env`:

```env
# Base de datos
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/newproject?schema=public"

# Clerk (Autenticación)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Storage (MinIO local)
STORAGE_PROVIDER="s3"
S3_ENDPOINT="http://localhost:9000"
S3_ACCESS_KEY="minioadmin"
S3_SECRET_KEY="minioadmin123"
S3_BUCKET="documents"
S3_REGION="us-east-1"
S3_FORCE_PATH_STYLE="true"
```

### 3. Levantar Docker (Base de datos + Storage)

```bash
# Solo PostgreSQL
docker-compose up -d db

# PostgreSQL + MinIO (storage S3)
docker-compose --profile storage up -d
```

### 4. Configurar la base de datos

```bash
# Generar el cliente de Prisma
npm run db:generate

# Aplicar el schema a la base de datos
npm run db:push

# Poblar con datos de prueba
npm run db:seed
```

### 5. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Comandos Disponibles

### Desarrollo

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Turbopack |
| `npm run build` | Genera el build de producción |
| `npm run start` | Inicia el servidor de producción |

### Base de Datos (Prisma)

| Comando | Descripción |
|---------|-------------|
| `npm run db:generate` | Genera el cliente de Prisma |
| `npm run db:push` | Aplica el schema a la BD (desarrollo) |
| `npm run db:migrate` | Crea una nueva migración |
| `npm run db:migrate:deploy` | Aplica migraciones en producción |
| `npm run db:studio` | Abre Prisma Studio (GUI para la BD) |
| `npm run db:seed` | Ejecuta el seed para poblar datos |

### Calidad de Código

| Comando | Descripción |
|---------|-------------|
| `npm run lint` | Ejecuta ESLint |
| `npm run lint:fix` | Corrige errores de ESLint automáticamente |
| `npm run format` | Formatea el código con Prettier |
| `npm run format:check` | Verifica el formato sin modificar |
| `npm run check-types` | Verifica tipos de TypeScript |

### Testing (Cypress)

| Comando | Descripción |
|---------|-------------|
| `npm run cy:open` | Abre Cypress en modo interactivo |
| `npm run cy:run` | Ejecuta tests en modo headless |
| `npm run test:e2e` | Levanta el servidor y ejecuta tests |
| `npm run test:e2e:open` | Levanta el servidor y abre Cypress |

### Docker

```bash
# Levantar solo la base de datos
docker-compose up -d db

# Levantar base de datos + MinIO (storage)
docker-compose --profile storage up -d

# Ver logs de MinIO
docker-compose logs -f minio

# Detener todos los servicios
docker-compose --profile storage down

# Detener y eliminar volúmenes (reset completo)
docker-compose --profile storage down -v
```

## Servicios

### MinIO Console (Storage)

Cuando MinIO está corriendo:
- URL: [http://localhost:9001](http://localhost:9001)
- Usuario: `minioadmin`
- Password: `minioadmin123`

### Prisma Studio

```bash
npm run db:studio
```
Abre en [http://localhost:5555](http://localhost:5555)

## Tech Stack

- **Framework**: Next.js 16.1.3 + React 19
- **Base de Datos**: PostgreSQL + Prisma 7
- **UI**: shadcn/ui + Tailwind CSS v4
- **Autenticación**: Clerk
- **Estado**: Zustand + Jotai + React Query
- **Formularios**: React Hook Form + Zod
- **Storage**: MinIO (dev) / Cloudflare R2 (prod)

## Estructura del Proyecto

```
src/
├── app/           # Routing (App Router)
│   ├── (auth)/    # Rutas de autenticación
│   └── (core)/    # Rutas principales (/dashboard/...)
├── modules/       # Lógica de negocio por dominio
├── shared/        # Código compartido (UI, hooks, utils)
└── providers/     # React Context Providers
```

Para más detalles sobre la arquitectura, ver [CLAUDE.md](./CLAUDE.md).
