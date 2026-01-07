<template>
  <div class="form-field">
    <label :for="name" class="form-label">{{ label }}</label>
    <textarea
      class="form-textarea"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    />

    <TransitionGroup name="list" tag="ul">
      <span v-for="item in error" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </TransitionGroup>
  </div>
</template>

<script setup>
const { placeholder, value, label, error } = defineProps([
  "placeholder",
  "value",
  "label",
  "error",
]);

const emit = defineEmits(["update:value"]);

const updateValue = (e) => emit("update:value", e.target.value);
</script>
