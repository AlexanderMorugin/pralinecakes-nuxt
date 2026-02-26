<template>
  <div :class="place === 'admin' ? 'admin-form-field' : 'form-field'">
    <label
      :for="name"
      :class="place === 'admin' ? 'admin-form-label' : 'form-label'"
      >{{ label }}</label
    >
    <textarea
      :class="place === 'admin' ? 'admin-form-textarea' : 'form-textarea'"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    />

    <TransitionGroup name="list" tag="ul">
      <span v-for="item in error" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </TransitionGroup>

    <FormClearButton v-if="value" @click="$emit('clearInput')" :place="place" />
  </div>
</template>

<script setup>
const { placeholder, value, label, error, place } = defineProps([
  "placeholder",
  "value",
  "label",
  "error",
  "place",
]);

const emit = defineEmits(["update:value", "clearInput"]);

const updateValue = (e) => emit("update:value", e.target.value);
</script>
