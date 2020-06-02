FROM hayd/alpine-deno:1.0.0

WORKDIR '/app'

COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Added to ENTRYPOINT of base image.
CMD ["run", "--allow-net", "--allow-read", "server.ts"]