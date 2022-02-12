import React from 'react';
import classNames from 'classnames';

export default function Grid({children, className, two, three, six, twelve, padding, projects}) {
  return (
    <div
      className={classNames(
        'grid',
        two && 'grid-cols-2',
        three && 'grid-cols-3',
        six && 'grid-cols-6',
        twelve && 'grid-cols-12',
        projects && 'md:grid-cols-project',
        padding && 'pb-lg last:pb-0 px',
        className
      )}
    >
      {children}
    </div>
  );
}
