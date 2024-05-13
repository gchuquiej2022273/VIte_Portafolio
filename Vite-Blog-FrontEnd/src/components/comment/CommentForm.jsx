import { useState } from 'react';
import { sendComment } from '../../services'; // Asegúrate de que la ruta sea correcta

export const CommentForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const commentData = {
      name,
      description
    };

    try {
      const result = await sendComment(commentData);
      console.log('Comentario enviado, respuesta del servidor:', result);
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error enviando comentario:', error);
    }
  };

  return (
    <div className="container-form">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <div className="form-control">
          <input 
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <label htmlFor="description">Descripción</label>
        <div className="form-control">
          <input 
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};