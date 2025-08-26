<template>
  <footer class="footer">
    <div class="footer-content">
        <div>
            <div>FOLLOW US ON SOCIAL MEDIA</div>
            <div class="social-icons">

            </div>
        </div>
        <div>
            <div>&copy; 2025 JB & Sons.</div>
            <div>WEBSITE CREATED BY HOCHA DIGITAL</div>
        </div>
        <div>
            Art collaboration with Benjamin ross
        </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-content {
  display: flex;
  justify-content: space-between;
  color: var(--color-primary-light);
  text-align: center;
  gap: 32px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
}

</style>
