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