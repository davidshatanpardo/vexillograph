var questions = [];
var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var hue1 = 0;
var sat1 = 0;
var light1 = 0;
var hue2 = 0;
var sat2 = 0;
var light2 = 0;
var hue3 = 0;
var sat3 = 0;
var light3 = 0;
var hue4 = 0;
var sat4 = 0;
var light4 = 0;
var corner1 = 0;
var corner2 = 0;
var corner3 = 0;
var corner4 = 0;

/*
VALUES IN ORDER
0- Size
1- Age
2- Function
3- Light
4- Temperature
5- Saturation
6- Organic
7- Positivity
8- Waves
9- Zig Zags
10- Dots
11- Squares
12- Diamonds
13- Chevrons
14- Stripes


*/
//values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]

questiontype = {
    RADIO : 0,
    CHECKBOX: 1
}

questions.push({
	id: "q1a",
	card: "card1",
	question: 'what is the scale?',
	type: questiontype.RADIO,
	answers: [
		{text: "tiny", smalltext: "(like a desk or chair or swingset or elevator)", values: [/*SIZE*/1, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "small", smalltext: "(like a bedroom or studio or kitchen)", values: [/*SIZE*/2, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "medium", smalltext: "(like a building or small park)", values: [/*SIZE*/3, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 	
		{text: "large", smalltext: "(like a neighborhood or beach or small forest)", values: [/*SIZE*/4, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "huge", smalltext: "(like a city or national park or great lake)", values: [/*SIZE*/5, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "gigantic", smalltext: "(like a state or ocean or country)", values: [/*SIZE*/6, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "unbelieveable", smalltext: "(like a planet or galaxy)", values: [/*SIZE*/7, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
	]
});

questions.push({
	id: "q1c",
	card: "card1",
	question: 'how many people visit here?',
	type: questiontype.RADIO,
	answers: [
		{text: "nobody", smalltext: "(it is untouched)", values: [/*SIZE*/-2, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "barely anyone", smalltext: "(just a small group)", values: [/*SIZE*/-1, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "some people", smalltext: "(a smallish community)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "many people", smalltext: "(a decently large population)", values: [/*SIZE*/1, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "a ton", smalltext: "(too many to count)", values: [/*SIZE*/2, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
	]
});

questions.push({
	id: "q1e",
	card: "card1",
	question: 'all natural or <br>man-made?',
	type: questiontype.RADIO,
	answers: [
		{text: "natural", smalltext: "(like a forest or mountain range or lake)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/5, /*POS*/0] }, 
		{text: "in-between", smalltext: "(like a man-made park)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/2, /*POS*/0] }, 
		{text: "man-made", smalltext: "(like a building or city)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/-5, /*POS*/0] },
	]
});

questions.push({
	id: "q1f",
	card: "card1",
	question: 'how old is this place?',
	type: questiontype.RADIO,
	answers: [
		{text: "incredibly young", smalltext: "", values: [/*SIZE*/0, /*AGE*/-3, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "very young", smalltext: "", values: [/*SIZE*/0, /*AGE*/-2, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "young", smalltext: "", values: [/*SIZE*/0, /*AGE*/-1, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "not so young", smalltext: "", values: [/*SIZE*/0, /*AGE*/1, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "old", smalltext: "", values: [/*SIZE*/0, /*AGE*/2, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "ancient", smalltext: "", values: [/*SIZE*/0, /*AGE*/3, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
	]
});

questions.push({
	id: "q2a",
	card: "card2",
	question: 'geographic features <br>that you associate',
	type: questiontype.CHECKBOX,
	answers: [
		{text: "ocean", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/1, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]}, 
		{text: "beach", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/1, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]}, 
		{text: "river", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/1, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]},
		{text: "lake", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/1, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]},
		{text: "park", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/1]},
        {text: "forest", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/1, /*STRIPES*/0]}, 
        {text: "plains", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/1]},
		{text: "mountain", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/1, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]}, 
		{text: "city/town", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/1, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]},
		{text: "desert", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/-5, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]},
		{text: "farmland", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/1]},
        {text: "industry", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/1, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]}, 
		{text: "highways", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/1, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]}, 
		{text: "glaciers", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCTION*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/-5, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0]},
	]
});

questions.push({
	id: "q2b",
	card: "card2",
	question: 'temperature?',
	type: questiontype.RADIO,
	answers: [
		{text: "hot and dry year round", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/5, /*TEMP*/5, /*SAT*/1, /*ORG*/0, /*POS*/0] }, 
		{text: "hot and wet year round", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/-5, /*TEMP*/5, /*SAT*/-1, /*ORG*/0, /*POS*/0] }, 
		{text: "cold and dry year round", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/5, /*TEMP*/-5, /*SAT*/1, /*ORG*/0, /*POS*/0] },
		{text: "cold and wet year round", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/-5, /*TEMP*/-5, /*SAT*/-1, /*ORG*/0, /*POS*/0] },
		{text: "always pretty agreeable", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/5, /*TEMP*/2, /*SAT*/1, /*ORG*/0, /*POS*/0] },
        {text: "freezing winters, burning summers", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/3, /*ORG*/0, /*POS*/0] }, 
		{text: "icy winters, humid summers", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/-2, /*ORG*/0, /*POS*/0] }, 
	]
});

questions.push({
	id: "q2e",
	card: "card2",
	question: 'climate?',
	type: questiontype.CHECKBOX,
	answers: [
		{text: "overcast", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/-2, /*TEMP*/0, /*SAT*/-3, /*ORG*/0, /*POS*/0] }, 
		{text: "rainy", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/-1, /*TEMP*/-1, /*SAT*/-2, /*ORG*/0, /*POS*/0] }, 
		{text: "sunny", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/3, /*TEMP*/2, /*SAT*/2, /*ORG*/0, /*POS*/0] },
		{text: "snowy", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/1, /*TEMP*/-3, /*SAT*/0, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/0, /*DOTS*/1, /*SQUARES*/0, /*DIAMONDS*/0, /*CHEVRONS*/0, /*STRIPES*/0] },
		{text: "foggy", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/-1, /*SAT*/-2, /*ORG*/0, /*POS*/0] },
        {text: "windy", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/1, /*TEMP*/-1, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "dusty", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/2, /*SAT*/-2, /*ORG*/0, /*POS*/0] }, 
	]
});

questions.push({
	id: "q3b",
	card: "card3",
	question: 'what is its primary function to you?',
	type: questiontype.RADIO,
	answers: [
		{text: "residential", smalltext: "(like houses or apartments or dorms)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/1, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "educational", smalltext: "(like schools or colleges)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/2, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "work", smalltext: "(like offices or studios or wherever you work)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/3, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "entertainment", smalltext: "(like movie theaters or bowling allies)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/4, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "cultural/religious", smalltext: "(like museums or churches)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/5, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
        {text: "recreational", smalltext: "(like a park or a garden)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/6, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "retail", smalltext: "(like a store or mall or boutique)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/7, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
        {text: "food", smalltext: "(like a restaurant or a cafe or a food court)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/8, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
        {text: "no function", smalltext: "(a place doesn't always need a function)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/9, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
	]
});

questions.push({
	id: "q3c",
	card: "card3",
	question: 'describe its visual vibe',
	type: questiontype.CHECKBOX,
	answers: [
		{text: "warm", smalltext: "(cozy, inviting, comforting)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/2, /*SAT*/1, /*ORG*/0, /*POS*/2] }, 
		{text: "cold", smalltext: "(austere, unwelcoming)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/-2, /*SAT*/-1, /*ORG*/0, /*POS*/-1] }, 
		{text: "calm", smalltext: "(soothing, sedate, neat)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/-1, /*TEMP*/0, /*SAT*/-1, /*ORG*/0, /*POS*/1] },
		{text: "chaotic", smalltext: "(exciting, busy, vibrant)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/4, /*ORG*/0, /*POS*/0] },
        {text: "grand", smalltext: "(ornate, awesome, powerful)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/2, /*ORG*/0, /*POS*/0, /*WAVE*/0, /*ZIGS*/0, /*DOTS*/0, /*SQUARES*/0, /*DIAMONDS*/1, /*CHEVRONS*/0, /*STRIPES*/0] }, 
		{text: "old", smalltext: "(ancient, classic, aged)", values: [/*SIZE*/0, /*AGE*/2, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/-1, /*ORG*/0, /*POS*/0] }, 
        {text: "modern", smalltext: "(geometric, simple, sleek)", values: [/*SIZE*/0, /*AGE*/-2, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/-1, /*SAT*/0, /*ORG*/-4, /*POS*/0] },
        {text: "organic", smalltext: "(natural, flowing, alive)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/4, /*POS*/0] }, 
	]
});

questions.push({
	id: "q3e",
	card: "card3",
	question: 'public or<br>private?',
	type: questiontype.RADIO,
	answers: [
		{text: "very public", smalltext: "", values: [/*SIZE*/2, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "restricted public", smalltext: "", values: [/*SIZE*/1, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "semi-private", smalltext: "", values: [/*SIZE*/-1, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "strictly private", smalltext: "", values: [/*SIZE*/-2, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
	]
});

questions.push({
	id: "q4b",
	card: "card4",
	question: 'how often do you visit?',
	type: questiontype.RADIO,
	answers: [
		{text: "all the time", smalltext: "(every single day)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "frequently", smalltext: "(a few times a week)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "sometimes", smalltext: "(a few times a month)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
		{text: "sporadically", smalltext: "(maybe a few times a year)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
        {text: "barely ever", smalltext: "(only been a handful of times)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
		{text: "never been but want to", smalltext: "(maybe someday)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] }, 
        {text: "never have, never will", smalltext: "(can't and/or won't)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
	]
});

questions.push({
	id: "q4c",
	card: "card4",
	question: 'do you like this place?',
	type: questiontype.RADIO,
	answers: [
		{text: "love it", smalltext: "(one of your favorite places of all time)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/3] }, 
		{text: "enjoy it", smalltext: "(definitely somewhere you look forward to visiting)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/2] }, 
		{text: "kinda", smalltext: "(not passionate but still positive)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/1] },
		{text: "ambivalent", smalltext: "(no strong opinions at all)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/0] },
        {text: "not a fan", smalltext: "(never really feel the urge to visit)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/-1] }, 
		{text: "really dislike", smalltext: "(avoid if possible)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/-2] }, 
        {text: "viscerally loathe", smalltext: "(would rather be anywhere else)", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/-3] },
	]
});

questions.push({
	id: "q4d",
	card: "card4",
	question: 'positive memories?',
	type: questiontype.RADIO,
	answers: [
		{text: "yes!", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/3] }, 
		{text: "nope", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/-1] }, 
	]
});

questions.push({
	id: "q4e",
	card: "card4",
	question: 'negative memories?',
	type: questiontype.RADIO,
	answers: [
		{text: "yup", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/-2] }, 
		{text: "no!", smalltext: "", values: [/*SIZE*/0, /*AGE*/0, /*FUNCT*/0, /*LIGHT*/0, /*TEMP*/0, /*SAT*/0, /*ORG*/0, /*POS*/2] }, 
	]
});

window.onload = function() {
	
	console.log("start");

	for (var i = 0; i < questions.length; i++) {
		var curr_question = questions[i];

        var $question = $("<span>", {class: "question"});

		$question.html(curr_question.question);
		$('#' + curr_question.id).append($question);
		$('#' + curr_question.id).append('</br>');

		var curr_answers = curr_question.answers;
		for (var j = 0; j < curr_answers.length; j++) {
			var curr_answer = curr_answers[j];

			var $answer = $("<span>", {id: curr_question.id + "A" + j.toString(), class: "answer_unclicked"});

			var $input;
			if (curr_question.type == questiontype.RADIO) {
				$input = $("<input>", {type: "radio", class: "regular-radio " + curr_question.card});
			} else {
				$input = $("<input>", {type: "checkbox", class: "regular-checkbox " + curr_question.card});
			}

			var $smalltext = $("<span>", {class: "smalltext"});
	
			$smalltext.append(' ' + curr_answer.smalltext);
	
			$answer.append($input);
			$answer.append(' ' + curr_answer.text);
			$answer.append($smalltext);
			$answer.append('</br>');

			$answer.click(function() {
				answerClick(this, false);
			});

			$('#' + curr_question.id).append($answer);
		}
	}	
	console.log("done!");
}

function answerClick(answer, unclick) {

	var id = $(answer).attr('id');

	var q_id = id.split(/[A]/)[0];
	var a_num = parseInt(id.split(/[A]/)[1]);

	var curr_question= undefined;

	for (var i = 0; i < questions.length; i++) {
		if (questions[i].id == q_id) {
			curr_question = questions[i];
		}
	}

	if (!curr_question) {
		return;
	}

	var input_type = curr_question.type;

	if (input_type == questiontype.RADIO) {
		if (!unclick) {
			$('#' + curr_question.id + ' span').each(function() {
				if ($(this).attr('class') == "answer_clicked") {
					answerClick(this, true);
				}	
			});
		}

		var curr_values = curr_question.answers[a_num].values;

		for (var i = 0; i < curr_values.length; i++) {
			if (!unclick) {
				values[i] += curr_values[i];
			}
			else {
				values[i] -= curr_values[i];
			}
		}

		if (!unclick) {
			console.log(values);
		}

		if (!unclick) {
			$(answer).addClass("answer_clicked");
			$(answer).removeClass("answer_unclicked");
			$(answer).find('input').prop('checked', true);
		}
		else {
			$(answer).addClass("answer_unclicked");
			$(answer).removeClass("answer_clicked");
			$(answer).find('input').prop('checked', false);
		}
	}

	if (input_type == questiontype.CHECKBOX) {
		var toggle = false;
		if (!unclick) {
			if ($(answer).attr('class') == "answer_clicked") {
				answerClick(answer, true);
				toggle = true;
			}	
		}

		var curr_values = curr_question.answers[a_num].values;

		for (var i = 0; i < curr_values.length; i++) {
			if (!unclick) {
				if (!toggle) {
					values[i] += curr_values[i];
				}
			}
			else {
				values[i] -= curr_values[i];
			}
		}

		if (!unclick) {
			console.log(values);
		}

		if (!unclick && !toggle) {
			$(answer).addClass("answer_clicked");
			$(answer).removeClass("answer_unclicked");
			$(answer).find('input').prop('checked', true);
		}
		else {
			$(answer).addClass("answer_unclicked");
			$(answer).removeClass("answer_clicked");
			$(answer).find('input').prop('checked', false);
		}
	}
	$('#backvalues').html(values);
}


function generate() {
    
    var layer1;
    var layer2;
    var layer3;
    var layer4;
    var layer5;
    var layer6;
    
    /*var light = 50;
    var sat = 50;
    var hue1 = 0;
    var hue2 = 20;
    var hue3 = 40;
    var hue4 = 80;*/
    
    //layer = 'l1_4').children('rect').eq(0).attr('fill', 'hsl(' + hue + ', ' + sat + '%, ' + light + '%)');
    
	$('#values').html(values);
    
    //LAYER 1 & 2
    //LAYER 1 & 2
    var rando1 = Math.floor(Math.random() * 2);
    console.log(rando1);
    
    //ONE STRIPE
    if (values[0]<=-2) {
        layer1 = 'l1_1';
    }
    
    //TWO STRIPE HORIZONTAL
    if (values[0]>-2 && values[0]<=3 && values[6]<3 && rando1==0) {
        layer1 = 'l1_2';
    }
    
    //THREE STRIPE HORIZONTAL
    if (values[0]>3 && values[0]<6 && values[6]<3 && rando1==0) {
        layer1 = 'l1_3';
    }
    
    //TWO STRIPE VERTICAL
    if (values[0]>-2 && values[0]<=3 && values[6]<3 && rando1==1) {
        //layer = 'l1_4';
        //setColor('l1_4', 0, 8, 25, 75);
        layer1 = 'l1_4';
    }
    
    //THREE STRIPE VERTICAL
    if (values[0]>3 && values[0]<6 && values[6]<3 && rando1==1) {
        layer1 = 'l1_5';
    }
    
    //FOUR BOX
    if (values[0]>=6 && values[0]<8 && values[6]<3) {
        layer1 = 'l1_6';
        //DIVIDERS
        /*if (values[6]<=-2) {
            layer2 = 'l2_1';
        }*/
    }
    
    //TWO TRIANGLE NW SE
    if (values[0]>-2 && values[0]<=3 && values[6]>=3 && values[6]<6 && rando1==0) {
        layer1 = 'l1_7';
    }
    
    //TWO TRIANGLE SW NE
    if (values[0]>-2 && values[0]<=3 && values[6]>=3 && values[6]<6 && rando1==1) {
        layer1 = 'l1_8';
    }
    
    //FOUR TRIANGLE
    if (values[0]>=6 && values[0]<8 && values[6]>=3) {
        layer1 = 'l1_9';
        //DIVIDERS
        /*if (values[6]>=3 && values[6]<4) {
            layer2 = 'l2_2';
        }*/
    }
    
    //TWO STRIPES UNEVEN 1
    if (values[0]>3 && values[0]<6 && values[6]>=3 && values[6]<6 && rando1==0) {
        layer1 = 'l1_10';
    }
    
    //TWO STRIPES UNEVEN 2
    if (values[0]>3 && values[0]<6 && values[6]>=3 && values[6]<6 && rando1==1) {
        layer1 = 'l1_11';
    }
    
    //FIVE SECTION DIAMOND
    if (values[0]>=8 && values[6]<=4) {
        layer1 = 'l1_12';
    }
    
    //CIRCLE
    if (values[0]>3 && values[0]<6 && values[6]>=6) {
        layer1 = 'l1_13';
    }
    
    //CURVE CONCAVE
    if (values[0]>-2 && values[0]<=3 && values[6]>=6 && rando1==0) {
        layer1 = 'l1_14';
    }
    
    //CURVE CONVEX
    if (values[0]>-2 && values[0]<=3 && values[6]>=6 && rando1==1) {
        layer1 = 'l1_15';
    }
    
    //FIVE SECTION STAR
    if (values[0]>=8 && values[6]>4) {
        layer1 = 'l1_16';
    }
    
   
    //LAYER 3 & 5
    //LAYER 3 & 5
   
    //QUARTER RECTANGLE TOP LEFT 
    if (values[0]<=3) {
        var rando = Math.floor(Math.random() * 4);
        console.log(rando);
        if (rando == 0) {
            layer3 = 'l3_1';
            //SINGLE DIAMOND
            if(values[0]<=1 && values[7]<=3){
                layer5 = 'l5_1'; 
            }
            //SINGLE CIRCLE
            if(values[0]<=1 && values[7]>3){
                layer5 = 'l5_5';
            }
            //SINGLE HEXAGON
            if(values[0]<=1 && values[7]<=3 && values[6]<=-2){
                layer5 = 'l5_9';
            }
            //TRIPLE CIRCLES
            if(values[0]>1 && values[7]>=0){
                layer5 = 'l5_13';
            }
            //TRIPLE TRIANGLES
            if(values[0]>1 && values[7]<0){
                layer5 = 'l5_17';
            }
            corner1 = 1;
        }
    
        //QUARTER RECTANGLE BOTTOM LEFT 
        if (rando == 1) {
            layer3 = 'l3_2';
            //SINGLE DIAMOND
            if(values[0]<=1 && values[7]<=3){
                layer5 = 'l5_2'; 
            }
            //SINGLE CIRCLE
            if(values[0]<=1 && values[7]>3){
                layer5 = 'l5_6';
            }
            //SINGLE HEXAGON
            if(values[0]<=1 && values[7]<=3 && values[6]<=-2){
                layer5 = 'l5_10';
            }
            //TRIPLE CIRCLES
            if(values[0]>1 && values[7]>=0){
                layer5 = 'l5_14';
            }
            //TRIPLE TRIANGLES
            if(values[0]>1 && values[7]<0){
                layer5 = 'l5_18';
            }
            corner2 = 1;
        }
    
        //QUARTER RECTANGLE BOTTOM RIGHT 
        if (rando == 2) {
            layer3 = 'l3_3';
            //SINGLE DIAMOND
            if(values[0]<=1 && values[7]<=3){
                layer5 = 'l5_3'; 
            }
            //SINGLE CIRCLE
            if(values[0]<=1 && values[7]>3){
                layer5 = 'l5_7';
            }
            //SINGLE HEXAGON
            if(values[0]<=1 && values[7]<=3 && values[6]<=-2){
                layer5 = 'l5_11';
            }
            //TRIPLE CIRCLES
            if(values[0]>1 && values[7]>=0){
                layer5 = 'l5_15';
            }
            //TRIPLE TRIANGLES
            if(values[0]>1 && values[7]<0){
                layer5 = 'l5_19';
            }
            corner3 = 1;
        }
    
        //QUARTER RECTANGLE TOP RIGHT 
        if (rando == 3) {
            layer3 = 'l3_4';
            //SINGLE DIAMOND
            if(values[0]<=1 && values[7]<=3){
                layer5 = 'l5_4'; 
            }
            //SINGLE CIRCLE
            if(values[0]<=1 && values[7]>3){
                layer5 = 'l5_8';
            }
            //SINGLE HEXAGON
            if(values[0]<=1 && values[7]<=3 && values[6]<=-2){
                layer5 = 'l5_12';
            }
            //TRIPLE CIRCLES
            if(values[0]>1 && values[7]>=0){
                layer5 = 'l5_16';
            }
            //TRIPLE TRIANGLES
            if(values[0]>1 && values[7]<0){
                layer5 = 'l5_20';
            }
            corner4 = 1;
        }
    }
    
    //MIDDLE BIG DIAMOND HORIZONTAL
    if (values[0]>9) {
        layer3 = 'l3_5';
    }
    
    //MIDDLE BIG CIRCLE
    if (values[0]<=9 && values[0]>5 && values[6]>1 && values[7]>=4) {
        layer3 = 'l3_6';
    }
    
    //MIDDLE BIG HEXAGON
    if (values[0]<=9 && values[0]>5 && values[6]<=1) {
        layer3 = 'l3_7';
    }
    
    //MIDDLE BIG DIAMOND SQUARE
    if (values[0]<=9 && values[0]>5 && values[6]>1 && values[7]<4 && values[7]>=1) {
        layer3 = 'l3_8';
    }
    
    //MIDDLE BIG TRIANGLE UP
    if (values[0]<=9 && values[0]>5 && values[6]>1 && values[7]<1) {
        layer3 = 'l3_9';
    }
    
    //MIDDLE BIG TRIANGLE DOWN
    if (values[0]<=9 && values[0]>5 && values[6]>1 && values[7]<1) {
        layer3 = 'l3_10';
    }
    
    var sidetri = 0;
    
    //SIDE BIG TRIANGLE LEFT
    if (values[0]>3 && values[0]<=5 && rando1==0) {
        layer3 = 'l3_11';
        sidetri = 1;
    }
    
    //SIDE BIG TRIANGLE RIGHT
    if (values[0]>3 && values[0]<=5 && rando1==1) {
        layer3 = 'l3_12';
        sidetri = 2;
    }
    
    //LAYER 4
    //LAYER 4
    
    if (sidetri == 0){
        //MIDDLE SMALL CIRCLE
        if (values[1]>=3) {
            layer4 = 'l4_1';
        }

        //MIDDLE SMALL SQUARE
        if (values[1]>=-3 && values[1]<=-1) {
            layer4 = 'l4_2';
        }

        //MIDDLE SMALL HEXAGON
        if (values[1]<=-3) {
            layer4 = 'l4_3';
        }

        //MIDDLE SMALL DIAMOND SQUARE
        if (values[1]>1 && values[1]<3) {
            layer4 = 'l4_4';
        }

        //MIDDLE SMALL DIAMOND VERTICAL
        if (values[1]>1 && values[1]<3) {
            layer4 = 'l4_5';
        }

        //MIDDLE SMALL TRIANGLE UP
        if (values[1]>=0 && values[1]<=1 && rando1==0) {
            layer4 = 'l4_6';
        }

        //MIDDLE SMALL TRIANGLE DOWN
        if (values[1]>=0 && values[1]<=1 && rando1==1) {
            layer4 = 'l4_7';
        }

        //MIDDLE SMALL DIAMOND HORIZONTAL
        if (values[1]>1 && values[1]<3) {
            layer4 = 'l4_8';
        }
    }
    
    //LEFT TRIANGLE DETAIL
    else if (sidetri == 1){
        if (values[1]>=3) {
            layer5 = 'l5_21';
        }
        
        else if (values[1]<3 && values[1]>=-2){
            layer5 = 'l5_27';
        }
        
        else if (values[1]<-2){
            layer5 = 'l5_23';
        }
        corner1 = 1;
        corner2 = 1;
    }
    
    //RIGHT TRIANGLE DETAIL
    else if (sidetri == 2){
        if (values[1]>=3) {
            layer5 = 'l5_22';
        }
        
        else if (values[1]<3 && values[1]>=-2){
            layer5 = 'l5_28';
        }
        
        else if (values[1]<-2){
            layer5 = 'l5_24';
        }
        corner3 = 1;
        corner4 = 1;  
    }
    //LAYER 6
    //LAYER 6
    
    //WAVES 1
    if (values[8]>=1 && corner1==0) {
        $('#l6_1').css('display', 'block');
        if (values[8]>=3 && corner4==0) {
            $('#l6_4').css('display', 'block');
            corner4 = 1;
        }
        else if (values[8]>=3 && corner2==0) {
            $('#l6_2').css('display', 'block');
            corner2 = 1;
        }
        else if (values[8]>=3 && corner3==0) {
            $('#l6_3').css('display', 'block');
            corner3 = 1;
        }
        corner1 = 1;
    }
    
    //WAVES 2
    else if (values[8]>=1 && corner2==0) {
        $('#l6_2').css('display', 'block');
        if (values[8]>=3 && corner3==0) {
            $('#l6_3').css('display', 'block');
            corner3 = 1;
        }
        else if (values[8]>=3 && corner4==0) {
            $('#l6_4').css('display', 'block');
            corner4 = 1;
        }
        else if (values[8]>=3 && corner1==0) {
            $('#l6_1').css('display', 'block');
            corner1 = 1;
        }
        corner2 = 1;
    }
    
    //WAVES 3
    else if (values[8]>=1 && corner3==0) {
        $('#l6_3').css('display', 'block');
        if (values[8]>=3 && corner2==0) {
            $('#l6_2').css('display', 'block');
            corner2 = 1;
        }
        else if (values[8]>=3 && corner4==0) {
            $('#l6_4').css('display', 'block');
            corner4 = 1;
        }
        else if (values[8]>=3 && corner1==0) {
            $('#l6_1').css('display', 'block');
            corner1 = 1;
        }
        corner3 = 1;
    }
    
    //WAVES 4
    else if (values[8]>=1 && corner4==0) {
        $('#l6_4').css('display', 'block');
        if (values[8]>=3 && corner1==0) {
            $('#l6_1').css('display', 'block');
            corner1 = 1;
        }
        else if (values[8]>=3 && corner3==0) {
            $('#l6_3').css('display', 'block');
            corner3 = 1;
        }
        else if (values[8]>=3 && corner2==0) {
            $('#l6_2').css('display', 'block');
            corner2 = 1;
        }
        corner4 = 1;
    }
    
    //ZIGS 1
    if (values[9]>=1 && corner1==0) {
        $('#l6_5').css('display', 'block');
        if (values[9]>=3 && corner4==0) {
            $('#l6_8').css('display', 'block');
            corner4 = 1;
        }
        else if (values[9]>=3 && corner2==0) {
            $('#l6_6').css('display', 'block');
            corner2 = 1;
        }
        else if (values[9]>=3 && corner3==0) {
            $('#l6_7').css('display', 'block');
            corner3 = 1;
        }
        corner1 = 1;
    }
    
    //ZIGS 2
    else if (values[9]>=1 && corner2==0) {
        $('#l6_6').css('display', 'block');
        if (values[9]>=3 && corner3==0) {
            $('#l6_7').css('display', 'block');
            corner3 = 1;
        }
        else if (values[9]>=3 && corner4==0) {
            $('#l6_8').css('display', 'block');
            corner4 = 1;
        }
        else if (values[9]>=3 && corner1==0) {
            $('#l6_5').css('display', 'block');
            corner1 = 1;
        }
        corner2 = 1;
    }
    
    //ZIGS 3
    else if (values[9]>=1 && corner3==0) {
        $('#l6_7').css('display', 'block');
        if (values[9]>=3 && corner2==0) {
            $('#l6_6').css('display', 'block');
            corner2 = 1;
        }
        else if (values[9]>=3 && corner4==0) {
            $('#l6_8').css('display', 'block');
            corner4 = 1;
        }
        else if (values[9]>=3 && corner1==0) {
            $('#l6_5').css('display', 'block');
            corner1 = 1;
        }
        corner3 = 1;
    }
    
    //ZIGS 4
    else if (values[9]>=1 && corner4==0) {
        $('#l6_8').css('display', 'block');
        if (values[9]>=3 && corner1==0) {
            $('#l6_5').css('display', 'block');
            corner1 = 1;
        }
        else if (values[9]>=3 && corner3==0) {
            $('#l6_7').css('display', 'block');
            corner3 = 1;
        }
        else if (values[9]>=3 && corner2==0) {
            $('#l6_6').css('display', 'block');
            corner2 = 1;
        }
        corner4 = 1;
    }
    
    //DOTS 1
    if (values[10]>=1 && corner1==0) {
        $('#l6_9').css('display', 'block');
        if (values[10]>=3 && corner4==0) {
            $('#l6_12').css('display', 'block');
            corner4 = 1;
        }
        else if (values[10]>=3 && corner2==0) {
            $('#l6_10').css('display', 'block');
            corner2 = 1;
        }
        else if (values[10]>=3 && corner3==0) {
            $('#l6_11').css('display', 'block');
            corner3 = 1;
        }
        corner1 = 1;
    }
    
    //DOTS 2
    else if (values[10]>=1 && corner2==0) {
        $('#l6_10').css('display', 'block');
        if (values[10]>=3 && corner3==0) {
            $('#l6_11').css('display', 'block');
            corner3 = 1;
        }
        else if (values[10]>=3 && corner4==0) {
            $('#l6_12').css('display', 'block');
            corner4 = 1;
        }
        else if (values[10]>=3 && corner1==0) {
            $('#l6_9').css('display', 'block');
            corner1 = 1;
        }
        corner2 = 1;
    }
    
    //DOTS 3
    else if (values[10]>=1 && corner3==0) {
        $('#l6_11').css('display', 'block');
        if (values[10]>=3 && corner2==0) {
            $('#l6_10').css('display', 'block');
            corner2 = 1;
        }
        else if (values[10]>=3 && corner4==0) {
            $('#l6_12').css('display', 'block');
            corner4 = 1;
        }
        else if (values[10]>=3 && corner1==0) {
            $('#l6_9').css('display', 'block');
            corner1 = 1;
        }
        corner3 = 1;
    }
    
    //DOTS 4
    else if (values[10]>=1 && corner4==0) {
        $('#l6_12').css('display', 'block');
        if (values[10]>=3 && corner1==0) {
            $('#l6_9').css('display', 'block');
            corner1 = 1;
        }
        else if (values[10]>=3 && corner3==0) {
            $('#l6_11').css('display', 'block');
            corner3 = 1;
        }
        else if (values[10]>=3 && corner2==0) {
            $('#l6_10').css('display', 'block');
            corner2 = 1;
        }
        corner4 = 1;
    }
    
    //SQUARES 1
    if (values[11]>=1 && corner1==0) {
        $('#l6_13').css('display', 'block');
        if (values[11]>=3 && corner4==0) {
            $('#l6_16').css('display', 'block');
            corner4 = 1;
        }
        else if (values[11]>=3 && corner2==0) {
            $('#l6_14').css('display', 'block');
            corner2 = 1;
        }
        else if (values[11]>=3 && corner3==0) {
            $('#l6_15').css('display', 'block');
            corner3 = 1;
        }
        corner1 = 1;
    }
    
    //SQUARES 2
    else if (values[11]>=1 && corner2==0) {
        $('#l6_14').css('display', 'block');
        if (values[11]>=3 && corner3==0) {
            $('#l6_15').css('display', 'block');
            corner3 = 1;
        }
        else if (values[11]>=3 && corner4==0) {
            $('#l6_16').css('display', 'block');
            corner4 = 1;
        }
        else if (values[11]>=3 && corner1==0) {
            $('#l6_13').css('display', 'block');
            corner1 = 1;
        }
        corner2 = 1;
    }
    
    //SQUARES 3
    else if (values[11]>=1 && corner3==0) {
        $('#l6_15').css('display', 'block');
        if (values[11]>=3 && corner2==0) {
            $('#l6_14').css('display', 'block');
            corner2 = 1;
        }
        else if (values[11]>=3 && corner4==0) {
            $('#l6_16').css('display', 'block');
            corner4 = 1;
        }
        else if (values[11]>=3 && corner1==0) {
            $('#l6_13').css('display', 'block');
            corner1 = 1;
        }
        corner3 = 1;
    }
    
    //SQUARES 4
    else if (values[11]>=1 && corner4==0) {
        $('#l6_16').css('display', 'block');
        if (values[11]>=3 && corner1==0) {
            $('#l6_13').css('display', 'block');
            corner1 = 1;
        }
        else if (values[11]>=3 && corner3==0) {
            $('#l6_15').css('display', 'block');
            corner3 = 1;
        }
        else if (values[11]>=3 && corner2==0) {
            $('#l6_14').css('display', 'block');
            corner2 = 1;
        }
        corner4 = 1;
    }
    
    //DIAMONDS 1
    if (values[12]>=1 && corner1==0) {
        $('#l6_17').css('display', 'block');
        if (values[12]>=3 && corner4==0) {
            $('#l6_20').css('display', 'block');
            corner4 = 1;
        }
        else if (values[12]>=3 && corner2==0) {
            $('#l6_18').css('display', 'block');
            corner2 = 1;
        }
        else if (values[12]>=3 && corner3==0) {
            $('#l6_19').css('display', 'block');
            corner3 = 1;
        }
        corner1 = 1;
    }
    
    //DIAMONDS 2
    else if (values[12]>=1 && corner2==0) {
        $('#l6_18').css('display', 'block');
        if (values[12]>=3 && corner3==0) {
            $('#l6_19').css('display', 'block');
            corner3 = 1;
        }
        else if (values[12]>=3 && corner4==0) {
            $('#l6_20').css('display', 'block');
            corner4 = 1;
        }
        else if (values[12]>=3 && corner1==0) {
            $('#l6_17').css('display', 'block');
            corner1 = 1;
        }
        corner2 = 1;
    }
    
    //DIAMONDS 3
    else if (values[12]>=1 && corner3==0) {
        $('#l6_19').css('display', 'block');
        if (values[12]>=3 && corner2==0) {
            $('#l6_18').css('display', 'block');
            corner2 = 1;
        }
        else if (values[12]>=3 && corner4==0) {
            $('#l6_20').css('display', 'block');
            corner4 = 1;
        }
        else if (values[12]>=3 && corner1==0) {
            $('#l6_17').css('display', 'block');
            corner1 = 1;
        }
        corner3 = 1;
    }
    
    //DIAMONDS 4
    else if (values[12]>=1 && corner4==0) {
        $('#l6_20').css('display', 'block');
        if (values[12]>=3 && corner1==0) {
            $('#l6_17').css('display', 'block');
            corner1 = 1;
        }
        else if (values[12]>=3 && corner3==0) {
            $('#l6_19').css('display', 'block');
            corner3 = 1;
        }
        else if (values[12]>=3 && corner2==0) {
            $('#l6_18').css('display', 'block');
            corner2 = 1;
        }
        corner4 = 1;
    }
    
    //CHEVRONS 1
    if (values[13]>=1 && corner1==0) {
        $('#l6_21').css('display', 'block');
        if (values[13]>=3 && corner4==0) {
            $('#l6_24').css('display', 'block');
            corner4 = 1;
        }
        else if (values[13]>=3 && corner2==0) {
            $('#l6_22').css('display', 'block');
            corner2 = 1;
        }
        else if (values[13]>=3 && corner3==0) {
            $('#l6_23').css('display', 'block');
            corner3 = 1;
        }
        corner1 = 1;
    }
    
    //CHEVRONS 2
    else if (values[13]>=1 && corner2==0) {
        $('#l6_22').css('display', 'block');
        if (values[13]>=3 && corner3==0) {
            $('#l6_23').css('display', 'block');
            corner3 = 1;
        }
        else if (values[13]>=3 && corner4==0) {
            $('#l6_24').css('display', 'block');
            corner4 = 1;
        }
        else if (values[13]>=3 && corner1==0) {
            $('#l6_21').css('display', 'block');
            corner1 = 1;
        }
        corner2 = 1;
    }
    
    //CHEVRONS 3
    else if (values[13]>=1 && corner3==0) {
        $('#l6_23').css('display', 'block');
        if (values[13]>=3 && corner2==0) {
            $('#l6_22').css('display', 'block');
            corner2 = 1;
        }
        else if (values[13]>=3 && corner4==0) {
            $('#l6_24').css('display', 'block');
            corner4 = 1;
        }
        else if (values[13]>=3 && corner1==0) {
            $('#l6_21').css('display', 'block');
            corner1 = 1;
        }
        corner3 = 1;
    }
    
    //CHEVRONS 4
    else if (values[13]>=1 && corner4==0) {
        $('#l6_24').css('display', 'block');
        if (values[13]>=3 && corner1==0) {
            $('#l6_21').css('display', 'block');
            corner1 = 1;
        }
        else if (values[13]>=3 && corner3==0) {
            $('#l6_23').css('display', 'block');
            corner3 = 1;
        }
        else if (values[13]>=3 && corner2==0) {
            $('#l6_22').css('display', 'block');
            corner2 = 1;
        }
        corner4 = 1;
    }
    
    //STRIPES 1
    if (values[14]>=1 && corner1==0) {
        $('#l6_25').css('display', 'block');
        if (values[14]>=3 && corner4==0) {
            $('#l6_28').css('display', 'block');
            corner4 = 1;
        }
        else if (values[14]>=3 && corner2==0) {
            $('#l6_26').css('display', 'block');
            corner2 = 1;
        }
        else if (values[14]>=3 && corner3==0) {
            $('#l6_27').css('display', 'block');
            corner3 = 1;
        }
        corner1 = 1;
    }
    
    //STRIPES 2
    else if (values[14]>=1 && corner2==0) {
        $('#l6_26').css('display', 'block');
        if (values[14]>=3 && corner3==0) {
            $('#l6_27').css('display', 'block');
            corner3 = 1;
        }
        else if (values[14]>=3 && corner4==0) {
            $('#l6_28').css('display', 'block');
            corner4 = 1;
        }
        else if (values[14]>=3 && corner1==0) {
            $('#l6_25').css('display', 'block');
            corner1 = 1;
        }
        corner2 = 1;
    }
    
    //STRIPES 3
    else if (values[14]>=1 && corner3==0) {
        $('#l6_27').css('display', 'block');
        if (values[14]>=3 && corner2==0) {
            $('#l6_26').css('display', 'block');
            corner2 = 1;
        }
        else if (values[14]>=3 && corner4==0) {
            $('#l6_28').css('display', 'block');
            corner4 = 1;
        }
        else if (values[14]>=3 && corner1==0) {
            $('#l6_25').css('display', 'block');
            corner1 = 1;
        }
        corner3 = 1;
    }
    
    //STRIPES 4
    else if (values[14]>=1 && corner4==0) {
        $('#l6_28').css('display', 'block');
        if (values[14]>=3 && corner1==0) {
            $('#l6_25').css('display', 'block');
            corner1 = 1;
        }
        else if (values[14]>=3 && corner3==0) {
            $('#l6_27').css('display', 'block');
            corner3 = 1;
        }
        else if (values[14]>=3 && corner2==0) {
            $('#l6_26').css('display', 'block');
            corner2 = 1;
        }
        corner4 = 1;
    }
    
    //COLOR
    //COLOR
    
    //LIGHT & SATURATION
    //LIGHT & SATURATION
    
    
    //COLD
    if (values[4]<-4){
        //RESIDENTIAL COLD
        if (values[2]==1){
            hue1 = 37; sat1 = 23; light1 = 65;
            hue2 = 268; sat2 = 47; light2 = 67;
            hue3 = 34; sat3 = 59; light3 = 98;
            hue4 = 179; sat4 = 44; light4 = 81;
        }

        //EDUCATIONAL COLD
        else if (values[2]==2){
            hue1 = 37; sat1 = 49; light1 = 65;
            hue2 = 233; sat2 = 44; light2 = 81;
            hue3 = 34; sat3 = 20; light3 = 98;
            hue4 = 326; sat4 = 56; light4 = 67;
        }

        //WORK COLD
        else if (values[2]==3){
            hue1 = 193; sat1 = 44; light1 = 81;
            hue2 = 37; sat2 = 13; light2 = 65;
            hue3 = 121; sat3 = 20; light3 = 98;
            hue4 = 49; sat4 = 7; light4 = 95;
        }

        //ENTERTAINMENT COLD
        else if (values[2]==4){
            hue1 = 312; sat1 = 52; light1 = 61;
            hue2 = 49; sat2 = 81; light2 = 97;
            hue3 = 235; sat3 = 44; light3 = 81;
            hue4 = 16; sat4 = 27; light4 = 65;
        }

        //CULTURAL COLD
        else if (values[2]==5){
            hue1 = 360; sat1 = 60; light1 = 61;
            hue2 = 40; sat2 = 50; light2 = 81;
            hue3 = 189; sat3 = 44; light3 = 81;
            hue4 = 44; sat4 = 9; light4 = 65;
        }

        //RECREATIONAL COLD
        else if (values[2]==6){
            hue1 = 144; sat1 = 60; light1 = 61;
            hue2 = 42; sat2 = 10; light2 = 90;
            hue3 = 184; sat3 = 63; light3 = 81;
            hue4 = 67; sat4 = 39; light4 = 90;
        }

        //RETAIL COLD
        else if (values[2]==7){
            hue1 = 209; sat1 = 63; light1 = 81;
            hue2 = 42; sat2 = 13; light2 = 90;
            hue3 = 34; sat3 = 60; light3 = 52;
            hue4 = 67; sat4 = 7; light4 = 32;
        }

        //FOOD COLD
        else if (values[2]==8){
            hue1 = 34; sat1 = 60; light1 = 36;
            hue2 = 0; sat2 = 63; light2 = 66;
            hue3 = 42; sat3 = 34; light3 = 90;
            hue4 = 114; sat4 = 49; light4 = 41;
        }

        //NO FUNCTION COLD
        else {
            hue1 = 219; sat1 = 10; light1 = 30;
            hue2 = 219; sat2 = 10; light2 = 66;
            hue3 = 219; sat3 = 10; light3 = 90;
            hue4 = 219; sat4 = 10; light4 = 48;
        }
    }
    
    //NEUTRAL
    if (values[4]>=-4 && values[4]<=4){
        //RESIDENTIAL NEUTRAL
        if (values[2]==1){
            hue1 = 11; sat1 = 87; light1 = 75;
            hue2 = 28; sat2 = 37; light2 = 80;
            hue3 = 44; sat3 = 63; light3 = 90;
            hue4 = 203; sat4 = 95; light4 = 48;
        }

        //EDUCATIONAL NEUTRAL
        else if (values[2]==2){
            hue1 = 186; sat1 = 95; light1 = 48;
            hue2 = 29; sat2 = 40; light2 = 80;
            hue3 = 44; sat3 = 63; light3 = 90;
            hue4 = 0; sat4 = 71; light4 = 75;
        }

        //WORK NEUTRAL
        else if (values[2]==3){
            hue1 = 29; sat1 = 17; light1 = 80;
            hue2 = 54; sat2 = 71; light2 = 75;
            hue3 = 186; sat3 = 46; light3 = 65;
            hue4 = 32; sat4 = 63; light4 = 89;
        }

        //ENTERTAINMENT NEUTRAL
        else if (values[2]==4){
            hue1 = 0; sat1 = 82; light1 = 80;
            hue2 = 42; sat2 = 71; light2 = 90;
            hue3 = 313; sat3 = 63; light3 = 56;
            hue4 = 176; sat4 = 11; light4 = 90;
        }

        //CULTURAL NEUTRAL
        else if (values[2]==5){
            hue1 = 42; sat1 = 71; light1 = 90;
            hue2 = 0; sat2 = 82; light2 = 60;
            hue3 = 27; sat3 = 63; light3 = 56;
            hue4 = 38; sat4 = 11; light4 = 90;
        }

        //RECREATIONAL NEUTRAL
        else if (values[2]==6){
            hue1 = 100; sat1 = 71; light1 = 79;
            hue2 = 202; sat2 = 82; light2 = 82;
            hue3 = 38; sat3 = 43; light3 = 90;
            hue4 = 53; sat4 = 75; light4 = 90;
        }

        //RETAIL NEUTRAL
        else if (values[2]==7){
            hue1 = 182; sat1 = 82; light1 = 82;
            hue2 = 28; sat2 = 75; light2 = 90;
            hue3 = 100; sat3 = 43; light3 = 85;
            hue4 = 38; sat4 = 9; light4 = 90;
        }

        //FOOD NEUTRAL
        else if (values[2]==8){
            hue1 = 350; sat1 = 82; light1 = 82;
            hue2 = 100; sat2 = 53; light2 = 72;
            hue3 = 47; sat3 = 75; light3 = 90;
            hue4 = 38; sat4 = 38; light4 = 90;
        }

        //NO FUNCTION NEUTRAL
        else {
            hue1 = 0; sat1 = 0; light1 = 30;
            hue2 = 0; sat2 = 0; light2 = 66;
            hue3 = 0; sat3 = 0; light3 = 90;
            hue4 = 0; sat4 = 0; light4 = 48;
        }
    }
    
    //HOT
    if (values[4]>4){
        //RESIDENTIAL HOT
        if (values[2]==1){
            hue1 = 360; sat1 = 82; light1 = 77;
            hue2 = 36; sat2 = 28; light2 = 72;
            hue3 = 36; sat3 = 71; light3 = 90;
            hue4 = 24; sat4 = 42; light4 = 95;
        }

        //EDUCATIONAL HOT
        else if (values[2]==2){
            hue1 = 193; sat1 = 64; light1 = 77;
            hue2 = 24; sat2 = 42; light2 = 41;
            hue3 = 11; sat3 = 84; light3 = 95;
            hue4 = 36; sat4 = 60; light4 = 85;
        }

        //WORK HOT
        else if (values[2]==3){
            hue1 = 179; sat1 = 64; light1 = 77;
            hue2 = 36; sat2 = 8; light2 = 74;
            hue3 = 36; sat3 = 60; light3 = 85;
            hue4 = 27; sat4 = 29; light4 = 40;
        }

        //ENTERTAINMENT HOT
        else if (values[2]==4){
            hue1 = 0; sat1 = 70; light1 = 88;
            hue2 = 42; sat2 = 93; light2 = 90;
            hue3 = 318; sat3 = 47; light3 = 59;
            hue4 = 4; sat4 = 29; light4 = 88;
        }

        //CULTURAL HOT
        else if (values[2]==5){
            hue1 = 42; sat1 = 100; light1 = 94;
            hue2 = 5; sat2 = 70; light2 = 74;
            hue3 = 28; sat3 = 47; light3 = 65;
            hue4 = 21; sat4 = 73; light4 = 95;
        }

        //RECREATIONAL HOT
        else if (values[2]==6){
            hue1 = 69; sat1 = 100; light1 = 94;
            hue2 = 173; sat2 = 80; light2 = 94;
            hue3 = 15; sat3 = 73; light3 = 95;
            hue4 = 43; sat4 = 79; light4 = 90;
        }

        //RETAIL HOT
        else if (values[2]==7){
            hue1 = 171; sat1 = 80; light1 = 80;
            hue2 = 34; sat2 = 16; light2 = 95;
            hue3 = 67; sat3 = 65; light3 = 87;
            hue4 = 43; sat4 = 90; light4 = 90;
        }

        //FOOD HOT
        else if (values[2]==8){
            hue1 = 15; sat1 = 73; light1 = 95;
            hue2 = 69; sat2 = 100; light2 = 74;
            hue3 = 33; sat3 = 79; light3 = 81;
            hue4 = 171; sat4 = 80; light4 = 80;
        }

        //NO FUNCTION HOT
        else {
            hue1 = 30; sat1 = 10; light1 = 30;
            hue2 = 30; sat2 = 10; light2 = 66;
            hue3 = 30; sat3 = 10; light3 = 90;
            hue4 = 30; sat4 = 10; light4 = 48;
        }
    }
    
    if (values[7]<=-1){
        light1 = light1 + (values[3]*3) + (values[7]*3) - 10;
        console.log(light1);
        sat1 = sat1 + (values[5]*3) + (values[7]*3) + 10;
        console.log(sat1);

        light2 = light2 + (values[3]*3) + (values[7]*3) - 10;
        console.log(light2);
        sat2 = sat2 + (values[5]*3) + (values[7]*3) + 10;
        console.log(sat2);

        light3 = light3 + (values[3]*3) + (values[7]*3) - 10;
        console.log(light3);
        sat3 = sat3 + (values[5]*3) + (values[7]*3) + 10;
        console.log(sat3);

        light4 = light4 + (values[3]*3) + (values[7]*3) - 10;
        console.log(light4);
        sat4 = sat4 + (values[5]*3) + (values[7]*3) + 10;
        console.log(sat4);
    }
    
    if (values[7]>=0){
        sat1 = sat1 + (values[5]*4) + (values[7]*3 + 15);
        console.log(sat1);

        sat2 = sat2 + (values[5]*4) + (values[7]*3) + 15;
        console.log(sat2);

        sat3 = sat3 + (values[5]*4) + (values[7]*3) + 15;
        console.log(sat3);

        sat4 = sat4 + (values[5]*4) + (values[7]*3) + 15;
        console.log(sat4);
    }
    
    $('#' + layer1).css('display', 'block');
    $('#' + layer2).css('display', 'block');
    $('#' + layer3).css('display', 'block');    
    $('#' + layer4).css('display', 'block');
    $('#' + layer5).css('display', 'block');
    
    switch (layer1) {
            case 'l1_1':
            setColor(layer1, 0, hue1/* + (Math.random() - .5) * 50*/, sat1, light1);
            break;
            case 'l1_2':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            break;
            case 'l1_3':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            setColor(layer1, 2, hue1, sat1, light1);
            break;
            case 'l1_4':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            break;
            case 'l1_5':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            setColor(layer1, 2, hue1, sat1, light1);
            break;
            case 'l1_6':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            setColor(layer1, 2, hue2, sat2, light2);
            setColor(layer1, 3, hue1, sat1, light1);
            break;
            case 'l1_7':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            break;
            case 'l1_8':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            break;
            case 'l1_9':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            setColor(layer1, 2, hue1, sat1, light1);
            setColor(layer1, 3, hue2, sat2, light2);
            break;
            case 'l1_10':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            break;
            case 'l1_11':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            break;
            case 'l1_12':
            setColor(layer1, 0, hue3, sat3, light3);
            setColor(layer1, 1, hue1, sat1, light1);
            setColor(layer1, 2, hue2, sat2, light2);
            setColor(layer1, 3, hue1, sat1, light1);
            setColor(layer1, 4, hue2, sat2, light2);
            break;
            case 'l1_13':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue1, sat1, light1);
            setColor(layer1, 2, hue2, sat2, light2);
            break;
            case 'l1_14':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            break;
            case 'l1_15':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            break;
            case 'l1_16':
            setColor(layer1, 0, hue1, sat1, light1);
            setColor(layer1, 1, hue2, sat2, light2);
            setColor(layer1, 2, hue1, sat1, light1);
            setColor(layer1, 3, hue2, sat2, light2);
            setColor(layer1, 4, hue3, sat3, light3);
            break;
    }
    console.log(layer1);
    console.log(layer2);
    console.log(layer3);
    console.log(layer4);
    console.log(layer5);
    //setAllColor(layer2, 0, sat, light);
    setAllColor(layer3, hue4, sat4, light4);
    setAllColor(layer4, hue3, sat3, light3);
    if (sidetri > 0){
        setAllColor(layer5, hue3, sat3, light3);
    }
    else{
        setAllColor(layer5, hue1, sat1, light1);
    }
    console.log(hue4);
    console.log(sat4);
    console.log(light4);
}

function setColor(id, child, hue, sat, light) {
    $('#' + id).children().eq(child).attr('fill', 'hsl(' + hue + ', ' + sat + '%, ' + light + '%)');
}

function setAllColor(id, hue, sat, light) {
    $('#' + id).children().each(function() {
        $(this).attr('fill', 'hsl(' + hue + ', ' + sat + '%, ' + light + '%)');
    });
}


