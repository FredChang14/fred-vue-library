<script setup>
import { useMouse, FButton } from "fred-vue-library";
import "fred-vue-library/style.css";
const { x, y } = useMouse();
</script>


<template>
  <div>
    <FButton size="large" type="primary">測試按鈕</FButton>
    {{ x }},{{ y }}
  </div>
</template>
