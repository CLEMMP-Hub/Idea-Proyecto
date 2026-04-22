export function initSectionNavigation(config = {}) {
    const {
        triggerSelector = '[data-go-to-section]',
        targetAttribute = 'goToSection',
        behavior = 'smooth'
    } = config;

    const triggers = document.querySelectorAll(triggerSelector);

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const sectionId = trigger.dataset[targetAttribute];
            if (!sectionId) {
                return;
            }

            const targetSection = document.getElementById(sectionId);
            if (!targetSection) {
                return;
            }

            targetSection.scrollIntoView({ behavior, block: 'start' });
        });
    });
}
