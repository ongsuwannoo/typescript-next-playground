import ProjectDetail from './project-detail';

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const projectId = (await params).projectId;

  return <ProjectDetail projectId={projectId} />;
}
