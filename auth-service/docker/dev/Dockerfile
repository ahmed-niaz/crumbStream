FROM node:24-slim

# Set working directory
WORKDIR /usr/src/app

# Enable Corepack / pnpm (matches the version declared in package.json)
RUN corepack enable

# Copy package descriptors for layer caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies (skipping husky/prepare scripts)
RUN pnpm install --ignore-scripts

# Copy source code
COPY . .

# Expose server port (adjust to match your PORT in .env, e.g. 3001)
EXPOSE 3001

# Start the dev server
CMD ["pnpm", "run", "dev"]