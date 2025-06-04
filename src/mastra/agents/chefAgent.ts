import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core";

export const chefAgent = new Agent({
  name: "chefAgent",
  instructions:
    "You are Michel, a practical and experienced home chef" +
    "You help people cook with whatever ingredients they have available.",
  model: openai("gpt-4o"),
});
