import { load } from "$std/dotenv/mod.ts";
import { generate } from "@graphql-codegen/cli";
import { CodegenConfig } from "@graphql-codegen/cli";

// Load environment variables
await load({ export: true });

const endpointOverride = Deno.env.get("CONTENTFUL_GRAPHQL_ENDPOINT");
const productionEndpoint = 'https://graphql.contentful.com/content/v1/spaces';

export const endpoint = `${endpointOverride || productionEndpoint}/${
  Deno.env.get("CONTENTFUL_SPACE_ID")
}/environments/${Deno.env.get("CONTENTFUL_SPACE_ENVIRONMENT") || 'master'}`;

console.log("================================================")
console.log(endpoint);
console.log(Deno.env.get("CONTENTFUL_ACCESS_TOKEN"));
console.log(Deno.env.get("CONTENTFUL_SPACE_ID"));
console.log(Deno.env.get("CONTENTFUL_SPACE_ENVIRONMENT"));
console.log(Deno.env.get("CONTENTFUL_GRAPHQL_ENDPOINT"));
console.log("================================================")

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [endpoint || '']: {
        headers: {
          Authorization: `Bearer ${Deno.env.get("CONTENTFUL_ACCESS_TOKEN")}`,
        },
      },
    },
  ],
  generates: {
    './lib/__generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    './lib/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    './lib/__generated/sdk.ts': {
      documents: ['./lib/graphql/**/*.graphql'],
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
      },
    },
  },
};

try {
  await generate(config);
  console.log("✅ GraphQL CodeGen completed successfully!");
} catch (error) {
  console.error("❌ GraphQL CodeGen failed:", error);
  Deno.exit(1);
}

// console.log("✅ GraphQL CodeGen completed successfully!"); 