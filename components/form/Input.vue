<template>
  <div :class="place === 'admin' ? 'admin-form-field' : 'form-field'">
    <label
      :for="name"
      :class="place === 'admin' ? 'admin-form-label' : 'form-label'"
      >{{ label }}</label
    >

    <!-- Последний в цепочке инпут, остлеживает валидацию при вводе -->
    <input
      v-if="lastInput"
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      :class="place === 'admin' ? 'admin-form-input' : 'form-input'"
    />
    <!-- Первый и средние в цепочке инпуты, остлеживает валидацию после перехода на другой инпут -->
    <input
      v-if="firstInput"
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @change="updateValue"
      :class="place === 'admin' ? 'admin-form-input' : 'form-input'"
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
const {
  label,
  type,
  name,
  placeholder,
  value,
  error,
  firstInput,
  lastInput,
  numberInput,
  place,
} = defineProps([
  "label",
  "type",
  "name",
  "placeholder",
  "value",
  "error",
  "firstInput",
  "lastInput",
  "numberInput",
  "place",
]);

const emit = defineEmits(["update:value", "clearInput"]);

const updateValue = (e) => emit("update:value", e.target.value);
</script>
