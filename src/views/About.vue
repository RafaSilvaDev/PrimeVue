<template lang="pt-br">
  <div class="about">
    <div class="form p-fluid">
      <h1>
        <i class="pi pi-user" />
        <!-- Pegando nome do store -->
        {{ $store.state.user.name }}
      </h1>
      <h2>
        {{ this.myname }}
      </h2>
      <span class="p-input-icon-right p-float-label">
        <i class="pi pi-apple" />
        <!-- v-model altera/compartilha o conteúdo da variável de um componente -->
        <!-- v-bind altera, mas não compartilha o conteúdo da variável de um componente -->
        <InputText type="text" id="username" v-model="myname"/>
        <label for="username">Usuário</label>
      </span>

      <Password toggleMask></Password>
      <Button @click="saveName">Entrar</Button>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      myname: "Teste",
    };
  },
  methods: {
    saveName() {
      console.log("Nome salvo "+this.myname);
      // alterando o nome do store
      this.$store.commit('registerUser', this.myname);
    },
  },
};
</script>
<style scoped>
.about {
  background-color: burlywood;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  height: 60%;
  width: 30%;
  background-color: black;
  padding: 20px;
  border-radius: 10px;
}
</style>
