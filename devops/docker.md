## DOCKER

## START CONTAINER

`docker run -dp 3000:3000 docker-101` -3000(host_port):3000(container_port)
`docker run -dp 80:80 docker/getting-started:pwd`

## PULL/DOWNLOAD AND RUN IMAGE CONTAINER FROM REMOTE

`docker run -dp 3000:3000 dockerhub_username/101-todo-app` - pull image from DockerHub
s
## GREAT EXPLANATION OF DOCKER CONTAINERS

<https://www.youtube.com/watch?v=8fi7uSYlOdc&t=1s>

## DOCKERFILE

Create a Dockerfile file

```
FROM node:10-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "/app/src/index.js"]
```

## BUILD CONTAINER IMAGE

`docker build -t docker-101 .`

## SEE AVAILABLE IMAGES

`docker image ls`

## GET DOCKER ID 

`docker ps`

## STOP A CONTAINER

`docker stop <the-container-id>`

## REMOVE OLD CONTAINER

`docker rm <the-container-id>`

## STOP AND REMOVE A CONTAINER IN ONE COMMAND

`docker rm -f <the-container-id>`

## PUSHING A NEW IMAGE TO A REPOSITORY

```
docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname
```

`docker push dockersamples/101-todo-app`

## LOGIN TO DOCKER HUB FROM CONSOLE

`docker login -u -YOUR-USER-NAME`

## TAG AN IMAGE

`docker tag docker-101 lazaruszamenhof/101-todo-app`

## START A NEW UBUNTU CONTAINER

`docker run -d ubuntu bash -c "shuf -i 1-10000 -n 1 -o /data.txt && tail -f /dev/null"`

## EXECUTE INTO THE CONTAINER

`docker exec <container-id> cat /data.txt`

## VOLUMES

Volumes provide the ability to connect specific filesystem paths of the container back to the host machine. If a directory in the container is mounted, changes in that directory are also seen on the host machine. 

## NAMED VOLUMES

## CREATE A VOLUME

`docker volume create todo-db`

`docker run -dp 3000:3000 -v todo-db:/etc/todos docker-101`

## CHECK WHERE ROCKER IS STORING DATA WITH NAMED VOLUMES

`docker volume inspect`

"Mountpoint" says where the data is stored

## DOCKER ON LINUX

`docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?.`

In case you run into the mentioned error, run the following commands.

## HOW TO RUN DOCKER ON WSL?

1. Upgrade Windows to latest version

<https://support.microsoft.com/en-gb/topic/november-15-2022-kb5020030-os-builds-19042-2311-19043-2311-19044-2311-and-19045-2311-preview-237a9048-f853-4e29-a3a2-62efdbea95e2>

2. Reinstall WSL (follow stackoverflow advice)

<https://askubuntu.com/questions/1379425/system-has-not-been-booted-with-systemd-as-init-system-pid-1-cant-operate>

<https://appuals.com/cannot-connect-to-the-docker-daemon-at-unix-var-run-docker-sock/>

## HOW TO RUN JUPYTER NOTEBOOKS/LABS ON DOCKER?

<https://towardsdatascience.com/how-to-run-jupyter-notebook-on-docker-7c9748ed209f>