import { create } from 'zustand';

type ModalType = 'login' | 'logout' | 'register' | '';

interface ModalStore {
    isOpen: boolean;
    modalType: ModalType;
    onOpen: (modal: ModalType) => void;
    onClose: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    modalType: '',
    onOpen: (modal: ModalType) => set({ isOpen: true, modalType: modal }),
    onClose: () => set({ isOpen: false, modalType: '' }),
}));
