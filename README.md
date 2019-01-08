# Bagle-Challenge-Box




Note : This code is purposefully vulnerable to remote code execution, do not run on an external facing asset!


This challenge will teach you basic NoSQL injection for authentication bypass, advanced JavaScript tricks and NodeJS deserialization.

</br>Description:
</br>This challenge contains 3 stages:
</br>1.Authentication bypass
</br>2.Finding clues in the JavaScript
</br>3.Executing code on the application server with Node.JS deserialization through unconverntional methods.
</br></br>
</br>If you read the client side thoroughly enough, only then will you be able to execute code on the server.
</br>Don't be lazy with it, otherwise you won't get the right payload for the last stage :)

</br>Usage:
</br>Navigate to the docker-compose.yml file.
</br>Enter the following:
</br></br>
docker-compose up

</br></br></br>



If you want to set up loading balancing between several application servers, use the docker-compose.yml, edit the virtual host environment variable in the yml file to the desired site name (please note, if you won't do the last thing, you'll receive error 513 from nginx when acessing the application with a mismatching host header) along with the following docker-compose commands:


docker-compose up -d --scale bagle-app=NUM_OF_SERVERS

That's it, have fun ;)
