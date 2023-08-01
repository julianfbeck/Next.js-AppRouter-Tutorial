import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: params.slug,
    description: `This is the page for ${params.slug}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <div className="font-extrabold text-4xl">Slug: {params.slug}</div>;
}
