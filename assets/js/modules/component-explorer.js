export function initComponentExplorer(componentData) {
    const infoEmpty = document.getElementById('info-empty');
    const infoContent = document.getElementById('info-content');
    const infoTitle = document.getElementById('info-title');
    const infoFunc = document.getElementById('info-func');
    const infoTech = document.getElementById('info-tech');
    const infoScope = document.getElementById('info-scope');
    const infoIcon = document.getElementById('info-icon');
    const infoIconContainer = document.getElementById('info-icon-container');
    const infoBorder = document.getElementById('info-border');

    function showComponentInfo(componentId) {
        const data = componentData[componentId];
        if (!data) {
            return;
        }

        infoEmpty.classList.remove('opacity-100');
        infoEmpty.classList.add('opacity-0', 'pointer-events-none');

        infoContent.classList.remove('opacity-0', 'pointer-events-none');
        infoContent.classList.add('opacity-100');

        infoTitle.textContent = data.title;
        infoFunc.textContent = data.func;
        infoTech.textContent = data.tech;
        infoScope.textContent = data.scope;

        infoIcon.className = `fa-solid ${data.icon} text-2xl text-white`;
        infoIconContainer.className = `w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shrink-0 ${data.bgColor}`;
        infoBorder.className = `absolute top-0 left-0 w-full h-1 transition-colors duration-300 ${data.bgColor}`;
    }

    document.querySelectorAll('[data-component]').forEach((card) => {
        const componentId = card.dataset.component;
        if (!componentId) {
            return;
        }

        card.addEventListener('mouseenter', () => showComponentInfo(componentId));
        card.addEventListener('click', () => showComponentInfo(componentId));
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                showComponentInfo(componentId);
            }
        });
    });

    if (window.matchMedia('(max-width: 767px)').matches) {
        showComponentInfo('core');
    }

    return { showComponentInfo };
}
