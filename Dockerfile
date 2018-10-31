FROM mhart/alpine-node
COPY . /serializor
WORKDIR /serializor
RUN npm install

EXPOSE  3000
CMD ["npm", "start"]