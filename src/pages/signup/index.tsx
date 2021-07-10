import { PageLayout } from "src/components";
import { SignUpForm } from "src/modules/auth";

export default function SignupPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center">
        <PageLayout>
          <h1>{"common:sign-up"}</h1>
          <SignUpForm />
        </PageLayout>
      </main>
    </div>
  );
}
