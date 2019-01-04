# Bagle-Challenge-Box




Note : This code is purposefully vulnerable to remote code execution, do not run on an external facing asset!



Usage:
Navigate to the docker-compose.yml file.
Enter the following:

docker-compose up





If you want to set up loading balancing between several application servers, use the docker-compose-with-loadbalancer.yml, along with the following docker-compose commands:


docker-compose up -d --scale bagle-app=NUM_OF_SERVERS

That's it, have fun ;)
