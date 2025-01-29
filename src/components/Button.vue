<script lnag="ts" setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    spinner: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    iconSpinner: {
        type: String,
        default: 'fa fa-spinner fa-spin'
    },
    btnClass: {
        type: String,
        default: ''
    }
})

defineEmits(['click'])
</script>

<template>
     <button class="btn relative" :class="btnClass" :disabled="spinner || disabled" @click="$emit('click')">
      <span class="absolute left-0 right-0 transition-1" :class="{ 'opacity-0 transition-1': !spinner }">
          <i :class="iconSpinner" aria-hidden="true"></i>
      </span>
      <span class="transition-1" :class="{ 'opacity-0 transition-1': spinner }">
          <i :class="icon"></i>
          {{ name }}
      </span>
  </button>
</template>


<style lang="scss" scoped>
.transition-1 {
  transition: 0.3s;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.left-0 {
  left: 0;
}

.right-0 {
  right: 0;
}

.opacity-0 {
  opacity: 0;
}

.btn {
  background: #434343;
  border: 0;
  outline: 0;
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  transition: .3s;
  cursor: pointer;
  &:hover {
      transition: .3s;
      filter: brightness(1.2);
  }
  &:disabled{
      opacity: .5;
      pointer-events: none;
      &:hover {
          transition: .3s;
          filter: brightness(1);
      }
  }
}
</style>
