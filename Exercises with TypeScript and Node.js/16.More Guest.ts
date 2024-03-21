let guest_list :string[] = ['Abdul_whab','arbaz','fhad'];

// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. ' +guest_list[i]+',\n\nit is our pleassur to invite you in our party.\n\nThank you!\n\n')

// }
let absent_guest :string = 'arbaz' ;

let new_guest :string = 'hasnen' ;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' +guest_list[i]+',\n\nit is our pleassur to invite you in our party.\n\nThank you!\n\n')

}
console.log(`Mr.${absent_guest}is not coming to tha party.`);
console.log('good news we find big table so we are inviting 3 more guest.')
guest_list.unshift('sar zia khan');
guest_list.splice(2 , 0 , 'Maryam nawaz');
guest_list.push('Bilawal bhotto zardary');

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' +guest_list[i]+',\n\nit is our pleassur to invite you in our party.\n\nThank you!\n\n')

}
