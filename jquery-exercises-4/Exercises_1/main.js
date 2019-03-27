 // Write your solution here
 $("#scissors").on('click', function(){
   var result = compare('scissors', computerChoice());
   $("#decision").html(result);
 });

 $('#rock').on('click', function(){
   var result = compare('rock', computerChoice());
   $("#decision").html(result);
 });

 $('#paper').on('click', function(){
   var result = compare('paper', computerChoice());
   $("#decision").html(result);
 });

 $('#lizard').on('click', function(){
   var result = compare('lizard', computerChoice());
   $("#decision").html(result);
 });

 $('#spock').on('click', function(){
   var result = compare('spock', computerChoice());
   $("#decision").html(result);
 });


 var compare = function(me, opponent) {
   if(me === 'rock') {

       if(opponent === 'rock') {
           return 'Tie';
       } else if (opponent === 'paper') {
         return 'My &#x1F44A; lost to &#128400; (╯°□°）╯︵ ┻━┻';
       } else if (opponent === 'scissors') {
         return 'My &#x1F44A; crushed &#9996;! ᕕ( ᐛ )ᕗ';
       } else if (opponent === 'spock') {
         return 'My &#x1F44A; got evaporated by &#128406;! (╯°□°）╯︵ ┻━┻';
       } else if (opponent === 'lizard') {
         return 'My &#x1F44A; crushes &#129422;! ᕕ( ᐛ )ᕗ';
       }

   } else if (me === 'paper') {

       if(opponent === 'paper') {
         return 'Tie';
       } else if (opponent === 'rock') {
         return 'My &#128400; beat &#x1F44A; (╯°□°）╯︵ ┻━┻';
       } else if (opponent === 'scissors') {
         return 'My &#128400; got cut by &#9996;! ᕕ( ᐛ )ᕗ';
       } else if (opponent === 'spock') {
         return 'My &#128400; disproves &#128406;! ᕕ( ᐛ )ᕗ';
       } else if (opponent === 'lizard') {
         return 'My &#128400; got eaten by &#129422;! (╯°□°）╯︵ ┻━┻';
      }

   } else if (me === 'scissors') {

       if(opponent === 'scissors') {
         return 'Tie';
       } else if (opponent === 'paper') {
         return 'My &#9996; beats &#128400; (╯°□°）╯︵ ┻━┻';
       } else if (opponent === 'rock') {
         return 'My &#9996; got crushed by &#x1F44A; ᕕ( ᐛ )ᕗ';
       } else if (opponent === 'spock') {
         return 'My &#9996; got smashed by &#128406;! (╯°□°）╯︵ ┻━┻';
       } else if (opponent === 'lizard') {
         return 'My &#9996; decapitates &#129422;! ᕕ( ᐛ )ᕗ';
      }

    } else if (me === 'spock') {

        if(opponent === 'spock') {
          return 'Tie';
        } else if (opponent === 'paper') {
          return 'My &#128406; got disproven by &#128400; (╯°□°）╯︵ ┻━┻';
        } else if (opponent === 'rock') {
          return 'My &#128406; vaporizes &#x1F44A;! ᕕ( ᐛ )ᕗ';
        } else if (opponent === 'scissors') {
          return 'My &#128406; smashes &#9996;! ᕕ( ᐛ )ᕗ';
        } else if (opponent === 'lizard') {
          return 'My &#128406; got poisoned by &#129422;! (╯°□°）╯︵ ┻━┻';
       }

     } else if (me === 'lizard') {

         if(opponent === 'lizard') {
           return 'Tie';
         } else if (opponent === 'paper') {
           return 'My &#129422; eats &#128400; ᕕ( ᐛ )ᕗ';
         } else if (opponent === 'rock') {
           return 'My &#129422; got crushed by &#x1F44A;! (╯°□°）╯︵ ┻━┻';
         } else if (opponent === 'scissors') {
           return 'My &#129422; got decapitaded by &#9996;! (╯°□°）╯︵ ┻━┻';
         } else if (opponent === 'spock') {
           return 'My &#129422; poisons &#128406; ᕕ( ᐛ )ᕗ';
        }

   } else {
     return "That doesn't make any sense!"
   }
 };

 var computerChoice = function() {
         var random = Math.random();
         if (random < 0.333) {
 	       return  'rock';
       } else if(random < 0.37777) {
 	       return 'paper';
       } else if(random < 0.47777) {
 	       return 'spock';
       } else if(random < 0.57777) {
 	       return 'lizard';
         }
         else {
 	       return 'scissors';
         }
 };
