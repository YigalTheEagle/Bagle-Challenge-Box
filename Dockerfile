FROM mhart/alpine-node
COPY . /bagle-challenge-box
WORKDIR /bagle-challenge-box
RUN npm install
EXPOSE  3000
CMD ["npm", "start"]