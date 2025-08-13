import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-screen flex items-center justify-center py-8">
      <SignIn />
    </div>
  );
}
