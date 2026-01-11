import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useReveal() {
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-50px" });
    return { ref, inView };
}
