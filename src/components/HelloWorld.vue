<template>
  <div class="container">
    <div class="table-responsive">
      <h3>Tabla de Alumnos</h3>
      <table
        class="table table-striped"
        id="table-data"
        style="width: 100%"
      >
        <thead class="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Primer Registro</th>
            <th>Correo Personal</th>
            <th>Correo Udabol</th>
            <th>Código</th>
            <th>Verificación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>

<script>
import router from '../router';
export default {
  data() {
    return {};
  },
  mounted() {
    this.$axios
      .get('https://200.105.154.18:5901/api/Alumnos')
      .then((response) => {
        console.log(response);
        const data = response.data;
        // Inicializa el DataTable después de generar los modales
        const table = $('#table-data').DataTable({
          data: data,
          columns: [
            { data: 'nombre' },
            { data: 'primerRegistro' },
            { data: 'correoPersonal' },
            { data: 'correoUdabol' },
            { data: 'codigo' },
            { data: 'verificacion' },
            {
              data: null,
              render: function (data, type, row) {
                if (
                  row.codigo !== undefined &&
                  row.codigo !== null &&
                  row.codigo !== '#N/A' &&
                  row.codigo !== '#¡REF!' &&
                  row.codigo !== ''
                ) {
                  return '<button class="btn btn-primary btn-sm edit-btn">Editar</button>';
                }
                return '';
              },
            },
          ],
          language: {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
          },
        });
        // Acción de redireccionamiento al hacer clic en el botón de editar
        $('#table-data tbody').on('click', '.edit-btn', function () {
          const rowData = table.row($(this).parents('tr')).data();
          const codigo = rowData.codigo;
          router.push({ name: 'VerDatos', params: { codigo: codigo } });
        });
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  },
};
</script>
