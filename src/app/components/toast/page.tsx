'use client';

import { motion } from 'framer-motion';
import { Toast, ToastProvider, useToast } from '@/components/Toast';
import { Alert } from '@/components/Alert';
import { Bell } from 'lucide-react';

// Demo component that uses the toast hook
function ToastDemo() {
    const { addToast } = useToast();

    return (
        <section className="mb-8 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
            <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Live Demo - Click to show toast</h2>
            <div className="flex flex-wrap gap-4">
                <motion.button
                    onClick={() => addToast({ type: 'success', title: 'Success!', message: 'Your changes have been saved.' })}
                    className="px-4 py-2 text-white font-medium bg-[#10b981] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Success Toast
                </motion.button>
                <motion.button
                    onClick={() => addToast({ type: 'error', title: 'Error!', message: 'Something went wrong. Please try again.' })}
                    className="px-4 py-2 text-white font-medium bg-[#DC0000] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Error Toast
                </motion.button>
                <motion.button
                    onClick={() => addToast({ type: 'warning', title: 'Warning!', message: 'Please review before proceeding.' })}
                    className="px-4 py-2 text-white font-medium bg-[#f59e0b] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Warning Toast
                </motion.button>
                <motion.button
                    onClick={() => addToast({ type: 'info', title: 'Info', message: 'New features are available.' })}
                    className="px-4 py-2 text-white font-medium bg-[#002455] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Info Toast
                </motion.button>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
                <motion.button
                    onClick={() => addToast({ type: 'success', title: 'Light variant', message: 'This is a light toast.', variant: 'light' })}
                    className="px-4 py-2 text-[#10b981] font-medium border border-[#10b981] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Light Toast
                </motion.button>
                <motion.button
                    onClick={() => addToast({ type: 'info', title: 'Minimal variant', variant: 'minimal' })}
                    className="px-4 py-2 text-[#002455] font-medium border border-[#002455] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Minimal Toast
                </motion.button>
                <motion.button
                    onClick={() => addToast({
                        type: 'info',
                        title: 'With action',
                        message: 'Click undo to revert',
                        action: {
                            label: 'Undo',
                            onClick: () => addToast({ type: 'success', title: 'Undo clicked!', message: 'Action reverted.' })
                        }
                    })}
                    className="px-4 py-2 text-[#050E3C] font-medium border border-[var(--border)] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Toast with Action
                </motion.button>
            </div>
        </section>
    );
}

export default function ToastShowcase() {
    return (
        <ToastProvider>
            <div className="max-w-[1000px]">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-[var(--text)] mb-2">
                        Toast Styles
                    </h1>
                    <p className="text-lg text-[var(--text-muted)]">Notification and toast message designs</p>
                </header>

                {/* Live Demo */}
                <ToastDemo />

                {/* Static Toast Examples - Solid */}
                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Solid Variants</h2>
                    <div className="space-y-4">
                        <Toast type="success" title="Success!" message="Your changes have been saved successfully." />
                        <Toast type="error" title="Error!" message="Something went wrong. Please try again." />
                        <Toast type="warning" title="Warning!" message="Please review your input before proceeding." />
                        <Toast type="info" title="Information" message="New features are now available for you." />
                    </div>
                </section>

                {/* Light Variants */}
                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Light Variants</h2>
                    <div className="space-y-4">
                        <Toast type="success" title="Success!" message="Your changes have been saved successfully." variant="light" />
                        <Toast type="error" title="Error!" message="Something went wrong. Please try again." variant="light" />
                        <Toast type="warning" title="Warning!" message="Please review your input before proceeding." variant="light" />
                        <Toast type="info" title="Information" message="New features are now available for you." variant="light" />
                    </div>
                </section>

                {/* Minimal */}
                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Minimal</h2>
                    <div className="space-y-4 max-w-md">
                        <div className="flex items-center gap-3 p-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg shadow-lg">
                            <div className="w-1 h-8 bg-[#10b981] rounded-full" />
                            <p className="text-sm text-[var(--text)]">Changes saved successfully</p>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg shadow-lg">
                            <div className="w-1 h-8 bg-[#DC0000] rounded-full" />
                            <p className="text-sm text-[var(--text)]">Failed to save changes</p>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-[#050E3C] rounded-lg shadow-lg">
                            <Bell size={18} className="text-[#FF3838]" />
                            <p className="text-sm text-white">You have 3 new notifications</p>
                        </div>
                    </div>
                </section>

                {/* With Action */}
                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-[var(--text)] mb-4">With Action</h2>
                    <div className="space-y-4 max-w-md">
                        <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl shadow-lg">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h4 className="font-semibold text-[var(--text)]">File deleted</h4>
                                    <p className="text-sm text-[var(--text-muted)]">project-v2.zip has been deleted</p>
                                </div>
                                <button className="px-3 py-1 text-sm font-medium text-[#FF3838] hover:bg-[#FF3838]/10 rounded-lg">
                                    Undo
                                </button>
                            </div>
                        </div>

                        <div className="p-4 bg-[#050E3C] rounded-xl shadow-lg">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h4 className="font-semibold text-white">Update available</h4>
                                    <p className="text-sm text-white/60">A new version is ready to install</p>
                                </div>
                                <button className="px-3 py-1 text-sm font-medium text-white bg-[#FF3838] rounded-lg">
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Usage Code */}
                <section className="mb-8 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                    <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Usage</h2>
                    <pre className="p-4 bg-[#050E3C] text-white text-sm rounded-lg overflow-x-auto">
                        {`import { Toast, ToastProvider, useToast } from '@/components/Toast';

// Wrap your app with ToastProvider
<ToastProvider>
  <App />
</ToastProvider>

// Use the hook to show toasts
const { addToast } = useToast();

addToast({
  type: 'success',
  title: 'Saved!',
  message: 'Your changes have been saved.',
  variant: 'solid', // 'solid' | 'light' | 'minimal'
  duration: 3000,   // auto-dismiss in ms
});`}
                    </pre>
                </section>
            </div>
        </ToastProvider>
    );
}