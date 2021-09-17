#GRAB THE LAST ALPINE IMAGE
FROM alpine:latest

#INSTALL PYTHON AND PIP 
RUN apk add --no-cache --update python3 py3-pip bash
ADD ./webapp/requirements.txt /tmp/requirements.txt

# INSTALL DEPENDENCIES
RUN pip3 install --no-cache-dir -q -r /tmp/requirements.txt

# ADD OUR CODE
ADD ./webapp opt/webapp/ 
WORKDIR /opt/webapp

# EXPOSED IS NOT SUPPORTED BY HEROKU
# EXPOSED 5000

# RUN THE IMAGE AS A NON-ROOT USER
RUN adduser -D myuser
USER myuser

# RUN THE APP. CMD IS REQUIRED TO RUN ON HEROKU
# $PORT IS SET BY HEROKU
CMD gunicorn --bind 0.0.0.0:$PORT wsgi
