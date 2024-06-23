import { ReactNode } from 'react';
import SkeletonCard from './Card';

const Skeleton = () => {
  function renderCards(): ReactNode[] {
    const lines = 3;

    return Array.from({ length: lines }, (_, index) => (
      <SkeletonCard key={`skeleton-card-${index}`} />
    ));
  }

  return renderCards();
};

export default Skeleton;
