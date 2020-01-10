var db = require('../../backend/models/index');

db.sequelize.sync({force:true}).then(async () => {
    let building = await db.Buildings.create({
        name: "Cladirea 1"
    })
    
    let user = await db.Users.create({
        email: "andrei@yahoo.com",
        password: "1234",
        full_name: "Andrei Popescu",
        building_code: 1,
        room_number: 100
    })
   
    let group = await db.Groups.create({
        name: "Grupul 1",
        description: "Grupul meu de prieteni",
        admin_id: 1
    })

    let groupMembership = await db.GroupMembership.create({
        user_id: user.id,
        group_id: group.id
    })
    
    let product = await db.Products.create({
        name: "Lapte Zuzu",
        type: "Lactate",
        user_id: 1,
        days_left: 3
    })

    let building2 = await db.Buildings.create({
        name: "Cladirea 2"
    })
    
    let user2 = await db.Users.create({
        email: "andrei2@yahoo.com",
        password: "1234",
        full_name: "Andrei Ionescu",
        building_code: 1,
        room_number: 100
    })    

    let groupMembership2 = await db.GroupMembership.create({
        user_id: user2.id,
        group_id: group.id
    })
    
    let product2 = await db.Products.create({
        name: "Pate Bucegi",
        type: "Conserve",
        user_id: 2,
        days_left: 5
    })

    console.log('Tables created.')    
}).catch(() => {
    console.log('Could not create tables.')
})