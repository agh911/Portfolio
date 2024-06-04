import React, { useState, useEffect } from 'react';

const GradientCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            const maxY = window.innerHeight - 350;
            const y = Math.min(e.clientY, maxY);
            setCursorPosition({ x: e.clientX, y });
        };

        const updateScrollPosition = () => {
            setScrollPosition({ x: window.scrollX, y: window.scrollY });
        };

        document.addEventListener('mousemove', updateCursorPosition);
        window.addEventListener('scroll', updateScrollPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
            window.removeEventListener('scroll', updateScrollPosition);
        };
    }, []);

    return (
        <div
            className="bg-gradient pointer-events-none fixed inset-0 z-30 rounded-full transition duration-300 lg:absolute"
            style={{
                width: '700px',
                height: '700px',
                transform: 'translate(-50%, -50%)',
                left: `${cursorPosition.x + scrollPosition.x}px`,
                top: `${cursorPosition.y + scrollPosition.y}px`,
            }}
        ></div>
    );
};

export default GradientCursor;