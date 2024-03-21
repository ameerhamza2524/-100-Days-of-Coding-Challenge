let guest_list :string[] = ['Abdul_whab','arbaz','fhad'];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' +guest_list[i]+',\n\nit is our pleassur to invite you in our party.\n\nThank you!\n\n')

}
let absent_guest :string = 'arbaz' ;

let new_guest :string = 'hasnen' ;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' +guest_list[i]+',\n\nit is our pleassur to invite you in our party.\n\nThank you!\n\n')

}
console.log(`Mr.${absent_guest}is not coming to tha party.`);