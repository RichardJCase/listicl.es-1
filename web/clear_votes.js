db.users.updateMany({}, {$set: {votes: []}})
db.posts.updateMany({}, {$set: {votes: []}})
db.users.updateMany({}, {$set: {net_votes: 0}})
db.posts.updateMany({}, {$set: {net_votes: 0}})
db.votes.deleteMany({})