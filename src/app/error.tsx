"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error(props: Props) {
  const { error, reset } = props;
  return (
    <div className="p-8">
      <Card className="w-xl max-w-full mx-auto">
        <CardTitle>{error.message}</CardTitle>
        <CardContent>
          <Button onClick={reset}>Retry</Button>
        </CardContent>
      </Card>
    </div>
  );
}
