import { shape, string } from 'prop-types';

import CustomRenderer from './CustomRenderer';
import EightDiagrams from './EightDiagrams';
import EmitterBehaviors from './EmitterBehaviors';
import MeshRenderer from './MeshRenderer';
import React from 'react';

const Examples = ({ query: { name } }) => {
  switch (name) {
    case 'custom-renderer':
      return <CustomRenderer />;
    case 'eight-diagrams':
      return <EightDiagrams />;
    case 'emitter-behaviors':
      return <EmitterBehaviors />;
    case 'mesh-renderer':
      return <MeshRenderer />;
    default:
      return null;
  }
};

Examples.propTypes = {
  query: shape({
    name: string,
  }),
};

export default Examples;
