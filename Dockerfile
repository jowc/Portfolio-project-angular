# Multi-stage build for Angular application
# Stage 1: Build the Angular application
FROM node:20-alpine AS build

# Set npm registry to use http instead of https to avoid certificate issues
RUN npm config set registry http://registry.npmjs.org/
RUN npm config set strict-ssl false

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with legacy peer deps flag as mentioned in README
# Remove cypress to avoid download issues in Docker
RUN npm pkg delete devDependencies.cypress && \
    npm ci --legacy-peer-deps --no-optional --progress=false

# Copy source code
COPY . .

# Fix lottie dependency issue as mentioned in README
# Replace the deprecated import in ngx-lottie files that contain the import
RUN find node_modules/ngx-lottie -name "*.mjs" -type f -exec grep -l "makeStateKey.*@angular/platform-browser" {} \; | xargs -I {} sed -i 's/makeStateKey } from '\''@angular\/platform-browser'\''/makeStateKey } from '\''@angular\/core'\''/g' {} || true

# Build the application for production using the local Angular CLI
RUN ./node_modules/.bin/ng build --configuration production

# Stage 2: Serve the application with nginx
FROM nginx:alpine AS production

# Copy the built application from the build stage
COPY --from=build /app/dist/joecdev/browser /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]