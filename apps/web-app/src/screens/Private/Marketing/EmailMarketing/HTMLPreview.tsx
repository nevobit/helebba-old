import React from 'react';

interface EmailDesign {
  body: {
    rows: Array<{
      columns: Array<{
        contents: Array<{
          type: string;
          values: {
            text: string;
            // ... otros valores
          };
        }>;
      }>;
    }>;
  };
}

const renderEmailDesign = (designJson: string): string => {
  try {
    const design: EmailDesign = JSON.parse(designJson);
    let html = '';
    design.body.rows.forEach(row => {
      row.columns.forEach(column => {
        column.contents.forEach(content => {
          if (content.type === 'text') {
            html += content.values.text;
          }
          // Añade más casos para otros tipos de contenido si es necesario
        });
      });
    });
    return html;
  } catch (error) {
    console.error('Error parsing email design:', error);
    return 'Error al cargar el diseño del email';
  }
};

const HTMLPreview: React.FC<{ content: string }> = ({ content }) => {
  const html = content.startsWith('{') ? renderEmailDesign(content) : content;

  return (
    <iframe
      srcDoc={html}
      style={{ width: '100%', height: '300px', border: 'none' }}
      title="Email Preview"
    />
  );
};

export default HTMLPreview;