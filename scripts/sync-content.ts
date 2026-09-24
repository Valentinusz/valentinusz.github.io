import * as fs from 'node:fs/promises';
import { type DocumentRecord, sync } from 'fumadocs-core/search/algolia';
import { algoliasearch } from 'algoliasearch';

async function main(filePath: string) {
  const content = await fs.readFile(filePath);
  const records = JSON.parse(content.toString()) as DocumentRecord[];
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
    process.env.ALGOLIA_WRITE_KEY!,
  );

  await sync(client, {
    indexName: 'document',
    documents: records,
  });

  console.log(`search updated: ${records.length} records`);
}

// the path of pre-rendered `static.json`
const filePath = process.argv[2];
if (!filePath) throw new Error('missing the path of static.json');
void main(filePath);
