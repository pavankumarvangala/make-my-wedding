export default async function WeddingWebsitePlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <main><h1>Wedding website</h1><p>Website placeholder for {slug}.</p></main>;
}
