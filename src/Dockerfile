# STAGE 1
FROM node:18-alpine as build
WORKDIR /lepcorpsas1
#RUN git checkout entrega2
COPY . .
#COPY package.json .

RUN npm i -g pnpm
RUN pnpm install
#COPY ./ .
RUN pnpm build


# STAGE 2
FROM nginx
COPY --from=build /lepcorpsas1/dist/ /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#FROM nginx
#COPY dist/ /usr/share/nginx/html/
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


#FROM nginx
#copy pag1nginx.html /usr/share/nginx/html/
#COPY dist/book-list/ /usr/share/nginx/html/
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

## Copy the Angular app build to nginx directory
#COPY --from=build /abc-jobs-frontend/dist/book-list /usr/share/nginx/html
## Copy the nginx configuration file
#COPY nginx.conf /etc/nginx/conf.d/default.conf
## Expose port 80 to the host system
#EXPOSE 80
## Start Nginx when the container starts
#CMD ["nginx", "-g", "daemon off;"]

## STAGE 1
#FROM node:18-alpine as build
#WORKDIR /ABC_Jobs
#COPY package.json .

#RUN npm i -g pnpm
#RUN pnpm install
#COPY . .
#RUN pnpm build

## STAGE 2
#FROM nginx
#COPY --from=build /abc-jobs/dist/ /usr/share/nginx/html
##COPY nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


################ AWS #############################
#FROM nginx
#copy pag1nginx.html /usr/share/nginx/html/
#COPY dist/book-list/ /usr/share/nginx/html/
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

## Copy the Angular app build to nginx directory
#COPY --from=build /abc-jobs-frontend/dist/book-list /usr/share/nginx/html
## Copy the nginx configuration file
#COPY nginx.conf /etc/nginx/conf.d/default.conf
## Expose port 80 to the host system
#EXPOSE 80
## Start Nginx when the container starts
#CMD ["nginx", "-g", "daemon off;"]

## STAGE 1
## Use the official Node.js image
#FROM node:18-alpine as build
## Set the working directory
#WORKDIR /abc-jobs-frontend
## Copy dependencies files
#COPY package.json .
## Install pnpm
#RUN npm i -g pnpm
## Install dependencies
#RUN pnpm install
## Copy the rest of files
#COPY . .
## Build the web application
#RUN pnpm build
## STAGE 2
## Use the official Nginx image
#FROM nginx
## Copy the Angular app build to nginx directory
#COPY --from=build /abc-jobs-frontend/dist/book-list /usr/share/nginx/html
## Copy the nginx configuration file
#COPY nginx.conf /etc/nginx/conf.d/default.conf
## Expose port 80 to the host system
#EXPOSE 80
## Start Nginx when the container starts
#CMD ["nginx", "-g", "daemon off;"]