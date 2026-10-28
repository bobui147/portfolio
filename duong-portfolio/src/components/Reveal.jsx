import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const elements = { section: motion.section, div: motion.div, h2: motion.h2, footer: motion.footer, article: motion.article };
const easing = [.22, 1, .36, 1];
const visible = { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' };

function useMediaQuery(query) {
  const media = useMemo(() => typeof window === 'undefined' ? null : window.matchMedia(query), [query]);
  const subscribe = useMemo(() => notify => {
    media?.addEventListener('change', notify);
    return () => media?.removeEventListener('change', notify);
  }, [media]);
  return useSyncExternalStore(subscribe, () => media?.matches ?? false, () => false);
}

/** Motion owns opacity and y; CSS keeps the original layout and colors. */
export function Reveal({ as = 'div', delay = 0, project = false, children, ...props }) {
  const Component = elements[as];
  const reducedOnMount = useReducedMotion();
  // The installed hook snapshots the initial preference; subscribe for live changes too.
  const liveReduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const reduced = typeof window === 'undefined' ? reducedOnMount : liveReduced;
  const mobile = useMediaQuery('(max-width: 768px)');
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const [forcedVisible, setForcedVisible] = useState(Boolean(reduced));
  const [revealed, setRevealed] = useState(false);
  const instant = Boolean(reduced || forcedVisible);

  useEffect(() => {
    // A preference change must also reveal content waiting outside the viewport.
    if (reduced) setForcedVisible(true);
  }, [reduced]);

  return (
    <Component
      {...props}
      data-motion-reveal=""
      initial={instant ? false : 'hidden'}
      animate={instant ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: true, amount: .08, margin: '0px 0px -24px 0px' }}
      variants={{ hidden: { opacity: 0, y: mobile ? 18 : 28, scale: project ? .985 : .995, filter: 'blur(6px)' }, visible }}
      transition={{ duration: instant ? 0 : project && revealed ? .3 : mobile ? .58 : .68, delay: instant || revealed ? 0 : delay, ease: easing }}
      whileHover={project && canHover && !reduced ? { y: -4, transition: { duration: .25, delay: 0, ease: easing } } : undefined}
      onFocusCapture={() => setForcedVisible(true)}
      onAnimationComplete={definition => { if (definition === 'visible') setRevealed(true); }}
    >{children}</Component>
  );
}

export function ProjectCard({ index, ...props }) {
  return <Reveal as="article" project delay={index * .09} {...props} />;
}
