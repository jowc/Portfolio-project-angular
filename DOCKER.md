# Docker Guide for Joecdev Portfolio

This directory contains Docker configuration files to containerize the Angular portfolio application.

## Files

- `Dockerfile` - Multi-stage build that compiles the Angular app from source
- `Dockerfile.simple` - Simple build using pre-compiled assets
- `nginx.conf` - Custom nginx configuration for serving the Angular SPA
- `.dockerignore` - Files and directories to exclude from Docker context

## Quick Start

### Option 1: Using Pre-built Application (Recommended for local testing)

1. Build the Angular application:
```bash
npm i --legacy-peer-deps
npm run build
```

2. Build and run the Docker image:
```bash
docker build -f Dockerfile.simple -t joecdev-portfolio .
docker run -p 8080:80 joecdev-portfolio
```

3. Open http://localhost:8080 in your browser

### Option 2: Full Build from Source

Build and run using the multi-stage Dockerfile:
```bash
docker build -t joecdev-portfolio .
docker run -p 8080:80 joecdev-portfolio
```

**Note:** The full build may have network connectivity issues in some environments due to dependency downloads.

## Known Issues & Solutions

### Lottie Dependency Issue
The build process automatically fixes a known issue with the ngx-lottie dependency where `makeStateKey` import needs to be updated from `@angular/platform-browser` to `@angular/core` for Angular 15+.

### Google Fonts
The build configuration has been updated to disable font inlining to avoid network connectivity issues during build.

### Cypress
The build process removes Cypress from dependencies to avoid download issues in Docker environments.

## Configuration

### Nginx Configuration
The `nginx.conf` file includes:
- Single Page Application (SPA) routing support
- Asset caching
- Security headers
- Gzip compression

### Port Configuration
The application runs on port 80 inside the container. Map it to any host port using the `-p` flag:
```bash
docker run -p 3000:80 joecdev-portfolio  # Access via localhost:3000
```

## Production Deployment

For production deployment, consider:
1. Using a proper reverse proxy/load balancer
2. Adding SSL termination
3. Setting up proper health checks
4. Using container orchestration (Kubernetes, Docker Swarm)
5. Implementing proper logging and monitoring