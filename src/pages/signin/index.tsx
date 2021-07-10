import { PageLayout } from "src/components";
import { SignInForm } from "src/modules/auth";

export default function SigninPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center">
        <PageLayout>
          <h1 className="text-2xl">{"common:sign-in"}</h1>
          <SignInForm />
        </PageLayout>
      </main>
    </div>
  );
}
