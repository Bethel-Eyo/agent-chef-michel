import z from "zod";
import { mastra } from "./mastra";

const chefAgent = mastra.getAgent("chefAgent");

// Text response
// const query =
//   "In my Kitchen I have: pasta, canned tomatoes, garlic, olive oil, and some  dried herbs (basil and oregano). what can i make?";
// console.log(`Query: ${query}`);

// const response = await chefAgent.generate([{ role: "user", content: query }]);
// console.log("\n Chef Michel:", response.text);


// Streaming response
// const query =
//   "Now I'm over at my friend's house, and they have: chicken thighs, coconut milk, sweet potatoes, and some curry powder.";
// console.log(`Query: ${query}`);

// const stream = await chefAgent.stream([{ role: "user", content: query }]);
// console.log("\n Chef Michel: ");

// for await (const chunk of stream.textStream) {
//   process.stdout.write(chunk);
// }

// console.log("\n\n✅ Recipe Complete!");


// Structured response
const query = "I want to make lasagna, can you generate a lasagna recipe for me?";
console.log(`Query: ${query}`);

// Define the Zod schema
const schema = z.object({
    ingredients: z.array(
        z.object({
            name: z.string(),
            amount: z.string(),
        })
    ),
    steps: z.array(z.string()),
});

const response = await chefAgent.generate([{ role: "user", content: query }], {
    output: schema
});
console.log("\n Chef Michel:", response.object);
