const users = [

    {username: 'ppc90', age: 30, premium: false},
    
    {username: 'lu65', age: 24, premium: true},
    
    {username: 'maria3', age: 36, premium: false},
    
    {username: 'abc123', age: 30, premium: false},
    
    {username: 'sergio58', age: 30, premium: true},
    
    ];

const premiumUsers = users.filter(function (user) {
    return user.premium == true
})

console.log('Los usuarios premium son:')

premiumUsers.map(function (premiumUser) {
    console.log("   - "+premiumUser.username+" de "+premiumUser.age+" años")
})

const noPremiumUsers = users.filter(function (user) {
    return user.premium == false
})

console.log("La array de usuarios que no son premium es: ",noPremiumUsers)

