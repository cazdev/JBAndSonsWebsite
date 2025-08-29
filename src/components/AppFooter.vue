<template>
  <footer>
    <div class="footer-content">
        <div>
            <div>FOLLOW US ON SOCIAL MEDIA</div>
            <div class="social-icons">
                <a href="https://www.instagram.com/jbsons/?hl=en" target="_blank" rel="noopener noreferrer" class="social-link">
                    <Instagram :size="20" />
                </a>
                <a href="https://www.facebook.com/jbsonsmanly/" target="_blank" rel="noopener noreferrer" class="social-link">
                    <Facebook :size="20" />
                </a>
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
import { Instagram, Facebook } from 'lucide-vue-next'
</script>

<style scoped>
footer {
  margin-top: 96px;
  font-size: 16px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  color: var(--color-primary-light);
  text-align: center;
  gap: 32px;
}

.social-icons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 4px;
}

.social-link {
  color: var(--color-primary-light);
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
}

.social-link:hover {
  color: var(--color-background);
  background: var(--color-primary);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
}

</style>
