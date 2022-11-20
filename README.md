# Lab 8 - Starter
Julia Le </br>

Explore
1. I would place the tests in a git hub action. Having it at as a GitHub action when code is pushed ensures that the code must pass before any merging is possible. This is crucial since we don’t want any failed code to be part of the final project. Manually running them locally is not quite efficientbecause it reuses us to remember to run the tests. Running them all after development is complete is also not a correct place to run these tests since going back to change the product to pass them is much harder than frequent testing .
2. Yes. 

Expose </b>

4. No. Writing a message appears to involve a lot of parts and the function does not seem isolated enough to accomidate a unit test
5. Yes, we can simply try a message greater than 80 characters an ensure the correct handling is put in place. This is a very specific condition that can appropriately be tested with unit testing. 
