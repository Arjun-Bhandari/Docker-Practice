#step 1 Base Image
FROM alpine


#step 2 Install a software
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main'>>/etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community'>>/etc/apk/repositories

RUN apk update 
RUN apk add mongodb=3.4.4-r0
RUN apk add binutils


#step 2.5 configure that sofware
VOLUME ["/data/db"]
WORKDIR /data
EXPOSE 27017
RUN apk add isl
#step 3 set default command

CMD ["mongod"]