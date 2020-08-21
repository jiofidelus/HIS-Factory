<template>
  <div class="match-parent">
      <div class="context-menu-list">
          <div class="menu-item">Change source</div>
          <div class="menu-item">Change target</div>
          <div class="menu-item">Change link</div>
          <div class="menu-item">Invert</div>
          <div class="menu-item">Redefine</div>
          <div class="menu-item">Delete</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.context-menu-list {
  display: flex;
  flex-direction: column;
  &>.menu-item {
    cursor: pointer;
    letter-spacing: 1px;
    width: $context-menu-width;
    padding: 10px 15px;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover{
      background-color: #eee;
    }
  }
}
</style>