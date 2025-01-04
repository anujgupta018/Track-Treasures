import { SignIn } from "@clerk/nextjs";

export default function Page() {
  console.log("user signed in");
  return <SignIn />;
}
