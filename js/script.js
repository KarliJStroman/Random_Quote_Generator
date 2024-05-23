const quoteObjArr = [
    {
        quote: "Imagination is more important than knowledge.",
        author: "Albert Einstein"
    },
    {
        quote: "Life will give you whatever experience is most helpful for the evolution of your consciousness.",
        author: "Eckhart Tolle"
    },
    {
        quote: "What a long, strange trip it's been.",
        author: "Grateful Dead"
    },
    {
        quote: "Live long and prosper.",
        author: "Spock"
    },
    {
        quote: "Make love, not war.",
        author: "Anonymous Hippie"
    }, 
    {
        quote: "We're all mad here.",
        author: "Lewis Carroll"
    },
    {
        quote: "We're all just stories in the end, so let's make it a good one.",
        author: "Dr. Who"
    },
    {
        quote: "Mother, should I trust the government?",
        author: "Pink Floyd"
    },
    {
        quote: "If you don't know where you're going any path will do.",
        author: "Lewis Carroll"
    },
    {
        quote: "Oh, the places you'll go...",
        author: "Dr. Seuss"
    },
    {
        quote: "B = f(P x Sf) -- Behavior is a function of personality and surrounding factors.",
        author: "Thomas Erikson"
    },
    {
        quote: "There is nothing either good or bad, but thinking makes it so.",
        author: "William Shakespeare"
    },
    {
        quote: "Understanding is the elixir of life.",
        author: "The Universe"
    },
    {
        quote: "If they're in your life, love them.",
        author: "The Universe"
    },
    {
        quote: "The best way to deal with other people is to just let them be other people.",
        author: "Mike Dooley"
    },
    {
        quote: "Can death be sleep, when life is but a dream, And scenes of bliss pass as a phantom by? The transient pleasures as a vision seem, And yet we think the greatest pain's to die.",
        author: "John Keats"
    },
    {
        quote: "Singing is sweet; but be sure of this, Lips only sing when they cannot kiss.",
        author: "James Thomson"
    },
    {
        quote: "Strange how such innocence gets its own way.",
        author: "Robert Frost"
    },
    {
        quote: "A violet by a mossy stone, Half hidden from the eye! Fair as a star, when only one, Is shining in the sky.",
        author: "William Wordsworth"
    },
    {
        quote: "The moving finger writes; and, having writ, Moves on",
        author: "Omar Khayyam - translated by Edward Fitzgerald"
    },
    {
        quote: "Heav'n but the vision of fulfilled desire, And Hell the shadow from a Soul on fire",
        author: "Edward Fitzgerald - originated in part by Omar Khayyam"
    },
    {
        quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        author: "Thomas Edison"
    },
    {
        quote: "Ad astra per aspera (to the stars by hard ways)",
        author: "Latin phrase - motto of Kansas"
    },
    {
        quote: "Amor vincit omnia (love conquers all things)",
        author: "Latin phrase"
    },
    {
        quote: "Assalaam alaikum (peace to you)",
        author: "Traditional Muslim greeting"
    },
    {
        quote: "C'est la vie (that's life)",
        author: "French phrase"
    },
    {
        quote: "Che sara, sara (what will be, will be)",
        author: "Italian phrase"
    },
    {
        quote: "Dum spiro, spero (while I breathe, I hope)",
        author: "Latin - motto of South Carolina"
    },
    {
        quote: "Eureka! (I have found it)",
        author: "Greek - motto of California"
    },
    {
        quote: "Excelsior (still higher)",
        author: "Latin - motto of New York"
    },
    {
        quote: "La belle dame sans merci (the beautiful lady without mercy)",
        author: "French phrase"
    },
    {
        quote: "Lasciate ogni speranza, voi che'entrate (abandon all hope, ye who enter)",
        author: "Italian - Dante"
    },
    {
        quote: "Nemo me impune lacessit (no one attacks me with impunity)",
        author: "Latin - Edgar Allen Poe"
    },
    {
        quote: "Wanderjahr (year of wandering)",
        author: "German phrase"
    },
    {
        quote: "Veni, vidi, vici (I came, I saw, I conquered)",
        author: "Latin phrase"
    },
    {
        quote: "Ua mau ke ea o ka aina i ka pono (the life of the land is perpetuated in righteousness)",
        author:"Hawaiian - motto of Hawaii"
    },
    {
        quote: "Resurgam (I shall rise again)",
        author: "Latin phrase"
    },
    {
        quote:"Pocas palabras (few words)",
        author: "Spanish phrase"
    },
    {
        quote: "In vino veritas (there is truth in wine)",
        author: "Latin phrase"
    },
    {
        quote: "Fiat justitia, ruat caelum (let justice be done though the heavens fall)",
        author: "Latin phrase"
    },
    {
        quote: "Gnothi seauton (know thyself)",
        author: "Greek phrase"
    },
    {
        quote: "Coincidence is God's way of remaining anonymous",
        author: "Albert Einstein"
    }
];

const colorOptions = ["aquamarine", "darkorchid", "deeppink", "tomato", "dodgerblue", "gold", "greenyellow", "hotpink", "mediumspringgreen", "orangered", "orange", "forestgreen", "blue", "silver", "black"];



function randomize1(){
    return Math.floor(Math.random() * quoteObjArr.length)
}

function randomize2(){
    return Math.floor(Math.random() * colorOptions.length)
}


$(window).on("load", function(){
    let result = quoteObjArr[randomize1()];
    let color = colorOptions[randomize2()];
    $("#text").text(result.quote); 
    $("#author").text(result.author);
    $("body").css("background-color", color);
})



$(document).ready(function(){
    $("#new-quote").on("click", function(){
     let result = quoteObjArr[randomize1()];
     $("#text").fadeOut("slow", function(){
        $("#text").text(result.quote).fadeIn("slow");
    })
    $("#author").fadeOut("slow", function(){
        $("#author").text(result.author).fadeIn("slow");
    })
    let color = colorOptions[randomize2()];
    $("body").css("background-color", color);
})
})
