'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, ConfirmModal } from '@/components/Modal';
import { Trash2, Settings, User, CreditCard } from 'lucide-react';

export default function ModalShowcase() {
    const [basicOpen, setBasicOpen] = useState(false);
    const [sizeSm, setSizeSm] = useState(false);
    const [sizeLg, setSizeLg] = useState(false);
    const [sizeFull, setSizeFull] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <div className="max-w-[1000px]">
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-[var(--text)] mb-2">
                    Modal Styles
                </h1>
                <p className="text-lg text-[var(--text-muted)]">Dialogs, popups, and overlay windows</p>
            </header>

            {/* Basic Modal */}
            <section className="mb-8 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Basic Modal</h2>
                <motion.button
                    onClick={() => setBasicOpen(true)}
                    className="px-4 py-2 text-white font-medium bg-[#002455] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Open Modal
                </motion.button>

                <Modal
                    isOpen={basicOpen}
                    onClose={() => setBasicOpen(false)}
                    title="Modal Title"
                >
                    <p className="text-[var(--text-secondary)]">
                        This is a basic modal with a title and close button. Click outside or press Escape to close.
                    </p>
                </Modal>
            </section>

            {/* Sizes */}
            <section className="mb-8 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Sizes</h2>
                <div className="flex flex-wrap gap-4">
                    <motion.button
                        onClick={() => setSizeSm(true)}
                        className="px-4 py-2 text-[var(--text)] font-medium border border-[var(--border)] rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Small
                    </motion.button>
                    <motion.button
                        onClick={() => setSizeLg(true)}
                        className="px-4 py-2 text-[var(--text)] font-medium border border-[var(--border)] rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Large
                    </motion.button>
                    <motion.button
                        onClick={() => setSizeFull(true)}
                        className="px-4 py-2 text-[var(--text)] font-medium border border-[var(--border)] rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Full Width
                    </motion.button>
                </div>

                <Modal isOpen={sizeSm} onClose={() => setSizeSm(false)} title="Small Modal" size="sm">
                    <p className="text-[var(--text-secondary)]">This is a small modal (max-w-sm).</p>
                </Modal>

                <Modal isOpen={sizeLg} onClose={() => setSizeLg(false)} title="Large Modal" size="lg">
                    <p className="text-[var(--text-secondary)]">This is a large modal (max-w-lg). Great for forms and more content.</p>
                </Modal>

                <Modal isOpen={sizeFull} onClose={() => setSizeFull(false)} title="Full Width Modal" size="full">
                    <p className="text-[var(--text-secondary)]">This is a full width modal (max-w-4xl). Perfect for complex content, tables, or media.</p>
                </Modal>
            </section>

            {/* Confirm Modal */}
            <section className="mb-8 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Confirm Modal</h2>
                <div className="flex flex-wrap gap-4">
                    <motion.button
                        onClick={() => setConfirmOpen(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium bg-[#002455] rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Settings size={18} /> Confirm Action
                    </motion.button>
                    <motion.button
                        onClick={() => setDeleteOpen(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium bg-[#DC0000] rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Trash2 size={18} /> Delete Item
                    </motion.button>
                </div>

                <ConfirmModal
                    isOpen={confirmOpen}
                    onClose={() => setConfirmOpen(false)}
                    onConfirm={() => console.log('Confirmed!')}
                    title="Confirm Changes"
                    message="Are you sure you want to save these changes? This action cannot be undone."
                    confirmText="Save Changes"
                    type="info"
                />

                <ConfirmModal
                    isOpen={deleteOpen}
                    onClose={() => setDeleteOpen(false)}
                    onConfirm={() => console.log('Deleted!')}
                    title="Delete Item"
                    message="Are you sure you want to delete this item? This action cannot be undone."
                    confirmText="Delete"
                    type="danger"
                />
            </section>

            {/* Form Modal */}
            <section className="mb-8 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Form Modal</h2>
                <motion.button
                    onClick={() => setFormOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium bg-[#10b981] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <User size={18} /> Edit Profile
                </motion.button>

                <Modal
                    isOpen={formOpen}
                    onClose={() => setFormOpen(false)}
                    title="Edit Profile"
                    size="md"
                    footer={
                        <>
                            <button
                                onClick={() => setFormOpen(false)}
                                className="px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-[var(--bg-secondary)] rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setFormOpen(false)}
                                className="px-4 py-2 text-sm font-medium text-white bg-[#10b981] rounded-lg"
                            >
                                Save Changes
                            </button>
                        </>
                    }
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[var(--text)] mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[#10b981]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--text)] mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[#10b981]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--text)] mb-1">Bio</label>
                            <textarea
                                rows={3}
                                placeholder="Tell us about yourself"
                                className="w-full px-4 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[#10b981] resize-none"
                            />
                        </div>
                    </div>
                </Modal>
            </section>

            {/* Usage */}
            <section className="mb-8 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Usage</h2>
                <pre className="p-4 bg-[#050E3C] text-white text-sm rounded-lg overflow-x-auto">
                    {`import { Modal, ConfirmModal } from '@/components/Modal';

// Basic Modal
const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"  // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  footer={<button>Save</button>}
>
  Modal content here
</Modal>

// Confirm Modal
<ConfirmModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={() => console.log('Confirmed')}
  title="Confirm"
  message="Are you sure?"
  type="danger"  // 'danger' | 'warning' | 'info'
/>`}
                </pre>
            </section>
        </div>
    );
}
