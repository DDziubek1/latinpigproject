
//saving input to the variable args ---> node path arg arg arg ...
const [node, file, ...args] = process.argv;
//creating empty array
const translated=[];



for (let i = 0; i < args.length; i++) {
      if (args[i].match(/^[aeiouy]/)) {
        //starts with vowel                     /^[aeiouy]/
        //prints word + way                     ^ - matches the beginning of the string
        //example: is + way = isway             [aeiouy] - with the letters 'a,e,i,o,u,y'


        translated[i] = args[i].replace(/(.+)/, "$1way");
        //                                       /(.+)/, "$1way
        //                                      (.+) - groups ($1) the letters together
        //                                      $1way - prints the group of the letters, adds 'way'


      } else if (args[i].match(/[aeiouy]/g)) {
        //starts with a consonant and a vowel OR starts with two consonants,        /[aeiouy]/g -looks for the vowel in the whole string
        //prints first consonant OR first two consonants  of the word at the end and adds 'ay'      g - global search in a string
        //example: 'hard' = ardhay
        //example2: 'speak' = eakspay
        
        translated[i] =  args[i].replace(/(^[^aeiouy]+)(.+)/g, "$2$1ay");
        //                                      /(^[^aeiouy]+) - creates a $1 group that matches any character that isn't in the set
        //                                      (.+)/g - creates a $2 second group of the remaining letters 
        //                                      "$2$1ay" - prints the $2 second group, prints the $1 first group, adds 'ay'
      } 
      
    }

//adding space to the array instead of default comma 
    const translatedString = translated.join(' ');

    console.log('Your input: '+ args.join(' '));
    console.log('Translation: ' + translatedString);

