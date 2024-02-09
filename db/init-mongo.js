db.createUser(
    {
        user: "root",
        pwd: "mongopass",
        roles: [
            {
                role: "readWrite",
                db: "social"
            }
        ]
    }
);
// db.createCollection("test");