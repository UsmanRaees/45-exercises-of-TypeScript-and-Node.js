let current_users: string[] = ['UsMan', 'SalMan', 'HamZah', 'Hammad', 'Noman'];
let new_users: string[] = ['Shariq', 'UsMan', 'Zain', 'Waqar', 'Hammad'];

new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_users => c_users.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. Please write a different username`);
    }else {
        console.log(`The username ${newUsername} is available.`)
    }
});