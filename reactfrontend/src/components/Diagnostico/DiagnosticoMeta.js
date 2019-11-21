import DiagnosticoActions from './DiagnosticoActions';
import React from 'react';

const DiagnosticoMeta = props => {
  const diagnostico = props.diagnostico;
  return (

    <div className="article-meta">
      <DiagnosticoActions  diagnostico={diagnostico} />
    </div>
  );
};

export default DiagnosticoMeta;
