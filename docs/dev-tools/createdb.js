var db = require("../../backend/models/index");

db.sequelize
  .sync({ force: true })
  .then(async () => {
    // Add buildings
    console.log("Adding buildings...");

    let building1 = await db.Buildings.create({
      name: "Developers' Building"
    });

    let building2 = await db.Buildings.create({
      name: "Building IX"
    });

    let building3 = await db.Buildings.create({
      name: "Building XIV"
    });

    // Add users
    console.log("Adding users...");

    let user1 = await db.Users.create({
      name: "Alex Coman",
      email: "itsalexcoman@gmail.com",
      password: "sophisticatedPassword#",
      building_code: building1.code,
      room_number: 200
    });

    let user2 = await db.Users.create({
      name: "Andrew Loverdale",
      email: "andrew.loverdale@gmail.com",
      password: "testPassword!",
      building_code: building2.code,
      room_number: 301
    });

    let user3 = await db.Users.create({
      name: "John Magoo",
      email: "john.magoo@gmail.com",
      password: "testPassword!",
      building_code: building3.code,
      room_number: 106
    });

    let user4 = await db.Users.create({
      name: "Michael Tisdale",
      email: "michael.tisdale@gmail.com",
      password: "testPassword!",
      building_code: building2.code,
      room_number: 208
    });

    let user5 = await db.Users.create({
      name: "Edward Heisenberg",
      email: "edward.hb@gmail.com",
      password: "testPassword!",
      building_code: building2.code,
      room_number: 208
    });

    let user6 = await db.Users.create({
      name: "Stewart Richardson",
      email: "s.richardson@gmail.com",
      password: "testPassword!",
      building_code: building3.code,
      room_number: 401
    });

    // Add groups
    console.log("Adding groups...");

    let group1 = await db.Groups.create({
      name: "Building IX Group",
      description: "A group for Building IX residents.",
      admin_id: user1.id
    });

    let group2 = await db.Groups.create({
      name: "Building XIV Group",
      description: "A group for Building XIV residents.",
      admin_id: user1.id
    });

    let group3 = await db.Groups.create({
      name: "Vegan Lovers",
      description: "Stop Animal Cruelty",
      admin_id: user2.id
    });

    let group4 = await db.Groups.create({
      name: "Vanilla Delight",
      description: "Join our group for all things vanilla :)",
      admin_id: user4.id
    });

    // Add memberships
    console.log("Adding group memberships...");

    let membership1 = await db.Membership.create({
      user_id: user2.id,
      group_id: group1.id
    });

    let membership2 = await db.Membership.create({
      user_id: user2.id,
      group_id: group3.id
    });

    let membership3 = await db.Membership.create({
      user_id: user3.id,
      group_id: group2.id
    });

    let membership4 = await db.Membership.create({
      user_id: user3.id,
      group_id: group4.id
    });

    let membership5 = await db.Membership.create({
      user_id: user4.id,
      group_id: group1.id
    });

    let membership6 = await db.Membership.create({
      user_id: user4.id,
      group_id: group3.id
    });

    let membership7 = await db.Membership.create({
      user_id: user4.id,
      group_id: group4.id
    });

    let membership8 = await db.Membership.create({
      user_id: user5.id,
      group_id: group1.id
    });

    let membership9 = await db.Membership.create({
      user_id: user5.id,
      group_id: group3.id
    });

    let membership10 = await db.Membership.create({
      user_id: user5.id,
      group_id: group4.id
    });

    let membership11 = await db.Membership.create({
      user_id: user6.id,
      group_id: group2.id
    });

    // Add products
    console.log("Adding products...");

    let product1 = await db.Products.create({
      name: "Milk 1L",
      type: "Dairy",
      user_id: user2.id,
      days_left: 3
    });

    let product2 = await db.Products.create({
      name: "Salami 200g",
      type: "Meat",
      user_id: user2.id,
      days_left: 5
    });

    let product3 = await db.Products.create({
      name: "Hot Dog 5pc",
      type: "Meat",
      user_id: user3.id,
      days_left: 4
    });

    let product4 = await db.Products.create({
      name: "Butter 1pc",
      type: "Dairy",
      user_id: user4.id,
      days_left: 2
    });

    let product5 = await db.Products.create({
      name: "Tuna 1pc",
      type: "Canned Goods",
      user_id: user4.id,
      days_left: 6
    });

    let product6 = await db.Products.create({
      name: "Zakuska 2pc",
      type: "Canned Goods",
      user_id: user5.id,
      days_left: 4
    });

    let product7 = await db.Products.create({
      name: "Ham 200g",
      type: "Meat",
      user_id: user5.id,
      days_left: 5
    });

    let product8 = await db.Products.create({
      name: "Yogurt 4pc",
      type: "Dairy",
      user_id: user5.id,
      days_left: 7
    });

    console.log("\nTables created.");
  })
  .catch(err => {
    console.log("\nCould not create tables.");
    console.log(err);
  });
