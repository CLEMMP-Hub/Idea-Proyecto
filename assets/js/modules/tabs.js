export function initTabs() {
    const tabButtons = document.querySelectorAll('[data-tab-target]');

    function switchTab(tabId) {
        document.querySelectorAll('.tab-content').forEach((element) => {
            element.classList.remove('opacity-100', 'z-10');
            element.classList.add('opacity-0', 'pointer-events-none', 'z-0');
        });

        const selectedContent = document.getElementById(`content-${tabId}`);
        if (selectedContent) {
            selectedContent.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
            selectedContent.classList.add('opacity-100', 'z-10');
        }

        document.querySelectorAll('.tab-btn').forEach((element) => {
            element.classList.remove('bg-brand-600', 'text-white', 'shadow-lg');
            element.classList.add('text-slate-400');
        });

        const selectedButton = document.getElementById(`tab-${tabId}`);
        if (selectedButton) {
            selectedButton.classList.remove('text-slate-400');
            selectedButton.classList.add('bg-brand-600', 'text-white', 'shadow-lg');
        }
    }

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tabTarget;
            if (!tabId) {
                return;
            }
            switchTab(tabId);
        });
    });

    return { switchTab };
}
