# Introduction to mongoDB

- So yea NoSQL based DB which supports JSON like data to get stored in it
- mongoDB comes with atlas too which is DB as a service that they'll setup the entire DB and we don't have to care about anything 
- so we'll learn mongo CRUD operations and stuff and then we'll switch to atlas

# Some jargons 

1. scaling horizontally means increasing the number of servers to handle the load of data manipulation
2. scaling vertically means increasing the computation power of the server by adding better hardware resources
3. clusters are group of servers serving a single large database, where the individual servers in the entire cluster are known as shards 
4. Sometimes databases take the approach of using replica sets (shards only) which store the same data of some shard which can go down and in that case the application still runs smoothly and provides the data efficiently

# Security features of Mongo, which we can learn from and apply in SQL databases

> 1. Encryption at rest

- so mongo encrypts the data before storing it in the physical disks and also ensures that no one can gain the access to the data even if they get the physical access of the Database

> 2. VPC peering and SSL/TLS encryption

- so mongo basically uses some sort of networking which makes sure that 2 cloud servers (one of them being the mongo Cluster itself and the other being the backend server of the application) connect with each other as if the servers are on the same LAN let's say 
- This makes their connection secure 
- SSL/TLS encryption makes sure that the data transferred between the application and the cluster is encrypted first and then transported so that middle man attacks can be avoided

> 3. RBAC

- role based access control is pretty basic feature that is almost present in every DB that user is restricted to certain tasks only like let's say Read only if the role of the user is not sufficient
- we can decide who can do what in the DB

> 4. IP whitelisting

- This is a pretty dope feature
- so let's say the admin account got hacked and now hacker will try to access the database through his unknown machine with a new IP address, but IP whitelisting makes sure that only trusted IP's are allowed to access the mongo Cluster itself
