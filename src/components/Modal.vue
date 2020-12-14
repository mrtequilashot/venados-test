<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
<template>
  <transition>
    <div class="modal">
      <div
        class="modal__container"
        role="dialog"
      >
        <header class="modal__header">
          <slot name="header">
            <button
              type="button"
              class="btn__close"
              @click="close"
            >
              x
            </button>
          </slot>
        </header>
        <section class="modal__body">
          <slot name="body"></slot>
        </section>
        <footer class="modal__footer">
          <slot name="footer">
            <button
              type="button"
              @click="close"
            >
                CERRAR
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__container {
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    min-height: 80%;
    width: 90%;
    flex-direction: column;
}

@media (min-width: 768px) {
    .modal__container {
        background: #ffffff;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        min-height: 80%;
        width: 30%;
        flex-direction: column;
    }
 }

.modal__header,
.modal__footer {
  padding: 15px;
  display: flex;
}

.modal__header {
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
}

.modal__footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal__body {
  position: relative;
  padding: 20px 10px;
}
.btn__close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: black;
    background: transparent;
  }
</style>
