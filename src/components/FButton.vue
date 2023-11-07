<script>
export default {
  name: "FButton",
  props: {
    size: {
      type: String,
      default: "middle",
    },
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>
<template>
  <button class="fred-btn" :class="[size, type]">
    <slot></slot>
  </button>
</template>

<style>
.fred-btn {
    appearance: none;
    border: none;
    outline: none;
    background: #fff;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
}

.large {
    width: 240px;
    height: 50px;
    font-size: 16px;
}

.medium {
    width: 180px;
    height: 50px;
    font-size: 16px;
}

.small {
    width: 100px;
    height: 32px;
}

.default {
    border-color: #e4e4e4;
    color: #666;
}

.primary {
    border-color: blue;
    background: blue;
    color: #fff;
}

.danger {
    border-color: red;
    color: red;
    background: lighten(red, 50%);
}
</style>

