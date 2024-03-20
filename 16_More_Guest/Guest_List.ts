let Guest_List :string[] = ['Anik','Hassan','Mohaib'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'Anik';

let new_Guest :string = 'Arbaz';

Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){

//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

//}

console.log( `Mr. ${absent_Guest} is not coming to the party.` )

console.log('Good News! We found a Big Table So we are inviting 3 more Guest.')

// I added 3 guest here.
Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0, 'Dayyan');
Guest_List.push('Zameer') ;
// I printed arrays of 6 guest here.
for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}
 // Sorry messgae to invited guest for not inviting
console.log('\nSorry we can not arrange big table, Only Two people will be invited.');

// I removed guest from here.
while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
   console.log(`Sorry Mr. ${remove_Guest}`, 'you are not invited');
}

// Our remaining two invited guest.
for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')

}

// I removed all the guest from the array.
Guest_List.splice(0, 2)
console.log(Guest_List);