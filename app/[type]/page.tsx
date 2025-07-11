import { componentList } from "@/registry/component-list";
import { ComponentLoader } from "@/components/registry-component-server";
import { getComponentsByNames } from "@/lib/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;


  const components = getComponentsByNames(
    componentList.find((component) => component.slug === type)?.components.map(
      (component) => component.name
    ) || []
  );
  return (
    <div>
      <div className="max-w-6xl mx-auto w-full flex flex-col py-10 border-x border-neutral-200 space-y-10 bg-white">
        {components?.map((component) => (
          <div key={component.name} data-slot={component.name}>
            <ComponentLoader component={component} />
          </div>
        ))}
      </div>
    </div>
  );
}
