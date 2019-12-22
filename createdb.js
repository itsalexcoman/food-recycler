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
        name: "Grupul 1"
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
        quantity: 2,
        unit: "Litri",
        expiry_date: "2020-01-03"
    })
    
    let user = await db.Users.create({
        id: 2,
        email: "radu@yahoo.com",
        password: "1234",
        full_name: "Radu Ionescu",
        building_code: 1,
        room_number: 100
    })

    let building = await db.Buildings.create({
        code: 2,
        name: "Cladirea 2"
    })
    
    let group = await db.Groups.create({
        id: 2,
        name: "Grupul 2"
    })

    let groupMembership = await db.GroupMembership.create({
        id: 2,
        user_id: user.id,
        group_id: group.id
    })
    
    let product = await db.Products.create({
        id:2,
        name: "Spaghete Barilla",
        type: "Paste",
        user_id: 2,
        quantity: 1,
        unit: "Grame",
        expiry_date: "2020-03-03"
    })
    
    let user = await db.Users.create({
        id: 3,
        email: "bogdan@yahoo.com",
        password: "1234",
        full_name: "Bogdan Popa",
        building_code: 2,
        room_number: 200
    })

    let building = await db.Buildings.create({
        code: 3,
        name: "Cladirea 3"
    })
    
    let group = await db.Groups.create({
        id: 3,
        name: "Grupul 3"
    })

    let groupMembership = await db.GroupMembership.create({
        id: 3,
        user_id: user.id,
        group_id: group.id
    })
    
    let product = await db.Products.create({
        id:3,
        name: "Sunca de Praga Meda",
        type: "Mezeluri",
        user_id: 3,
        quantity: 4,
        unit: "Grame",
        expiry_date: "2020-01-02"
    })
    
    console.log('Tables created.')    
}).catch(() => {
    console.log('Could not create tables.')
})