import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { signInForKakao } from "#/auth/signIn";
import { Loader } from "rsuite";
import { getUser } from "#/userInfo/getUser";
export const Route = createFileRoute("/oauth")({
  component: RouteComponent,
});
function RouteComponent() {
  const params = new URL(document.URL).searchParams;
  const code = params.get("code");
  const { data } = useQuery({
    queryKey: ["oauth"],
    queryFn: () => signInForKakao({ code }),
    select: (data) => data,
  });
  const { data: user } = useQuery({
    enabled: !!data?.uid,
    queryKey: ["user"],
    queryFn: () => getUser(data!.uid),
  });
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) return;
    console.log(user);
    if (user) {
      router.history.push("/");
    } else {
      router.history.push("/sign-up");
    }
  }, [user, router]);
  return <Loader />;
}
