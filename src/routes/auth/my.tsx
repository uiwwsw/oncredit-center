import { getNew } from "#/log/getNew";
import { FirebaseContext } from "@/FirebaseContext";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { Badge, Button } from "rsuite";

export const Route = createFileRoute("/auth/my")({
  component: RouteComponent,
});
function RouteComponent() {
  const { user } = useContext(FirebaseContext);
  const { data } = useQuery({
    enabled: !!user?.uid,
    queryKey: ["notification"],
    queryFn: () => getNew(user!.uid),
    staleTime: 0,
    gcTime: 0,
  });

  return (
    <SequentialAnimation>
      <Badge content={data?.length}>
        <Button appearance="primary" className="w-full" href="/auth/history">
          히스토리
        </Button>
      </Badge>
      <Button appearance="primary" className="w-full" href="/auth/store">
        내 상점
      </Button>
    </SequentialAnimation>
  );
}
