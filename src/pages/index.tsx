import { Button, ButtonLink, Modal, PageLayout } from "src/components";
import { moneyFormatter } from "src/lib/format";
import { useCallback, useState } from "react";
import { routeSigninBase } from "src/constants/routes";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center">
        <PageLayout>
          <h1 className="py-4">Hello</h1>
          <p>Test currency format: {moneyFormatter.format(123456789.12)}</p>

          <Button onClick={openModal}>Open modal</Button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="h-96">
              <h2>This is modal</h2>
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
