// arguments and parameters

const speak = function(name = 'Mark', time = 'night'){
    console.log(`good ${time} ${name}`);
};

speak('Diana');
// speak('', 'morning')