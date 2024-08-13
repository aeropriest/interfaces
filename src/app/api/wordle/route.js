// src/api/randomWords.js

const words = [
    "apple",
    "grape",
    "peach",
    "berry",
    "lemon",
    "mango",
    "plumb",
    "melon",
    "cherry",
    "guava",
    "kiwif",
    "pluto",
    "zebra",
    "tiger",
    "lions",
];

// Function to get unique random words
const getRandomWords = (numWords) => {
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numWords);
};

export async function GET(request) {
    const randomWords = getRandomWords(5); // Get 5 random words

    // Return the random words as a JSON response
    return new Response(JSON.stringify(randomWords), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}