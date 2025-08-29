<template>
    <div id="locations">
      <div class="locations-image-container">
        <h1 class="location-title">LOCATIONS</h1>
        <img src="../assets/images/ben-ross-locations-map.png" />
        <button class="call-to-action" @click="togglePopup">GET DIRECTIONS</button>

        <!-- Animated Popup -->
        <div v-if="showPopup" class="popup-overlay" @click="closePopup">
          <div class="popup-container" @click.stop>
            <div class="popup-header">
              <h3>Choose Location</h3>
              <button class="close-btn" @click="closePopup">&times;</button>
            </div>
            <div class="location-options">
              <a href="https://maps.app.goo.gl/5BAPfUewJjkSnTuD7" target="_blank" class="location-option">
                <span class="location-name">Narrabeen</span>
                <span class="location-arrow">→</span>
              </a>
              <a href="https://maps.app.goo.gl/DcVvhzh7DPiw14yHA" target="_blank" class="location-option">
                <span class="location-name">Dee Why</span>
                <span class="location-arrow">→</span>
              </a>
              <a href="https://maps.app.goo.gl/PCHMjzFeT9h8zDDT8" target="_blank" class="location-option">
                <span class="location-name">Manly</span>
                <span class="location-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'

  const showPopup = ref(false)

  const togglePopup = () => {
    showPopup.value = !showPopup.value
  }

  const closePopup = () => {
    showPopup.value = false
  }
  </script>

  <style scoped>
  #locations {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 150px;
    padding: 20px;
  }

  .open-hours {
    color: var(--color-primary-dark);
    position: static;
  }

  img {
        width: auto;
        height: 400px;
        object-fit: contain;
        padding-left: 128px;
    }

  .locations-image-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .call-to-action {
    position: absolute;
    width: 146px;
  }

  .location-title {
    position: absolute;
    text-align: center;
    font-weight: 200;
    top: -16px;
    right: 148px;
    font-size: 86px;
    line-height: 86px;
    margin: 0;
    z-index: 2;
  }

/* Popup Styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

.popup-container {
  background: #fff;
  border-radius: var(--border-radius-base);
  padding: var(--spacing-lg);
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-out;
  transition: var(--transition-hover);
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.popup-header h3 {
  margin: 0;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-h2);
  color: var(--color-primary);
  letter-spacing: 1px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: var(--transition-hover);
  color: var(--color-primary);
}

.close-btn:hover {
  background: var(--color-primary);
  color: var(--color-background);
}

.location-options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.location-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xs) 0;
  text-decoration: none;
  color: var(--color-text-high-contrast);
  transition: var(--transition-hover);
  border-bottom: 1px solid var(--color-primary-transparent-10);
}

.location-option:last-child {
  border-bottom: none;
}

.location-option:hover {
  color: var(--color-primary);
}

.location-name {
  font-family: var(--font-family-primary);
  font-weight: 500;
  font-size: 16px;
}

.location-arrow {
  font-family: var(--font-family-primary);
  font-weight: 600;
  color: var(--color-primary);
  font-size: 16px;
  transition: transform 0.2s ease;
}

.location-option:hover .location-arrow {
  transform: translateX(4px);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  #locations {
    flex-direction: column;
    gap: 32px;
    padding: 48px 10px;
    min-height: auto;
  }

  .call-to-action {
    position: static;
    width: 146px;
  }

  .locations-image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  .location-title {
    position: static;
    font-size: 48px;
    line-height: 48px;
  }

  img {
    padding-left: 0px;
  }
}
  </style>
