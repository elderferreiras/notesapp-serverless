import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  container: {
    margin: '0 auto',
    padding: '50px 100px',
  },
};

const Container = ({ children }) => (
  <div style={styles.container}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
