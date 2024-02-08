<script setup>
import './ChildrenComp.css'
function click() {
    window.localStorage.removeItem('token')
    alert("Akkauntad Chiqib Ketiz")
    location.reload()
}
</script>

<template>
    <div class="container">
        <div class="childrenitem">
            <button @click="click" class="childreditem-button">Log Out</button>
        </div>
    </div>
</template>