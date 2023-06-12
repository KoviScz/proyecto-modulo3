<template>
  <div class="container">
    <h3>Alumno: {{ alumno.primerRegistro }}</h3>
    <div class="p-3 row">
      <label class="col-sm-3 form-control-label"
        >Codigo: {{ alumno.codigo }}</label
      >
      <label class="col-sm-3 form-control-label"
        >Correo Udabol: {{ alumno.correoUdabol }}</label
      >
      <a href="/"> Volver a la lista de alumnos</a>
    </div>
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th scope="col">GIT</th>
          <th scope="col">ADOO</th>
          <th scope="col">ScrumTra</th>
          <th scope="col">SOLID</th>
          <th scope="col">12FactApp</th>
          <th scope="col">Docker</th>
          <th scope="col">Nota Final</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ alumno.ex_GIT_6PTS }}</td>
          <td>{{ alumno.ex_ADOO_8PTS }}</td>
          <td>{{ alumno.ex_ScrumTra_41PTS }}</td>
          <td>{{ alumno.ex_SOLID_8PTS }}</td>
          <td>{{ alumno.ex_12FactApp_12PTS }}</td>
          <td>{{ alumno.ex_Docker_5PTS }}</td>
          <td>{{ notaFinal }}</td>
          <td>
            <button
              class="btn btn-warning"
              type="button"
              @click.prevent="updateForm = true"
            >
              Modificar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="updateForm"
      class="form-row row"
    >
      <form
        class="mt-3 form-row row"
        @submit.prevent="updateData"
      >
        <div class="mb-3 col-sm-3">
          <label
            for="nombre"
            class="form-label"
            >Nombre:</label
          >
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="alumno.nombre"
            required
          />
        </div>
        <div class="mb-3 col-sm-3">
          <label
            for="nombreRegistro"
            class="form-label"
            >Primer Registro:</label
          >
          <input
            type="text"
            class="form-control"
            id="nombreRegistro"
            v-model="alumno.primerRegistro"
            required
          />
        </div>
        <div class="mb-3 col-sm-3">
          <label
            for="correoPersonal"
            class="form-label"
            >Correo Personal:</label
          >
          <input
            type="text"
            class="form-control"
            id="correoPersonal"
            v-model="alumno.correoPersonal"
            required
          />
        </div>
        <div class="mb-3 col-sm-3">
          <label
            for="correoCorp"
            class="form-label"
            >Correo Udabol:</label
          >
          <input
            type="text"
            class="form-control"
            id="correoCorp"
            v-model="alumno.correoUdabol"
            required
          />
        </div>
        <div class="mb-3 col-sm-3">
          <label
            for="codigo"
            class="form-label"
            >Codigo:</label
          >
          <input
            type="text"
            class="form-control"
            id="codigo"
            v-model="alumno.codigo"
            required
          />
        </div>
        <div class="mb-3 col-sm-3">
          <label class="form-label">Verificación:</label>
          <span
            class="form-control fw-bold"
            :class="{
              'text-green': alumno.verificacion === 'Tiene Datos',
              'text-red': alumno.verificacion !== 'Tiene Datos',
            }"
          >
            {{ alumno.verificacion }}</span
          >
        </div>
        <div class="mb-3 col-sm-3">
          <label class="form-label">Estado:</label>
          <span
            class="form-control fw-bold"
            :class="{
              'text-green': alumno.isActive === true,
              'text-red': alumno.isActive !== true,
            }"
          >
            {{ alumno.isActive ? 'Activo' : 'Inactivo' }}</span
          >
        </div>
        <div class="row col-sm-12">
          <div class="mb-3 col-sm-1">
            <label
              for="git"
              class="form-label"
              >NOTA GIT:</label
            >
            <input
              type="text"
              class="form-control"
              id="git"
              v-model="alumno.ex_GIT_6PTS"
              required
            />
          </div>
          <div
            class="mb-3 col-sm-2"
            style="width: 10.666667% !important"
          >
            <label
              for="ado"
              class="form-label"
              >NOTA ADO:</label
            >
            <input
              type="text"
              class="form-control"
              id="ado"
              v-model="alumno.ex_ADOO_8PTS"
              required
            />
          </div>
          <div
            class="mb-3 col-sm-2"
            style="width: 10.666667% !important"
          >
            <label
              for="scrum"
              class="form-label"
              >NOTA SCRUM:</label
            >
            <input
              type="text"
              class="form-control"
              id="scrum"
              v-model="alumno.ex_ScrumTra_41PTS"
              required
            />
          </div>
          <div
            class="mb-3 col-sm-2"
            style="width: 10.666667% !important"
          >
            <label
              for="solid"
              class="form-label"
              >NOTA SOLID:</label
            >
            <input
              type="text"
              class="form-control"
              id="solid"
              v-model="alumno.ex_SOLID_8PTS"
              required
            />
          </div>
          <div
            class="mb-3 col-sm-2"
            style="width: 10.666667% !important"
          >
            <label
              for="12fact"
              class="form-label"
              >NOTA 12fact:</label
            >
            <input
              type="text"
              class="form-control"
              id="12fact"
              v-model="alumno.ex_12FactApp_12PTS"
              required
            />
          </div>
          <div
            class="mb-3 col-sm-2"
            style="width: 10.666667% !important"
          >
            <label
              for="docker"
              class="form-label"
              >NOTA Docker:</label
            >
            <input
              type="text"
              class="form-control"
              id="docker"
              v-model="alumno.ex_Docker_5PTS"
              required
            />
          </div>
        </div>

        <!-- Botón para guardar los cambios -->
        <div class="row text-center px-2 align-justify-center">
          <button
            type="submit"
            class="btn btn-primary col-md-4 btn-sm"
          >
            Guardar
          </button>
          <button
            class="btn btn-danger col-md-4 btn-sm"
            @click="updateForm = false"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import router from '../router';
export default {
  props: {
    codigo: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      alumno: [],
      notaFinal: 0,
      updateForm: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const url = `https://200.105.154.18:5901/api/Alumnos/${this.codigo}`;
      this.$axios
        .get(url)
        .then((response) => {
          this.alumno = response.data;
          this.notaFinal =
            this.alumno.ex_GIT_6PTS +
            this.alumno.ex_ADOO_8PTS +
            this.alumno.ex_ScrumTra_41PTS +
            this.alumno.ex_SOLID_8PTS +
            this.alumno.ex_12FactApp_12PTS +
            this.alumno.ex_Docker_5PTS;
        })
        .catch((error) => {
          router.push({ name: 'home' });
        });
    },
    updateData() {
      this.$axios
        .put(
          'https://200.105.154.18:5901/api/Alumnos/' + this.alumno.id,
          this.alumno,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          if (response.status == 200) {
            this.$Swal.fire({
              title: 'Exitoso!',
              text: 'Datos Actualizados Exitosamente',
              icon: 'success',
              timer: 3000,
              showConfirmButton: false,
            });
            router.push({ name: 'home' });
          }
        })
        .catch((error) => {
          this.$Swal.fire(
            'Peligro!',
            'Hubo un error en actulizar los datos',
            'error',
            5000
          );
          alert('Error al actualizar los datos:', error);
        });
    },
  },
};
</script>
<style>
.text-green {
  color: green;
}
</style>
