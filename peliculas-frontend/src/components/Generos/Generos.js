import React, { useEffect, useState } from "react";
import API from "../../services/api";

function Generos() {

  const [generos, setGeneros] = useState([]);
  const [nombre, setNombre] = useState("");
  const [idEditar, setIdEditar] = useState(null);

  useEffect(() => {
    obtenerGeneros();
  }, []);

  const obtenerGeneros = async () => {
    try {
      const res = await API.get("/generos");
      setGeneros(res.data);
    } catch (error) {
      console.error("Error al obtener los géneros:", error);
    }
  };

  const guardarGenero = async () => {
    try {

      if (idEditar) {
        await API.put(`/generos/${idEditar}`, { nombre });
        setIdEditar(null);
      } else {
        await API.post("/generos", { nombre });
      }

      setNombre("");
      obtenerGeneros();

    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  const eliminarGenero = async (id) => {
    try {
      await API.delete(`/generos/${id}`);
      obtenerGeneros();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  const editarGenero = (genero) => {
    setNombre(genero.nombre);
    setIdEditar(genero.id);
  };

  return (
    <div>

      <h2>Lista de Géneros</h2>

      <div>
        <input
          type="text"
          placeholder="Nombre del género"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <button onClick={guardarGenero}>
          {idEditar ? "Actualizar" : "Agregar"}
        </button>
      </div>

      <br />

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {generos.map((genero) => (
            <tr key={genero.id}>
              <td>{genero.id}</td>
              <td>{genero.nombre}</td>
              <td>
                <button onClick={() => editarGenero(genero)}>
                  Editar
                </button>

                <button onClick={() => eliminarGenero(genero.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Generos;
