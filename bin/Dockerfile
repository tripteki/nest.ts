FROM node:19.3.0-alpine3.17 as basecode

    ARG TZ
    ARG NODE_NAME
    ARG NODE_ENV
    ARG CENTER_START_PORT=5000
    ARG CENTER_END_PORT

    ENV PM2_HOME=logs/ecosystem
    ENV TZ=${TZ}
    ENV NODE_NAME=${NODE_NAME}
    ENV NODE_ENV=${NODE_ENV}

    WORKDIR /var/www/${NODE_NAME}/
    COPY . .
    RUN apk update \
        && \
        if [ ! -e /tmp/.cache ]; then \
            apk add --no-cache --virtual curl \
            && \
            npm install --legacy-peer-deps; \
            touch /tmp/.cache; \
        fi \
        && \
        NODE_ENV=production ./bin/project -b -l -t -e -c;

    EXPOSE ${CENTER_START_PORT}-${CENTER_END_PORT}
    EXPOSE 8000

    ENTRYPOINT []
    CMD ["npx", "pm2-runtime", "start", "ecosystem.json"]
