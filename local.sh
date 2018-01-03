#!/bin/bash

docker build -t adamperyman/adamperyman.com:latest .

docker run -it -p 8080:8080 adamperyman/adamperyman.com:latest
