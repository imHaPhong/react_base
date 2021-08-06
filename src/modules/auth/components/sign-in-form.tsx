/* eslint-disable jsx-a11y/anchor-has-content */
import { FormEvent, useCallback, useState } from "react";
import { Button, ButtonLink } from "src/components";
import { routeSignupBase } from "src/constants/routes";
import { useInputHandler } from "src/hooks";
import { fakeSignin } from "src/services/api-auth.service";

export function SignInForm() {
  const [username, handleChangeUsername] = useInputHandler("");
  const [password, handleChangePassword] = useInputHandler("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignin = useCallback(async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    setIsSubmitting(true);
    await fakeSignin();
    setIsSubmitting(false);
  }, []);

  return (
    <div>
      <h2 className="text-xl">{"common:signin"}</h2>

      <form onSubmit={handleSignin}>
        <div className="p-4">
          <div className="mb-2">
            <label className="block">
              <span className="block mt-2">{"common:username"}</span>
              <input type="text" value={username} onChange={handleChangeUsername} />
            </label>
            <label className="block">
              <span className="block">{"common:password"}</span>
              <input type="password" value={password} onChange={handleChangePassword} />
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="mt2"
            loading={isSubmitting}
            loadingSize={20}
          >
            {"common:sign-in"}
          </Button>
        </div>
      </form>

      <ButtonLink to={routeSignupBase}>auth:dont-have-account</ButtonLink>
    </div>
  );
}
