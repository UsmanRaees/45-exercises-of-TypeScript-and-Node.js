let Guest_List :string[] = ['Anik','Hassan','Mohaib'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'Anik';

let new_Guest :string = 'Arbaz';

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

console.log( `Mr. ${absent_Guest} is not coming to the party.` )

console.log('Good News! We found a Big Table So we are inviting 3 more Guest.')

Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0, 'Dayyan');
Guest_List.push('Zameer') ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}