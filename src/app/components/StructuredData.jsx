import React from "react";

const StructuredData = ({ schemas = [] }) => {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.data) }}
        />
      ))}
    </>
  );
};

export default StructuredData;
