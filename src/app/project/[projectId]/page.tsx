import ProjectDetail from '@/components/templates/project-detail';

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const projectId = (await params).projectId;

  return <ProjectDetail projectId={projectId} />;
}
