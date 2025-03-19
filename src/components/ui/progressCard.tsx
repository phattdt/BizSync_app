import * as ProgressPrimitive from "@radix-ui/react-progress";

export const Progress = ({ value }: { value: number }) => (
  <ProgressPrimitive.Root className="h-2 bg-gray-700 rounded-full overflow-hidden">
    <ProgressPrimitive.Indicator
      className="h-full bg-blue-500"
      style={{ width: `${value}%` }}
    />
  </ProgressPrimitive.Root>
);
