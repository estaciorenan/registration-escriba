<template>
    <div class="main row d-flex">
        <div class="main-card d-flex flex-row">
            <div class="logo">
                <img src="../image/logo.png" alt="" width="300px">
            </div>
            <div class="items">
                <router-link to="/pessoas">
                    <div class="buttom-items">
                        <i class="fa fa-users fa-3x" aria-hidden="true"></i>
                    </div>
                </router-link>
                <router-link to="/pedidos">
                    <div class="buttom-items">
                        <i class="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "MyAccess",
    comments: {
    },
    data() {

    },
}
</script>

<style scoped>
.main {
    height: 100vh;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    background: #F4F6F6;
}

.main-card {
    height: 400px;
    width: 800px;
    justify-content: center;
    align-content: center;
    background: #e0e0e0;
    border-radius: 15px;
    box-shadow: 8px 8px 26px #a8a8a8,
        -13px -13px 26px #ffffff;
}

.logo {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D6EAF8;
    border-radius: 15px 0 0 15px;
}

.items {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffff;
    border-radius: 0 15px 15px 0;
}

.buttom-items {
    padding: 50px;
    border-radius: 15px;
    background: #e0e0e0;
    box-shadow: 5px 5px 10px #bebebe,
        -5px -5px 10px #ffffff;
    margin: 8px;
    color: black;
}

.buttom-items:hover {
    transition: all 4s;
    padding: 46px;
    background: #e0e0e0aa;
}
</style>
