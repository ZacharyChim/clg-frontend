## ENV

NEXT_PUBLIC_STRAPI_API_URL= 'http://backend.clggroup.com.hk:1338/api'
NEXT_PUBLIC_STRAPI_URL= 'http://backend.clggroup.com.hk:1338'
NEXT_PUBLIC_SITE_URL= 'https://localhost:3000'

# Suggested environment

1. node version: 18.11.13
2. npm version: 8.15.0
3. next.js version: 13.1.1
4. Mac version: 12.5

# Deploy Steps

## Backend

1. ssh to server
2. Stop Strapi:
   1. pm2 strop strapi
   2. pm2 delete 0
3. Rebuild Strapi:
   1. cd /var/www/clg/clg-backend
   2. git reset --hard
   3. git pull
   4. yarn build (possible erro: Reached heap limit --> re-run build)
4. Start Strapi with PM2
   1. cd ~
   2. pm2 start ecosystem.config.js

## Frontend

1. yarn build
