## 1: Use node 6.4.0 as base:
#FROM node:6.4.0
#
## 2: We'll set the application path as the working directory
#WORKDIR /app
#
## 3: We'll add the app's binaries path to $PATH:
#ENV PATH=/app/bin:$PATH
#
## 4: Install ember-cli and friends:
#RUN set -ex \
#  && npm install -g ember-cli \
#  && npm install -g bower \
#  && npm install -g phantomjs-prebuilt \
#  && npm install -g check-dependencies
#
## 5: Install watchman:
#RUN set -ex \
#  && export WATCHMAN_VERSION=4.6.0 \
#  && curl -SL "https://github.com/facebook/watchman/archive/v${WATCHMAN_VERSION}.tar.gz" | tar -xz -C /tmp/ \
#  && cd /tmp/watchman-${WATCHMAN_VERSION} \
#  && ./autogen.sh \
#  && ./configure \
#  && apt-get update && apt-get install -y --no-install-recommends python-dev \
#  && make \
#  && make install \
#  && apt-get purge -y --auto-remove python-dev \
#  && rm -rf /var/lib/apt/lists/* \
#  && rm -rf /tmp/*
#
## 6: Expose the app and live-reload ports:
#EXPOSE 4200 35730
#
## 7: Set the default command:
#CMD ["ember", "server", "--live-reload-port", "35730"]
FROM node:7.10

RUN mkdir -p /app
WORKDIR /app

# Copy package.json separately so it's recreated when package.json
# changes.
COPY package.json ./package.json
RUN npm -q install
COPY . /app
RUN npm -q install -g phantomjs bower ember-cli ;\
    bower --allow-root install

EXPOSE 4200
EXPOSE 49152

CMD [ "ember", "server" ]
