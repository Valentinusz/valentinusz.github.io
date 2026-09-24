import { source } from '@/lib/source';
import { toDocuments } from 'fumadocs-core/search/algolia';

export const revalidate = false;

export async function GET() {
  return Response.json(await toDocuments(source));
}
