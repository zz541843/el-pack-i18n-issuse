<template>
    <div>
        <el-pagination
            v-model:currentPage="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000"
        />
    </div>
</template>

<script setup lang="ts">
import {ElPagination} from "element-plus"
import {ref} from "vue";
let currentPage1 = ref("")
</script>

<style scoped>

</style>
