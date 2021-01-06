const starter = ['Good Morning!!','Hello !!','Hi Dear!!','Lovely Day huh!!','Hey Champ!!']
const finisher = ['Have a great day Go Getter!!','Go get them champ!!','Roar tiger!!','You\'ve got this Warrior!!','Let\'s go dream chaser!!']
const intro = ['Always Remember:','Today :','Rise and shine!','The world is your dance floor:','The morning bird\'s song says:']
const _starter = ['Create a Positive Environment','Celebrate Your Small Wins',' Surround Yourself With Motivated People','Impossible is just an opinion.','A smooth sea never made a skilled sailor','Be a Nike fan;just do it!!']
const _finisher = ['Your imagination is your only limitation', 'Sometimes later becomes never. Do it now!','Great things never come from comfort the zone.', 'Dream it. Wish it. Do it']
function rando_Message (){
    let finish_index = Math.floor(Math.random() * finisher.length);
    let start_index = Math.floor(Math.random() * starter.length);
    let introIndex = Math.floor(Math.random() * intro.length);
    let index_1 = Math.floor(Math.random() * _starter.length);
    let index_2 = Math.floor(Math.random() * _finisher.length);
    return `${starter[start_index]} ${intro[introIndex]}\n  ${_starter[index_1]}, ${_finisher[index_2]}\n  ${finisher[finish_index]}`;
}
console.log(rando_Message());
