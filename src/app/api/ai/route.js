import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

const formalExample = {
  marathi: [
    { word: "तुम्ही" },
    { word: "भारत" },
    { word: "मध्ये" },
    { word: "राहता" },
    { word: "का", },
    { word: "?" },
  ],
  grammarBreakdown: [
    {
      english: "Do you live in India?",
      marathi: [
        { word: "तुम्ही" },
        { word: "भारत" },
        { word: "मध्ये" },
        { word: "राहता" },
        { word: "का" },
        { word: "?" },
      ],
      chunks: [
        {
          marathi: [{ word: "तुम्ही" }],
          meaning: "You",
          grammar: "Pronoun",
        },
        {
          marathi: [{ word: "भारत" }],
          meaning: "India",
          grammar: "Noun",
        },
        {
          marathi: [{ word: "मध्ये" }],
          meaning: "in",
          grammar: "Postposition",
        },
        {
          marathi: [{ word: "राहता" }],
          meaning: "live",
          grammar: "Verb",
        },
        {
          marathi: [{ word: "का" }],
          meaning: "question",
          grammar: "Particle",
        },
        {
          marathi: [{ word: "?" }],
          meaning: "question",
          grammar: "Punctuation",
        },
      ],
    },
  ],
};

const casualExample = {
  marathi: [
    { word: "तू" },
    { word: "भारत" },
    { word: "मध्ये" },
    { word: "राहतोस" },
    { word: "का" },
    { word: "?" },
  ],
  grammarBreakdown: [
    {
      english: "Do you live in India?",
      marathi: [
        { word: "तू" },
        { word: "भारत" },
        { word: "मध्ये" },
        { word: "राहतोस" },
        { word: "का" },
        { word: "?" },
      ],
      chunks: [
        {
          marathi: [{ word: "तू" }],
          meaning: "You",
          grammar: "Pronoun",
        },
        {
          marathi: [{ word: "भारत" }],
          meaning: "India",
          grammar: "Noun",
        },
        {
          marathi: [{ word: "मध्ये" }],
          meaning: "in",
          grammar: "Postposition",
        },
        {
          marathi: [{ word: "राहतोस" }],
          meaning: "live",
          grammar: "Verb",
        },
        {
          marathi: [{ word: "का" }],
          meaning: "question",
          grammar: "Particle",
        },
        {
          marathi: [{ word: "?" }],
          meaning: "question",
          grammar: "Punctuation",
        },
      ],
    },
  ],
};

export async function GET(req) {
  

  const speech = req.nextUrl.searchParams.get("speech") || "formal";
  const speechExample = speech === "formal" ? formalExample : casualExample;

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a Marathi language teacher. 
Your student asks you how to say something from English to Marathi.
You should respond with: 
- english: the English version ex: "Do you live in India?"
- marathi: the Marathi translation split into words ex: ${JSON.stringify(
          speechExample.marathi
        )}
- grammarBreakdown: an explanation of the grammar structure per sentence ex: ${JSON.stringify(
          speechExample.grammarBreakdown
        )}
`,
      },
      {
        role: "system",
        content: `You always respond with a JSON object with the following format: 
        {
          "english": "",
          "marathi": [{
            "word": "",
            "reading": ""
          }],
          "grammarBreakdown": [{
            "english": "",
            "marathi": [{
              "word": "",
              "reading": ""
            }],
            "chunks": [{
              "marathi": [{
                "word": "",
                "reading": ""
              }],
              "meaning": "",
              "grammar": ""
            }]
          }]
        }`,
      },
      {
        role: "user",
        content: `How to say ${
          req.nextUrl.searchParams.get("question") ||
          "Have you ever been to India?"
        } in Marathi in ${speech} speech?`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const completionContent = chatCompletion.choices[0].message.content;
  console.log(completionContent);
  
  return Response.json(JSON.parse(completionContent));
}
