var db = require('./backend/models/index');

db.sequelize.sync({force:true}).then(async () => {
    let user = await db.Users.create({
        id: 1,
        email: "andrei@yahoo.com",
        password: "1234",
        full_name: "Andrei Popescu",
        building_code: 1,
        room_number: 100
    })

    let building = await db.Buildings.create({
        code: 1,
        name: "Cladirea 1"
    })
    
    let group = await db.Groups.create({
        id: 1,
        name: "Grupul 1",
        description: "Grupul meu de prieteni",
        admin_id: 1
    })

    let groupMembership = await db.GroupMembership.create({
        id: 1,
        user_id: user.id,
        group_id: group.id
    })
    
    let product = await db.Products.create({
        id:1,
        name: "Lapte Zuzu",
        type: "Lactate",
        user_id: 1,
        days_left: 3
    })
    
     let user2 = await db.Users.create({
        id: 2,
        email: "andrei2@yahoo.com",
        password: "1234",
        full_name: "Andrei Ionescu",
        building_code: 1,
        room_number: 100
    })

    let building2 = await db.Buildings.create({
        code: 2,
        name: "Cladirea 2"
    })
    

    let groupMembership2 = await db.GroupMembership.create({
        id: 2,
        user_id: user2.id,
        group_id: group.id
    })
    
    let product2 = await db.Products.create({
        id:2,
        name: "Pate Bucegi",
        type: "Conserve",
        user_id: 2,
        days_left: 5
    })
    
    
    console.log('Tables created.')    
}).catch(() => {
    console.log('Could not create tables.')
})