<template>
    <div id="menu">
        <img class="image-container-left" src="../assets/images/ben-ross-standing-drink.png"></img>
        <h1 class="menu-title-text">M<br/>E<br/>N<br/>U</h1>
        <div class="image-container-right">
            <img src="../assets/images/ben-ross-standing-burger.png"></img>
            <button class="call-to-action">VIEW MENU</button>
        </div>
    </div>
  </template>

  <script setup>
  </script>

  <style scoped>
    #menu {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        gap: 16px;
        padding: 20px;
    }

    img {
        width: 250px;
    }

    .image-container-right img {
        transform: scaleX(-1);
    }

    .call-to-action {
        width: 120px;
        margin-left: auto;
        margin-right: auto;
        font-weight: 500;
    }

    .menu-title-text {
        font-size: 86px;
        line-height: 96px;
        font-weight: 200;
    }

    .image-container-left {
        padding-bottom: 76px;
    }

    .image-container-right {
        gap: 28px;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        img {
            width: 140px;
        }

        .call-to-action {
            width: 110px;
        }
    }
  </style>
