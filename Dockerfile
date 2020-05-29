FROM node:14-alpine
COPY . /opt/Eurolite-ESN-Ledboard

RUN cd /opt/Eurolite-ESN-Ledboard && yarn install --ignore-optional

USER nobody
CMD /usr/bin/nodejs /opt/Eurolite-ESN-Ledboard/main.js --config /opt/Eurolite-ESN-Ledboard/config/hackcenter.js
