# RewardsAPI
Rewards API gives you the reward points if you give your restaurant/hotel receipt details to it!

# How to Use

1. Clone the repository

  
       You can use Dockerfile as well docker compose for the docker setup
           Build the docker file using the command -
   
               docker build -t rewardsapi . (Don't miss this dot)
   
           Run the docker file to start the container -

               docker run -p 3000:3000 rewardsapi
  
   Using Docker compose 

       Build using this command -
   
         docker compose build
   
       To run the container -
   
         docker compose up

3. To run the app on the local use the command - 

       npm run start

5. Testing it on postman

     POST http://localhost:3000/receipts/process
     Add a valid JSON payload in the body.

     Example:

            {
          "retailer": "M&M Corner Market",
          "purchaseDate": "2022-03-20",
          "purchaseTime": "14:33",
          "items": [
           {
              "shortDescription": "Gatorade",
              "price": "2.25"
            },{
              "shortDescription": "Gatorade",
              "price": "2.25"
            },{
              "shortDescription": "Gatorade",
              "price": "2.25"
            },{
              "shortDescription": "Gatorade",
              "price": "2.25"
            }
          ],
          "total": "9.00"
          }
   
  Id will be generated

    GET http://localhost:3000/receipts/{id}/points
    Replace {id} with the receipt ID returned from the POST request.           

