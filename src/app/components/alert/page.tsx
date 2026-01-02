'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Alert } from '@/components/Alert';
import { Rocket, Shield, Zap } from 'lucide-react';

export default function AlertShowcase() {
    const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);

    const dismiss = (id: string) => {
        setDismissedAlerts(prev => [...prev, id]);
    };

    const reset = () => {
        setDismissedAlerts([]);
    };

    return (
        <div className="max-w-[1000px]">
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-[var(--text)] mb-2">
                    Alert Styles
                </h1>
                <p className="text-lg text-[var(--text-muted)]">Notification banners and alert messages</p>
            </header>

            {/* Light Variants (default) */}
            <section className="mb-8">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Light Variants</h2>
                <div className="space-y-4">
                    <Alert type="success" title="Success!">
                        Your changes have been saved successfully.
                    </Alert>
                    <Alert type="error" title="Error!">
                        Something went wrong. Please try again.
                    </Alert>
                    <Alert type="warning" title="Warning!">
                        Please review your input before proceeding.
                    </Alert>
                    <Alert type="info" title="Information">
                        New features are now available for you.
                    </Alert>
                </div>
            </section>

            {/* Solid Variants */}
            <section className="mb-8">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Solid Variants</h2>
                <div className="space-y-4">
                    <Alert type="success" title="Success!" variant="solid">
                        Your changes have been saved successfully.
                    </Alert>
                    <Alert type="error" title="Error!" variant="solid">
                        Something went wrong. Please try again.
                    </Alert>
                    <Alert type="warning" title="Warning!" variant="solid">
                        Please review your input before proceeding.
                    </Alert>
                    <Alert type="info" title="Information" variant="solid">
                        New features are now available for you.
                    </Alert>
                </div>
            </section>

            {/* Outline Variants */}
            <section className="mb-8">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Outline Variants</h2>
                <div className="space-y-4">
                    <Alert type="success" title="Success!" variant="outline">
                        Your changes have been saved successfully.
                    </Alert>
                    <Alert type="error" title="Error!" variant="outline">
                        Something went wrong. Please try again.
                    </Alert>
                    <Alert type="warning" title="Warning!" variant="outline">
                        Please review your input before proceeding.
                    </Alert>
                    <Alert type="info" title="Information" variant="outline">
                        New features are now available for you.
                    </Alert>
                </div>
            </section>

            {/* Minimal Variants */}
            <section className="mb-8">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Minimal Variants</h2>
                <div className="space-y-4">
                    <Alert type="success" title="Success!" variant="minimal">
                        Your changes have been saved successfully.
                    </Alert>
                    <Alert type="error" title="Error!" variant="minimal">
                        Something went wrong. Please try again.
                    </Alert>
                    <Alert type="warning" title="Warning!" variant="minimal">
                        Please review your input before proceeding.
                    </Alert>
                    <Alert type="info" title="Information" variant="minimal">
                        New features are now available for you.
                    </Alert>
                </div>
            </section>

            {/* Dismissible */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-[var(--text)]">Dismissible</h2>
                    <motion.button
                        onClick={reset}
                        className="px-3 py-1 text-sm text-[#FF3838] hover:bg-[#FF3838]/10 rounded-lg"
                        whileTap={{ scale: 0.95 }}
                    >
                        Reset All
                    </motion.button>
                </div>
                <div className="space-y-4">
                    {!dismissedAlerts.includes('d1') && (
                        <Alert type="success" title="Dismissible Alert" dismissible onDismiss={() => dismiss('d1')}>
                            Click the X button to dismiss this alert.
                        </Alert>
                    )}
                    {!dismissedAlerts.includes('d2') && (
                        <Alert type="info" title="Another Dismissible" variant="solid" dismissible onDismiss={() => dismiss('d2')}>
                            This solid alert can also be dismissed.
                        </Alert>
                    )}
                    {!dismissedAlerts.includes('d3') && (
                        <Alert type="warning" title="Warning Alert" variant="minimal" dismissible onDismiss={() => dismiss('d3')}>
                            Even minimal alerts can be dismissible.
                        </Alert>
                    )}
                </div>
            </section>

            {/* Custom Icons */}
            <section className="mb-8">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Custom Icons</h2>
                <div className="space-y-4">
                    <Alert type="info" title="New Feature!" icon={<Rocket size={20} />}>
                        Check out our latest updates and improvements.
                    </Alert>
                    <Alert type="success" title="Secure Connection" icon={<Shield size={20} />} variant="solid">
                        Your connection is encrypted and secure.
                    </Alert>
                    <Alert type="warning" title="Performance Tip" icon={<Zap size={20} />} variant="outline">
                        Enable caching to improve load times.
                    </Alert>
                </div>
            </section>

            {/* Title Only */}
            <section className="mb-8">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Title Only</h2>
                <div className="space-y-4">
                    <Alert type="success" title="Changes saved successfully!" />
                    <Alert type="error" title="Failed to save changes" variant="solid" />
                    <Alert type="info" title="3 new notifications" variant="minimal" />
                </div>
            </section>

            {/* Usage */}
            <section className="mb-8 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Usage</h2>
                <pre className="p-4 bg-[#050E3C] text-white text-sm rounded-lg overflow-x-auto">
                    {`import { Alert } from '@/components/Alert';

// Basic
<Alert type="success" title="Success!">
  Your changes have been saved.
</Alert>

// Variants: 'light' | 'solid' | 'outline' | 'minimal'
<Alert type="error" title="Error" variant="solid">
  Something went wrong.
</Alert>

// Dismissible
<Alert 
  type="info" 
  title="Info"
  dismissible
  onDismiss={() => console.log('dismissed')}
>
  Click X to dismiss.
</Alert>

// Custom Icon
<Alert type="info" title="Custom" icon={<Rocket size={20} />}>
  With custom icon.
</Alert>`}
                </pre>
            </section>
        </div>
    );
}