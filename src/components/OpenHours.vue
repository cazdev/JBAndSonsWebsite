<template>
    <div id="open-hours">
        <div class="hours-container">
            <h1 class="hours-title">OPEN HOURS</h1>

            <div class="locations-grid">
                <div class="location-card">
                    <h2 class="location-name">NARRABEEN</h2>
                    <div class="hours-list">
                        <div class="hours-item closed">
                            <span class="day">MONDAY</span>
                            <span class="time">CLOSED</span>
                        </div>
                        <div class="hours-item">
                            <span class="day">TUESDAY - FRIDAY</span>
                            <span class="time">4PM - 9PM</span>
                        </div>
                        <div class="hours-item">
                            <span class="day">SATURDAY - SUNDAY</span>
                            <span class="time">12PM - 9PM</span>
                        </div>
                    </div>
                </div>

                <div class="location-card">
                    <h2 class="location-name">DEE WHY</h2>
                    <div class="hours-list">
                        <div class="hours-item closed">
                            <span class="day">MONDAY</span>
                            <span class="time">CLOSED</span>
                        </div>
                        <div class="hours-item">
                            <span class="day">TUESDAY - FRIDAY</span>
                            <span class="time">4PM - 9PM</span>
                        </div>
                        <div class="hours-item">
                            <span class="day">SATURDAY - SUNDAY</span>
                            <span class="time">12PM - 9PM</span>
                        </div>
                    </div>
                </div>

                <div class="location-card">
                    <h2 class="location-name">MANLY</h2>
                    <div class="hours-list">
                        <div class="hours-item closed">
                            <span class="day">MONDAY</span>
                            <span class="time">CLOSED</span>
                        </div>
                        <div class="hours-item">
                            <span class="day">TUESDAY - THURSDAY</span>
                            <span class="time">4PM - 9PM</span>
                        </div>
                        <div class="hours-item">
                            <span class="day">FRIDAY - SUNDAY</span>
                            <span class="time">12PM - 9PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
</script>

<style scoped>
#open-hours {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 150px;
    padding: var(--spacing-md);
}

.hours-container {
    text-align: center;
    max-width: 1200px;
    width: 100%;
}

.hours-title {
    font-family: var(--font-family-heading);
    font-size: 86px;
    line-height: 96px;
    font-weight: 200;
    color: var(--color-primary);
    margin-bottom: var(--spacing-xxl);
}

.locations-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-xl);
    margin-top: var(--spacing-lg);
}

.location-card {
    flex: 0 1 300px;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: var(--border-radius-base);
    padding: var(--spacing-lg);
    transition: var(--transition-hover);
}


.location-name {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-h2);
    font-weight: var(--font-weight-h2);
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
    letter-spacing: 1px;
}

.hours-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.hours-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-xs) 0;
    border-bottom: 1px solid var(--color-primary-transparent-10);
}

.hours-item:last-child {
    border-bottom: none;
}

.day {
    font-family: var(--font-family-primary);
    font-weight: 500;
    color: var(--color-text-high-contrast);
    font-size: 16px;
    text-align: left;
}

.time {
    font-family: var(--font-family-primary);
    font-weight: 600;
    color: var(--color-primary);
    font-size: 16px;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
    #open-hours {
        padding: var(--spacing-sm);
    }

    .hours-title {
        font-size: 48px;
        line-height: 52px;
        margin-bottom: var(--spacing-lg);
    }

    .locations-grid {
        gap: var(--spacing-md);
    }

    .location-card {
        padding: var(--spacing-md);
    }

    .location-name {
        font-size: 24px;
    }

    .day, .time {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .hours-title {
        font-size: 36px;
        line-height: 40px;
    }

    .location-name {
        font-size: 20px;
    }
}
</style>
