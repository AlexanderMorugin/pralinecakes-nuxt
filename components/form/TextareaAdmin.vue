<template>
  <div class="admin-form-field">
    <label :for="name" class="admin-form-label">{{ label }}</label>

    <textarea
      v-if="isFormEdit"
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      class="admin-form-textarea"
    />
    <div v-else class="admin-form-textarea-submited">
      <span class="admin-form-textarea-text-submited">{{
        value ? value : "Пусто"
      }}</span>
    </div>

    <FormClearButton
      v-if="value && isFormEdit"
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
