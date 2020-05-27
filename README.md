# deno-chat-app
a demonstration of deno chat app

## download deno

for mac :
### `brew install deno`
for Linux :
### `curl -fsSL https://deno.land/x/install/install.sh | sh`
for windows :
### `scoop install deno`
ou
### `choco install deno `
ou
### `iwr https://deno.land/x/install/install.ps1 -useb | iex`
then:
### `deno --version`


## Available Scripts
run the app with:
### `deno run --allow-net --allow-read server.ts`
ou avec docker
### `docker build -t app . && docker run -it --init -p 3000:3000 app`

and go to :
* *chat* : [http://localhost:3000](http://localhost:3000)


