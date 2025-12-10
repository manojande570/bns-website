'use client';

import { ReactNode } from 'react';
import styles from '@/styles/ResponsiveContainer.module.css';

interface ResponsiveContainerProps {
    children: ReactNode;
    className?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function ResponsiveContainer({ 
    children, 
    className = '', 
    maxWidth = 'xl',
    padding = 'md'
}: ResponsiveContainerProps) {
    const containerClasses = [
        styles.container,
        styles[`maxWidth-${maxWidth}`],
        styles[`padding-${padding}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses}>
            {children}
        </div>
    );
}