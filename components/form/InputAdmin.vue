<template>
  <div class="admin-form-field">
    <label :for="name" class="admin-form-label">{{ label }}</label>

    <input
      v-if="isFormEdit"
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      min="0"
      :value="value"
      @input="updateValue"
      class="admin-form-input"
      :class="type === 'number' ? 'admin-form-input_number' : ''"
    />
    <div v-else class="admin-form-input-submited">
      <span class="admin-form-input-text-submited">{{
        value ? value : "Пусто"
      }}</span>
    </div>

    <FormClearButton
      v-if="value && isFormEdit && type === 'text'"
      @click="$emit('clearInput')"
      place="admin"
    />
  </div>
</template>

<script setup>
const { label, type, name, placeholder, value, isFormEdit } = defineProps([
  "label",
  "type",
  "name",
  "placeholder",
  "value",
  "isFormEdit",
]);

const emit = defineEmits(["update:value", "clearInput"]);
const updateValue = (e) => emit("update:value", e.target.value);
</script>
