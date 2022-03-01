import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Grid({children, className, two, three, six, twelve, padding, projects}) {
  return (
    <div
      className={classNames(
        'grid',
        two && 'sm:grid-cols-2',
        three && 'sm:grid-cols-3',
        six && 'grid-cols-6',
        twelve && 'grid-cols-12',
        projects && 'md:grid-cols-project',
        padding && 'pb-lg px',
        className
      )}
    >
      {children}
    </div>
  );
}

Grid.propTypes = {
  two: PropTypes.bool,
  three: PropTypes.bool,
  six: PropTypes.bool,
  twelve: PropTypes.bool,
  padding: PropTypes.bool,
};
