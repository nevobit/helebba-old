import React from 'react';
import styles from './ColorSelect.module.css';

interface Color {
    id: string;
  name: string;
  value: string;
}

interface ColorSelectProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

const ColorSelect: React.FC<ColorSelectProps> = ({ name, onChange, value }) => {
  const colors: Color[] = [
    { id: "f47ac10b-58cc-4372-a567-0e02b2c3d479", name: "Blanco", value: "#FFFFFF" },
    { id: "550e8400-e29b-41d4-a716-446655440000", name: "Marfil", value: "#FFFFF0" },
    { id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8", name: "Beige", value: "#F5F5DC" },
    { id: "7c9e6679-7425-40de-944b-e07fc1f90ae7", name: "Gris Claro", value: "#D3D3D3" },
    { id: "8f14e45f-ceea-467a-9575-6da7b41fd1d6", name: "Gris Medio", value: "#808080" },
    { id: "9b3b8b9a-7c9e-4de4-8bf1-65f9bb0d30b9", name: "Gris Oscuro", value: "#404040" },
    { id: "a6edc906-2f9f-4fb0-89df-d89aef1d1800", name: "Negro", value: "#000000" },
    { id: "b2eb7349-e8f7-4161-a26f-b7f8faa3b7b7", name: "Azul Cielo", value: "#87CEEB" },
    { id: "c3fa2e4f-7d25-40e5-8f7e-9b9e6c9f6b7a", name: "Azul Marino", value: "#000080" },
    { id: "d4c8a331-60ef-4351-b24c-b62179e39169", name: "Lavanda", value: "#E6E6FA" },
    { id: "e5d714cb-5f51-4e0f-a97b-c1b2e5c6a6e8", name: "Púrpura", value: "#800080" },
    { id: "f6e6b2a7-6f39-4e8b-b2ec-43b7d35a669f", name: "Rosa Claro", value: "#FFB6C1" },
    { id: "07f5c9d8-7d41-4f1c-b3a6-12c9e3d4b5c6", name: "Rosa Oscuro", value: "#FF1493" },
    { id: "18e4d8b9-8c52-4f2d-a4b7-23d8f4c5e6d7", name: "Rojo", value: "#FF0000" },
    { id: "29d3c7a8-9b63-4e3e-b5c8-34e7d5f6g7h8", name: "Borgoña", value: "#800020" },
    { id: "3ab2d6c7-ac74-4f4f-c6d9-45f8e6g7h8i9", name: "Melocotón", value: "#FFDAB9" },
    { id: "4bc1e5d6-bd85-4g5g-d7ea-56g9f7h8i9j0", name: "Coral", value: "#FF7F50" },
    { id: "5cd0f4e5-ce96-5h6h-e8fb-67h0g8i9j0k1", name: "Naranja", value: "#FFA500" },
    { id: "6de2g3f4-df07-6i7i-f9gc-78i1h9j0k1l2", name: "Amarillo Claro", value: "#FFFFE0" },
    { id: "7ef3h2g3-eg18-7j8j-g0hd-89j2i0k1l2m3", name: "Amarillo", value: "#FFFF00" },
    { id: "8fg4i1h2-fh29-8k9k-h1ie-90k3j1l2m3n4", name: "Verde Menta", value: "#98FF98" },
    { id: "9gh5j0i1-gi3a-9l0l-i2jf-01l4k2m3n4o5", name: "Verde Salvia", value: "#9FD8CB" },
    { id: "0hi6k9j0-hj4b-0m1m-j3kg-12m5l3n4o5p6", name: "Verde Oliva", value: "#808000" },
    { id: "1ij7l8k9-ik5c-1n2n-k4lh-23n6m4o5p6q7", name: "Turquesa", value: "#40E0D0" },
    { id: "2jk8m7l8-jl6d-2o3o-l5mi-34o7n5p6q7r8", name: "Azul Verdoso", value: "#008080" },
    { id: "3kl9n6m7-km7e-3p4p-m6nj-45p8o6q7r8s9", name: "Marrón Claro", value: "#D2B48C" },
    { id: "4lm0o5n6-ln8f-4q5q-n7ok-56q9p7r8s9t0", name: "Marrón", value: "#8B4513" },
    { id: "5mn1p4o5-mo9g-5r6r-o8pl-67r0q8s9t0u1", name: "Café", value: "#6F4E37" },
    { id: "6no2q3p4-np0h-6s7s-p9qm-78s1r9t0u1v2", name: "Crema", value: "#FFFDD0" },
    { id: "7op3r2q3-oq1i-7t8t-q0rn-89t2s0u1v2w3", name: "Dorado", value: "#FFD700" }
  ];

  const selectedColor = colors.find(color => color.value === value);

  return (
    <div className={styles.selectWrapper}>
      <select
        name={name}
        value={value || ''}
        onChange={onChange}
        className={styles.select}
      >
        <option value="">Seleccionar</option>
        {colors.map((color) => (
          <option key={color.id} value={color.value}>
            {color.name}
          </option>
        ))}
      </select>
      <div className={styles.customSelect}>
        {selectedColor ? (
          <>
            <span
              className={styles.colorSwatch}
              style={{ borderRadius: 40, backgroundColor: selectedColor.value }}
            />
            <span>{selectedColor.name}</span>
          </>
        ) : (
          <span className={styles.placeholder}>Seleccionar</span>
        )}
      </div>
    </div>
  );
};

export default ColorSelect;