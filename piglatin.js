console.log('hallo');

const args = process.argv;
const string = 'string';

function allLetter(args)
      { 
      var letters = /^[A-Za-z]+$/;
      if(args.value.match(letters))
      {
      alert('You use only letters!');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }