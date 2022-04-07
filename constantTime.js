//_______________________________________________________O(1)____________________________________________________________________________//

const coolName = (name) =>{
    if(name.length >= 1){ 
        //length is a built in property in JS and in most languages. length of name wont matter because the property is O(1)!
        console.log(`cool name!, ${name}`)
    }
}

module.exports = coolName;