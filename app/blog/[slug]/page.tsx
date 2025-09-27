type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Params) {
  const resolvedParams = await params;
  return { title: `Post: ${resolvedParams.slug}` };
}

export default async function Page({ params }: Params) {
  const resolvedParams = await params;
  return <h1>Slug: {resolvedParams.slug}</h1>;
}