import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aumentar límite de body para Server Actions (subida de archivos)
  // El límite de storage es 10MB, ponemos 12MB para incluir overhead
  experimental: {
    serverActions: {
      bodySizeLimit: '12mb',
    },
  },
  // Configuración de imágenes remotas
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
