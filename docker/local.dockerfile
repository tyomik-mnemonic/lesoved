FROM nginx:1.15.1


RUN apt update && apt install -y python3-pip supervisor libgdal-dev

ENV work_dir /app

WORKDIR ${work_dir}

# Install python requirements
ADD requirements.txt ${work_dir}/
RUN CPLUS_INCLUDE_PATH=/usr/include/gdal C_INCLUDE_PATH=/usr/include/gdal \
    pip3 install -r requirements.txt

# Configure system services
ADD docker           ${work_dir}/docker
RUN cp ./docker/conf/supervisord.conf /etc/supervisor/conf.d/supervisord.conf && \
    cp ./docker/conf/nginx.conf /etc/nginx/conf.d/default.conf

ADD . ${work_dir}

RUN python3 manage.py collectstatic --noinput

EXPOSE 80

# set default locale for python
ENV LANG C.UTF-8

# Allow celery as root
ENV C_FORCE_ROOT True

CMD /app/docker/local_start.sh
