import { Suspense, lazy, ComponentType } from "react";

const LazyLoading = (
  Component: () => Promise<{ default: ComponentType<any> }>,
  { Fallback }: { Fallback: React.FC }
) => {
  const LazyComponent = lazy(Component);

  return (props: any) => (
    <Suspense fallback={<Fallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
export default LazyLoading;
