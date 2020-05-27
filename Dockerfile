FROM hayd/alpine-deno:1.0.0
WORKDIR /app

COPY . ./

# Added to ENTRYPOINT of base image.
CMD ["run", "--allow-net", "--allow-read", "server.ts"]