<template>
    <el-form-item :label="item.label">
        <el-input v-model="item.default"
         type="textarea"
          :placeholder="item.forItemList.placeholder"
            :maxlength="item.forItemList.maxlength" :clearable="item.forItemList.clearable"
            :readonly="item.forItemList.readonly" :disabled="item.forItemList.disabled" />
    </el-form-item>
</template>

<script setup>
import { ref } from "vue"
const props = defineProps({
    item: {
        type: Object,
        default: {}
    }
})

</script>

<style lang="scss" scoped></style>