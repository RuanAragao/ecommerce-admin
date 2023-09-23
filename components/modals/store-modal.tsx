"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
      title={"Create a new store"}
      description={"Add a new store to your account"}
    >
      Crazyy
    </Modal>
  );
};