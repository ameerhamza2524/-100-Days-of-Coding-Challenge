let guest_list :string[] = ['Abdul_whab','arbaz','fhad'];

// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. ' +guest_list[i]+',\n\nit is our pleassur to invite you in our party.\n\nThank you!\n\n')

// }
let absent_guest :string = 'arbaz' ;

let new_guest :string = 'hasnen' ;

guest_list[0] = new_guest ;

// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. ' +guest_list[i]+',\n\nit is our pleassur to invite you in our party.\n\nThank you!\n\n')

// }
// console.log(`Mr.${absent_guest}is not coming to tha party.`);
// console.log('good news we find big table so we are inviting 3 more guest.')
guest_list.unshift('sar zia khan');
guest_list.splice(2 , 0 , 'Maryam nawaz');
guest_list.push('Bilawal bhotto zardary');

// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. ' +guest_list[i]+',\n\nit is our pleassur to invite you in our party.\n\nThank you!\n\n')

// }

// console.log('\nSorry we can not arrange big table, only two papple will be invited.')
while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
    // console.log(`sorry Mr. ${remove_guest}, you are invited for Dinner.`);
}

// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. ' +guest_list[i]+',\n\nyou are istel invited.\n\nThank you!\n\n')

// }
guest_list.splice(0 , 2);
console.log(guest_list);
// Exercrise 19
console.log(`totle number of guest Are: ${guest_list.length}`);