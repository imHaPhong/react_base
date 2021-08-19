import { Button, ButtonLink, Modal, PageLayout } from "src/components";
import { moneyFormatter } from "src/lib/format";
import { useCallback, useContext, useState } from "react";
import { routeSigninBase } from "src/constants/routes";
import { AppContext } from "src/contexts";

export default function Home() {
  const { notification } = useContext(AppContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <div className="w-full bg-rose-50">
      <main className="w-full flex flex-wrap justify-center">
        <PageLayout>
          <h1 className="py-4">Hello x</h1>
          <p>Test currency format: {moneyFormatter.format(123456789.12)}</p>

          <Button onClick={openModal}>Open modal</Button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="h-96">
              <h2>{notification?.message}</h2>
              <Button onClick={closeModal}>Close modal</Button>
            </div>
          </Modal>

          <ButtonLink to={routeSigninBase} variant="text" className="text-rose-800">
            {"common:sign-in"}
          </ButtonLink>
        </PageLayout>
      </main>
    </div>
  );
}
