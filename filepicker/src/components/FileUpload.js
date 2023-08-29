import React, { useState, useEffect, useRef } from 'react';

function FileUpload() {
  const userId = 'unique_user_id'; // Cambia esto por un identificador único para cada usuario
  const [tempImageUrl, setTempImageUrl] = useState('');
  const [imageUrl, setImageUrl] = useState(
    localStorage.getItem(`${userId}_imageUrl`) || 'https://picsum.photos/200/300'
  );
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Cuando se monta el componente, carga la imagen del localStorage
    const storedImageUrl = localStorage.getItem(`${userId}_imageUrl`);
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    }
  }, [userId]);

  const handleImageClick = () => {
    // Abrir la galería de imágenes al hacer clic en la imagen
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const userId = 'unique_user_id'; // Cambia esto por una identificación única real del usuario
    
      // Utiliza una clave constante en localStorage para la imagen del usuario
      const imageKey = `${userId}_imageUrl`;
    
      setTempImageUrl(URL.createObjectURL(file)); // Cargar una imagen temporal para vista previa
    
      // Cuando se completa la carga, guardar la URL en localStorage con la clave constante
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem(imageKey, reader.result);
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
      <img
        src={tempImageUrl || imageUrl}
        alt="Imagen seleccionada"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default FileUpload;
